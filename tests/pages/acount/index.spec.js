/* eslint-disable no-undef */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import accountIndex from '@/pages/account/component/index.vue'
import add from '@/pages/account/component/add.vue'
import elementUI from 'element-ui'
import Vuex from 'vuex'
const Dexie = require('dexie')
Dexie.dependencies.indexedDB = require('fake-indexeddb')
Dexie.dependencies.IDBKeyRange = require('fake-indexeddb/lib/FDBKeyRange')
const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(elementUI)
describe('account index.vue', () => {
  const assignMock = jest.fn()
  delete window.location
  window.location = { assign: assignMock }
  afterEach(() => {
    assignMock.mockClear()
  })
  let store
  let state
  let mutations
  beforeEach(() => {
    state = { }
    mutations = {
      SET_PRIVATEKEY () {},
      SET_ADDRESS () {},
      SET_DIGEST () {},
      SET_ACCOUNTNAME () {},
      SET_DERIVEINDEX () {}
    }
    store = new Vuex.Store({
      modules: {
        app: {
          state,
          mutations,
          namespaced: true
        }
      }
    })
  })
  Object.defineProperty(window, 'dataObj', {
    value: {
      href: './setting.html'
    }
  })

  const addComponent = shallowMount(add, {
    propsData: {
      addName: ''
    },
    computed: {
      active () {
        return true
      }
    },
    mocks: {
      $t: key => key
    }
  })
  const wrapper = shallowMount(accountIndex, {
    store,
    data () {
      return {
        addAccountVisable: true,
        db: {
          addTable: jest.fn(),
          getTable: jest.fn(),
          bulkAddTable: jest.fn(),
          bulkPutTable: jest.fn(),
          modifyTable: jest.fn(),
          deleteTable: jest.fn(),
          clearTable: jest.fn()
        },
        mneAccount: [],
        pkAccount: []
      }
    },
    computed: {
      address () {
        return 'f1ntv4qlgoi55wqqxrxxolatfdgn7xvu7vfhrkcfq'
      },
      rpc () {
        return 'https://api.fivetoken.io'
      },
      networkType () {
        return 'proxy'
      },
      accountList () {
        return [
          {
            accountName: 'Account1',
            address: 'f1ntv4qlgoi55wqqxrxxolatfdgn7xvu7vfhrkcfq',
            createType: 'mnemonic',
            create_time: 1631613193,
            digest: 'zBUjeDDJuuDAPNQF',
            fil: 0,
            id: 1,
            isDelete: 0,
            khazix: 'khazix',
            privateKey: '98b983395737275c208f5b6884180cbc7575e7c208dba4621da300fc5248046ec7224a209285b4e9e770fa1e',
            rpc: 'https://api.fivetoken.io'
          }
        ]
      },
      symbol () {
        return 'FIL'
      },
      filecoinAddress0 () {
        return 'f'
      },
      deriveIndex () {
        return 1
      },
      networks () {
        return []
      }
    },
    mocks: {
      $t: key => key
    },
    stubs: {
      'el-dialog': true,
      'el-input': true,
      'el-button': true
    }
  })
  test('add.vue - test', () => {
    const close = addComponent.find('.close')
    close.trigger('click')
    addComponent.vm.changeInput(1)
    addComponent.vm.confirmAdd()
  })
  test('index.vue-test', async () => {
    const lock = wrapper.find('.lock')
    lock.trigger('click')

    wrapper.vm.layoutMounted()
    const acc = {
      address: 'f1ntv4qlgoi55wqqxrxxolatfdgn7xvu7vfhrkcfq',
      accountName: 'Account2',
      privateKey: '98b983395737275c208f5b6884180cbc7575e7c208dba4621da300fc5248046ec7224a209285b4e9e770fa1e',

      digest: 'zBUjeDDJuuDAPNQF',
      createType: 'mnemonic',
      create_time: 1631613193,
      rpc: 'https://api.fivetoken.io'
    }
    wrapper.vm.changeAccount(acc)
    wrapper.vm.confirmAdd()
    wrapper.vm.initAdd()
    wrapper.vm.closeAdd()
    wrapper.vm.back()
    wrapper.vm.createWallet()
    wrapper.vm.toSetting()
    wrapper.vm.importWallet()
  })
})
