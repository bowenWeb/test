<template>
    <layout @layoutMounted="layoutMounted">
        <div class="send-fil">
            <stepOne
                v-if="step === 1"
                :formData="formData"
                @formDataChange="formDataChange"
                @next="next"
            />
            <stepTwo
                v-else
                :price_currency="price_currency"
                :formData="formData"
                :mainBalance="mainBalance"
                @formDataChange="formDataChange"
                :baseFeeCap="baseFeeCap"
                :baseLimit="baseLimit"
                @previousStep="step = 1"
                @sendFil="sendFil"
            />

            <div class="loading" v-if="isFetch">
                <img :src="loading" alt="" class="img">
            </div>
        </div>
    </layout>
</template>

<script>
import stepOne from './step-1'
import stepTwo from './step-2'
import layout from '@/components/layout'
import { getDecodePrivateKey, formatNumber, getGlobalKek } from '@/utils'
import { GlobalApi } from '@/api'
import { mapMutations, mapState } from 'vuex'
import ABI from '@/utils/abi'
import { ethers } from 'ethers'
import { BigNumber } from 'bignumber.js'
import { Database } from '@/utils/database.js'
export default {
  data () {
    return {
      loading: require('@/assets/image/loading.png'),
      isFetch: false,
      step: 1,
      price_currency: 0,
      nonce: 0,
      maxNonce: 0,
      baseFeeCap: 0,
      baseLimit: 0,
      pkk: '',
      contractSigner: null,
      db: null,
      mainBalance: 0,
      formData: {
        balance: 0,
        to: '',
        toName: '',
        fil: '',
        symbol: '',
        chainName: '',
        gasLimit: 0,
        gasPremium: 0,
        gasFeeCap: 0,
        decimals: 0,
        isAll: 0,
        isMain: 1,
        contract: ''
      }
    }
  },
  computed: {
    ...mapState('app', [
      'rpc',
      'address',
      'privateKey',
      'networkType',
      'accountList',
      'activenNetworks',
      'decimals',
      'ids',
      'symbol',
      'currency'
    ])
  },
  components: {
    stepOne,
    layout,
    stepTwo
  },
  methods: {
    ...mapMutations('send-fil', [
      'SET_ACCOUNTLIST',
      'SET_ADDRESSBOOK',
      'SET_ADDRESSRECORDLAST',
      'SET_TOKENLIST'
    ]),
    async layoutMounted () {
      const kek = getGlobalKek()
      this.pkk = getDecodePrivateKey(this.privateKey, kek, this.networkType)
      const db = new Database()
      this.db = db
      const myRecordLast = await db.getTable('addressRecordLast', {
        rpc: this.rpc,
        address: this.address
      })
      this.SET_ADDRESSRECORDLAST(myRecordLast)
      const addressBook = await db.getTable('addressBook', { rpc: this.rpc })

      this.SET_ADDRESSBOOK(addressBook)
      this.SET_ACCOUNTLIST(this.accountList)
      const chainName = this.activenNetworks.length && this.activenNetworks[0].name
      this.$set(this.formData, 'chainName', chainName)
      this.$set(this.formData, 'symbol', this.symbol)
      this.$set(this.formData, 'decimals', this.decimals)
      this.getFilPricePoints()
      await this.getBalanceNonceByAddress()
      this.getTokenList()
    },
    async getTokenList () {
      const list = await this.db.getTable('tokenList', {
        rpc: this.rpc,
        address: this.address
      })
      const chainImg = this.activenNetworks.length && this.activenNetworks[0].image
      const customNetwork = this.activenNetworks.length && !this.activenNetworks[0].disabled
      const tokenList = [
        {
          rpc: this.rpc,
          chainName: this.formData.chainName,
          decimals: this.decimals,
          symbol: this.symbol,
          contract: '',
          balance: this.formData.balance,
          isMain: 1,
          image: chainImg,
          customNetwork
        }
      ]
      const provider = ethers.getDefaultProvider(this.rpc)
      list.forEach(async (n) => {
        try {
          const contract = new ethers.Contract(n.contract, ABI, provider)
          contract.balanceOf(this.address).then(res => {
            const balance = res.toString()
            const num = Number(balance) / Math.pow(10, Number(n.decimals))
            const big = new BigNumber(num).toFixed()
            const _balance = formatNumber(big, 12)
            tokenList.push(
              {
                ...n,
                balance: _balance,
                isMain: 0,
                chainName: this.formData.chainName,
                image: '',
                contract: n.contract
              }
            )
          })
        } catch (err) {
          console.log(err, 'getTokenList err')
        }
      })
      this.SET_TOKENLIST(tokenList)
    },
    formDataChange (obj) {
      const { key, value } = obj
      switch (key) {
        case 'to':
          if (value) {
            this.getBaseFeeAndGas(this.address, value, this.maxNonce)
          }
          // eslint-disable-next-line no-case-declarations
          const { accountName } = obj
          this.$set(this.formData, 'toName', accountName)
          break
        case 'isAll':
          if (value === 1) {
            const fil = this.formData.balance
            this.$set(this.formData, 'fil', fil)
          }
          break
        case 'token':
          // eslint-disable-next-line no-case-declarations
          const { balance, symbol, chainName, decimals, isMain, contract } = value
          this.formData = Object.assign({}, this.formData, {
            balance,
            fil: '',
            symbol,
            chainName,
            decimals,
            isAll: 0,
            isMain,
            contract
          })
          break
        case 'fil':
          this.$set(this.formData, 'isAll', 0)
          break
      }
      this.$set(this.formData, key, value)
    },
    async getNextNonce () {
      const time = parseInt(new Date().getTime() / 1000)
      const messageList = await this.db.getTable('messageList', { rpc: this.rpc })
      const myMsgList = messageList.filter(n => {
        return n.from === this.address
      })
      const creatTimeList = myMsgList.map(n => {
        return n.create_time
      }) || []
      const nonceList = myMsgList.map(n => {
        return n.nonce || 0
      }) || []
      const maxDbCreateTime = (creatTimeList.length && Math.max(...creatTimeList)) || 0
      const maxDbNonce = nonceList.length && Math.max(...nonceList)
      // nonce time > 300s res.nonce ,else db none
      const maxNonce = time - maxDbCreateTime > 300 ? this.nonce : Math.max(this.nonce, maxDbNonce)
      this.maxNonce = maxNonce
    },
    async getBalanceNonceByAddress () {
      const MyGlobalApi = new GlobalApi()
      MyGlobalApi.setRpc(this.rpc)
      MyGlobalApi.setNetworkType(this.networkType)
      const res = await MyGlobalApi.getBalance(this.address)
      const { balance, nonce } = res
      const dec = balance / Math.pow(10, Number(this.decimals))
      const big = new BigNumber(dec).toFixed()
      const num = formatNumber(big, 12)
      this.$set(this.formData, 'balance', num)
      this.mainBalance = Number(num)
      this.nonce = nonce
      this.getNextNonce()
    },
    async getBaseFeeAndGas (from, to, nonce) {
      const MyGlobalApi = new GlobalApi()
      MyGlobalApi.setRpc(this.rpc)
      MyGlobalApi.setNetworkType(this.networkType)
      const res = await MyGlobalApi.getGasFee(from, to, nonce)
      const { gasLimit, gasPremium, gasFeeCap } = res
      this.$set(this.formData, 'gasLimit', gasLimit)
      this.$set(this.formData, 'gasPremium', gasPremium)
      this.$set(this.formData, 'gasFeeCap', gasFeeCap)
      this.baseFeeCap = gasFeeCap
      this.baseLimit = gasLimit
      if (this.formData.isAll === 1) {
        const fil = this.formData.balance
        this.$set(this.formData, 'fil', fil)
      }
    },
    async getFilPricePoints () {
      if (this.ids) {
        const MyGlobalApi = new GlobalApi()
        MyGlobalApi.setRpc(this.rpc)
        MyGlobalApi.setNetworkType(this.networkType)
        const res = await MyGlobalApi.getPrice(this.ids)
        const { usd, cny } = res
        if (this.currency === 'cny') {
          this.price_currency = cny
        } else {
          this.price_currency = usd
        }
      }
    },
    async next () {
      const balance = Number(this.formData.balance)
      const fil = Number(this.formData.fil)
      const isNumber = new BigNumber(fil).isPositive()
      if (isNumber) {
        if (fil > balance) {
          this.$message.error(this.$t('sendFil.insufficientBalance'))
        } else {
          this.step = 2
          this.isFetch = true
          await this.getBaseFeeAndGas(this.address, this.formData.to, this.maxNonce)
          this.isFetch = false
          const gas = (this.formData.gasFeeCap * this.formData.gasLimit) / Math.pow(10, 9)
          if (this.formData.isMain === 1) {
            if (this.formData.isAll === 1) {
              if (balance > gas) {
                const fil = balance - gas
                const big = new BigNumber(fil)
                const str = big.toFixed()
                const num = formatNumber(str, 12)
                this.$set(this.formData, 'fil', num)
              } else {
                this.$message.error(this.$t('sendFil.insufficientBalance'))
              }
            }
          } else {
            if (this.formData.isAll === 1) {
              if (this.mainBalance > gas) {
                this.$set(this.formData, 'fil', balance)
              } else {
                this.$message.error(this.$t('sendFil.insufficientBalance'))
              }
            }
          }

          if (this.formData.isMain !== 1) {
            const double = this.formData.gasLimit * 2.5
            this.$set(this.formData, 'gasLimit', double)
            const provider = ethers.getDefaultProvider(this.rpc)
            const wallet = new ethers.Wallet(this.pkk, provider)
            const contractSigner = new ethers.Contract(this.formData.contract, ABI, wallet)
            this.contractSigner = contractSigner
          }
        }
      } else {
        this.$message.error(this.$t('sendFil.vaildNumber'))
      }
    },
    async sendToken () {
      try {
        this.isFetch = true
        // let provider = ethers.getDefaultProvider(this.rpc);
        // let wallet = new ethers.Wallet(this.pkk, provider);
        // let contractSigner = new ethers.Contract(this.formData.contract, ABI, wallet);
        const fil = this.formData.fil.toString()
        const numberOfTokens = ethers.utils.parseUnits(fil, this.formData.decimals)
        const allGasFee = this.formData.gasFeeCap * this.formData.gasLimit * Math.pow(10, 9)
        const _gasBig = new BigNumber(allGasFee)
        const _gasStr = _gasBig.toFixed()
        const _AllGas = formatNumber(_gasStr, 18)
        this.contractSigner.transfer(this.formData.to, numberOfTokens, {
          gasPrice: this.formData.gasFeeCap * Math.pow(10, 9),
          gasLimit: Math.ceil(this.formData.gasLimit)
        }).then(async (res) => {
          // eslint-disable-next-line camelcase
          const create_time = parseInt(new Date().getTime() / 1000)
          const _value = this.formData.fil * Math.pow(10, Number(this.formData.decimals))
          await this.db.addTable('messageList', {
            signed_cid: res.hash,
            from: this.address,
            to: this.formData.to,
            create_time,
            block_time: 0,
            nonce: res.nonce,
            decimals: this.formData.decimals,
            token: this.formData.symbol,
            allGasFee: _AllGas,
            type: 'pending',
            khazix: 'khazix',
            value: _value,
            rpc: this.rpc
          })
          await this.db.deleteTable('addressRecordLast', {
            address: this.formData.to,
            rpc: this.rpc
          })
          await this.db.addTable('addressRecordLast', {
            address: this.formData.to,
            create_time,
            rpc: this.rpc,
            khazix: 'khazix'
          })
          this.isFetch = false
          window.location.href = './wallet.html?fromPage=sendFil'
        }).catch(error => {
          console.log(error, 222222)
          if (error.error && error.error.message) {
            if (error.error.message.indexOf('insufficient funds') > -1) {
              this.$message({
                type: 'error',
                message: 'insufficient funds for gas * price + value'
              })
            } else {
              this.$message({
                type: 'error',
                message: error.error && error.error.message
              })
            }
          }
          setTimeout(() => {
            this.isFetch = false
          }, 2000)
        })
      } catch (error) {
        console.log(error, 33333)
        this.$message({
          type: 'error',
          message: error && error.message
        })
        this.isFetch = false
      }
    },
    async sendFil () {
      const balance = Number(this.formData.balance)
      const gas = (this.formData.gasFeeCap * this.formData.gasLimit) / Math.pow(10, 9)
      const fil = Number(this.formData.fil)
      console.log(this.formData.isMain, 'this.formData.isMain')
      if (this.formData.isMain === 1) {
        if (fil + gas > balance) {
          this.$message.error(this.$t('sendFil.insufficientBalance'))
          return
        }
      } else {
        if (gas > this.mainBalance || fil > balance) {
          this.$message.error(this.$t('sendFil.insufficientBalance'))
          return
        }
      }
      // eslint-disable-next-line camelcase
      const create_time = parseInt(new Date().getTime() / 1000)
      if (this.formData.isMain === 1) {
        this.isFetch = true
        try {
          const address = this.address
          const tx = {
            from: address,
            to: this.formData.to,
            value: this.formData.fil,
            privateKey: this.pkk,
            nonce: this.maxNonce,
            GasPremium: this.formData.gasPremium,
            GasFeeCap: this.formData.gasFeeCap * Math.pow(10, 9),
            GasLimit: Math.ceil(this.formData.gasLimit)
          }

          const MyGlobalApi = new GlobalApi()
          MyGlobalApi.setRpc(this.rpc)
          MyGlobalApi.setNetworkType(this.networkType)
          const result = await MyGlobalApi.sendTransaction(tx)
          const allGasFee = this.formData.gasFeeCap * this.formData.gasLimit * Math.pow(10, 9)
          const _gasBig = new BigNumber(allGasFee)
          const _gasStr = _gasBig.toFixed()
          const _AllGas = formatNumber(_gasStr, 18)
          if (result && result.signed_cid) {
            const _value = this.formData.fil * Math.pow(10, Number(this.formData.decimals))
            await this.db.addTable('messageList', {
              signed_cid: result.signed_cid,
              from: address,
              to: this.formData.to,
              create_time,
              block_time: 0,
              nonce: result.nonce,
              allGasFee: _AllGas,
              decimals: this.formData.decimals,
              token: this.formData.symbol,
              type: 'pending',
              khazix: 'khazix',
              value: _value,
              rpc: this.rpc
            })
            await this.db.deleteTable('addressRecordLast', {
              address: this.formData.to,
              rpc: this.rpc
            })
            await this.db.addTable('addressRecordLast', {
              address: this.formData.to,
              create_time,
              rpc: this.rpc,
              khazix: 'khazix'
            })
            this.isFetch = false
            // window.location.href = './wallet.html?fromPage=sendFil'
          } else {
            this.isFetch = false
          }
        } catch (err) {
          this.isFetch = false
          console.log(err, 'senFIl err')
        }
      } else {
        this.sendToken()
      }
    }
  }
}
</script>

<style  lang="less" scoped>
.send-fil{
    width: 100%;
    height: 100%;
    position: relative;

    .loading{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.6);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999;
        .img{
            animation:turnX 3s linear infinite;
        }
        @keyframes turnX{
            0%{
                transform:rotateZ(0deg);
            }
            100%{
                transform:rotateZ(360deg);
            }
        }
    }
    /deep/.el-dialog{
        margin: 0 auto;
        &.is-fullscreen{
            border-radius: 0;
            .el-dialog__body{
                width: 100%;
                height: 100%;
            }
        }
    }
    /deep/.el-dialog__header{
        padding:0;
    }
    /deep/.el-dialog__body{
        padding: 0;
    }
    /deep/.el-dialog__footer{
        padding: 30px;
        border-top:1px solid #eee;
    }
}
</style>
