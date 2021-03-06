/* eslint-disable camelcase */
const create_time = parseInt(new Date().getTime() / 1000)
const en = {
  header: {
    customRpc: 'Custom RPC'
  },
  welcome: {
    title: 'Welcome to FiveToken',
    subTitle1: 'Bridge Filecoin ecosystem to Web 3 and metaverse with multi-chain integration and reliable identity management;',
    subTitle2: 'We are very happy to have you.',
    btn1: 'Create a new wallet',
    btn2: 'Import existing wallet'
  },
  creatWallet: {
    title: 'Create a new wallet',
    importWords: 'Import mnemonic words',
    back: 'Go back',
    accountName: 'Please enter your username',
    nameTips: 'No more than 15 characters',
    nameError: 'Invalid account name',
    password: 'Please enter your passwords',
    passwordTips: 'At least 8 characters',
    passwordError: 'Invalid passwords',
    diffError: 'Your current passwords do not match to your first one',
    correctPassword: 'Please enter the correct passwords',
    confirmPassword: 'Confirm passwords',
    btn: 'Next step'
  },
  creatWords: {
    title: 'Back up mnemonic words',
    subTitle: 'Please copy your mnemonic words in correct order',
    showWords: 'Click here to display your mnemonic words',
    btn1: 'Verify your mnemonic words',
    btn2: 'Enter into the wallet',
    copy: 'Copy mnemonic words',
    copySuccess: 'Copied successfully',
    tips1: '！ Please save your mnemonic words in a safe place, never connecting to the internet.',
    tips2: '！ Do not share and save mnemonic words in the network (such as emails, photo albums, social applications, etc.).'
  },
  checkWords: {
    title: 'Verify your mnemonic words',
    subTitle: 'Please click the mnemonic words below in correct order to complete the backup verification.',
    btn: 'Confirm',
    checkError: 'Error in your mnemonic words'
  },
  importWords: {
    title: 'Import mnemonic words',
    subTitle: 'Please enter your mnemonic words to restore your wallet',
    tips: 'Separate words with spaces',
    btn: 'Import',
    error: 'Errors in your mnemonic words',
    exist: 'Existed wallet'
  },
  importPrivatkey: {
    title: 'Import private key',
    label1: 'Please select a network',
    label2: 'Please enter your private key to restore your wallet',
    btn: 'Import',
    titleNetwork: 'Select a network',
    importError: 'The network is not supported',
    exist: 'Existed account'
  },
  account: {
    title: 'Account',
    lock: 'Locking',
    mneAccount: 'Mnemonic words account',
    pkAccount: 'Private key account',
    createWallet: 'Create a wallet',
    import: 'Import private key',
    setting: 'Setting',
    titleAdd: 'Add an account',
    addTips: 'The address is shared with the same mnemonic words',
    addLabel: 'Account name',
    confirm: 'Confirm',
    cancel: 'Cancel'
  },
  wallet: {
    tab: [
      { name: 'Assets', type: '1' },
      { name: 'Activity', type: '2' }
    ],
    menu: [
      { name: 'Modify account name', action: 'editName' },
      { name: 'View in browser', action: 'viewInBrowser' },
      { name: 'Export private key', action: 'backupPrivateKey' },
      { name: 'Delete the wallet', action: 'deleteWallet' }
    ],
    statusSuccess: 'Completed',
    statusError: 'Failed',
    statusPending: 'Confirming',
    send: 'Send',
    received: 'Received',
    labelSend: 'Sending address',
    labelReceived: 'Receiving address',
    titleEdit: 'Modify account name',
    editLabel: 'Account name',
    editTips: 'No more than 15 characters',
    cancel: 'Cancel',
    confirm: 'Confirm',
    deleteTitle: 'Delete the confirmation',
    deleteTips: 'Please make sure the private key is backed up. After deleting, if you want to show the wallet, you need to import it with the private key.',
    copyAddress: 'Copy the address',
    copySuccess: 'Copy Succeeded',
    tranRecord: 'Activity record',
    noTransactionRecord: 'No Activity',
    waiting: 'Waiting',
    noBrowser: 'The blockchain browser address is not added to the current network'
  },
  messageDetail: {
    title: 'Detailed messages',
    amount: 'Quantity',
    willgasFee: 'Max. Estimated gas fee',
    gasFee: 'Handling fee',
    from: 'Sender',
    to: 'Receiver',
    messageId: 'Message ID',
    success: 'Succeeded',
    error: 'Failed',
    pending: 'Confirming',
    height: 'Height',
    noBrowser: 'The blockchain browser address has not been added in the current network.'
  },
  addToken: {
    addToken: 'Add token',
    contractAddress: 'Contract address',
    token: 'Token',
    tokenSymbol: 'Symbol',
    decimalPoint: 'Decimal point',
    error: 'Tokens have been added',
    addressError: 'The contract address is incorrect'
  },
  sendFil: {
    send: 'Send',
    token: 'Token',
    toAddress: 'Receving address',
    number: 'Quantity',
    all: 'All',
    available: 'Available',
    selectToken: 'Select a token',
    selectAddress: 'Select the address',
    recordLast: 'Recently used',
    myAccount: 'My account',
    addressBook: 'Address book',
    gasLimit: 'Gas Limit',
    confirmTransaction: 'Confirm transaction',
    sendAmount: 'Send amount',
    networkGas: 'GasFeeCap',
    maxGas: 'Max. Estimated gas fee',
    totalTips: 'Amount + gas fee',
    total: 'Total amount',
    gasFeeError: 'Less than current BaseFee',
    gasLimitError: 'Less than the current Gas Limit',
    addressError: 'Incorrect address format',
    insufficientBalance: 'Insufficient balance',
    filBaseFeeTips: 'The transaction fee rate is used to pay for the network fee, and the message will be packaged only when the transaction fee>BaseFee. nanoFIL = 10^-9 FIL',
    baseFeeTips: 'Gas unit is the number of paid tokens per unit of Gas, Gwei=10^-9.',
    gasLimitTips: 'Gas Limit is the maximum amount of gas that will be consumed when sending a message.',
    vaildNumber: 'Please enter a valid number',
    cancel: 'Cancel',
    confirm: 'Confirm'
  },
  setting: {
    name: 'Setting',
    currency: 'Currency',
    language: 'Language',
    titleCurrency: 'Choose the currency',
    titlelanguage: 'Choose the language',
    currencyList: [
      { label: 'USD', value: 'usd' },
      { label: 'CNY', value: 'cny' }
    ],
    languageList: [
      { label: 'English', value: 'en' },
      { label: '한국어', value: 'ko' },
      { label: '日本語', value: 'ja' },
      { label: '中文', value: 'zh' }
    ],
    menu: [
      { name: 'Network', url: './setting-networks.html' },
      { name: 'Address book', url: './setting-address.html' },
      { name: 'Mnemonic words backup', url: './setting-backups.html' },
      { name: 'About', url: './setting-about.html' }
    ]
  },
  settingNetworks: {
    title: 'Network',
    addNetwork: 'Add network',
    networkName: 'Network name',
    deleteTitle: 'Delete network',
    editNewwork: 'Edit network',
    viewNetwork: 'Network information',
    addTips: ' Malicious networks can falsely report the status of the block, so please add a network you trust.',
    chainID: 'Chain ID',
    symbol: 'Symbol',
    rpc: 'RPC URL',
    browser: 'URL of blockchain browser (optional)',
    cancel: 'Cancel',
    confirm: 'Confirm',
    save: 'Save',
    addError: 'Unsupported network',
    isExistError: 'RPC already exists',
    delete: 'Delete',
    deleteTips: 'Are you sure you want to delete this network?',
    deleteSuccess: 'Delete successfully'
  },
  settingAbout: {
    about: 'About',
    filVersion: 'FiveToken',
    Version: 'Version',
    tips: 'Bridge Filecoin ecosystem to Web 3 and metaverse with multi-chain integration and reliable identity management;',
    privacy: 'Privacy policy',
    useRule: 'User agreement'
  },
  settingBackups: {
    backupsCheck: 'Back up verification',
    backupsWords: 'Back up mnemonic words',
    backupsPk: 'Back up private key',
    pkTips: 'Please do not show it to others, you can control your account with the private key.',
    mneTips: 'Please do not show it to others, you can control your account with mnemonic words.',
    next: 'Next step',
    close: 'Close',
    inputPassword: 'Enter your passwords',
    copy: 'Copy to clipboard',
    copySuccess: 'Copy successfully',
    passwordError: 'Incorrect passwords',
    yourMne: 'Your mnemonic words',
    yourPk: 'Your private key'
  },
  settingAddress: {
    addressBook: 'Address book',
    name: 'Label name',
    address: 'Address',
    addressError: 'Error in address format',
    edit: 'Edit',
    cancel: 'Cancel',
    confirm: 'Confirm',
    addAddress: 'Add address',
    addressDetail: 'Address details',
    editAddress: 'Edit address',
    copySuccess: 'Copy successfully',
    editSuccess: 'Edit successfully',
    addressIsExist: 'Existed address',
    add: 'Add to',
    delete: 'Delete',
    deleteTitle: 'Delete address',
    deleteTips: 'Are you sure you want to delete this address?',
    deleteSuccess: 'Delete successfully'
  },
  lock: {
    title: 'Welcome to FiveToken',
    subTitle: 'Bridge Filecoin ecosystem to Web 3 and metaverse with multi-chain integration and reliable identity management;',
    unlocking: 'Unlock',
    label: 'Passwords',
    passwordError: 'Password Error'
  },
  connect: {
    title: 'Adopt FiveToken to connect to your dApp',
    cancel: 'Cancel',
    connect: 'Connect'
  },
  defaultNetworks: [
    {
      name: 'Filcoin Mainnet',
      // rpc:'http://192.168.1.161:8081',
      rpc: 'https://api.fivetoken.io',
      chainID: '',
      symbol: 'FIL',
      ids: 'filecoin',
      browser: 'https://filscan.io',
      khazix: 'khazix',
      create_time: create_time,
      networkType: 'proxy',
      filecoinAddress0: 'f',
      decimals: 18,
      disabled: true,
      image: 'fil.svg',
      deriveIndex: 0
    },
    {
      name: 'Ethereum Mainnet',
      rpc: 'https://mainnet.infura.io/v3/96837d28a772466ca6ed88eddb221e09',
      chainID: '1',
      symbol: 'ETH',
      browser: 'https://etherscan.io',
      ids: 'ethereum',
      khazix: 'khazix',
      networkType: 'ethereum',
      filecoinAddress0: '',
      create_time: create_time + 1,
      decimals: 18,
      image: 'eth.svg',
      disabled: true,
      deriveIndex: 0
    },
    {
      name: 'Binance Smart Chain',
      rpc: 'https://bsc-dataseed.binance.org',
      chainID: '56',
      symbol: 'BNB',
      ids: 'binancecoin',
      browser: 'https://bscscan.com',
      khazix: 'khazix',
      networkType: 'ethereum',
      filecoinAddress0: '',
      create_time: create_time + 2,
      decimals: 18,
      image: 'bnb.svg',
      disabled: true,
      deriveIndex: 0
    },
    {
      name: 'Filecoin Calibration Testnet',
      // rpc:'http://192.168.1.161:9091',
      rpc: 'https://api.calibration.fivetoken.io',
      chainID: '',
      symbol: 'FIL',
      ids: 'filecoin',
      browser: 'https://calibration.filscan.io',
      khazix: 'khazix',
      networkType: 'proxy',
      filecoinAddress0: 't',
      create_time: create_time + 3,
      decimals: 18,
      image: 'fil.svg',
      disabled: true,
      deriveIndex: 0
    },
    {
      name: 'Ropsten Test Network',
      rpc: 'https://ropsten.infura.io/v3/96837d28a772466ca6ed88eddb221e09',
      chainID: '3',
      symbol: 'ETH',
      ids: 'ethereum',
      browser: 'https://ropsten.etherscan.io',
      khazix: 'khazix',
      networkType: 'ethereum',
      filecoinAddress0: '',
      create_time: create_time + 4,
      decimals: 18,
      image: 'eth.svg',
      disabled: true,
      deriveIndex: 0
    },
    {
      name: 'Kovan Test Network',
      rpc: 'https://kovan.infura.io/v3/96837d28a772466ca6ed88eddb221e09',
      chainID: '42',
      symbol: 'ETH',
      ids: 'ethereum',
      browser: 'https://kovan.etherscan.io',
      khazix: 'khazix',
      networkType: 'ethereum',
      filecoinAddress0: '',
      create_time: create_time + 5,
      decimals: 18,
      image: 'eth.svg',
      disabled: true,
      deriveIndex: 0
    },
    {
      name: 'Rinkeby Test Network',
      rpc: 'https://rinkeby.infura.io/v3/96837d28a772466ca6ed88eddb221e09',
      chainID: '4',
      symbol: 'ETH',
      ids: 'ethereum',
      browser: 'https://rinkeby.etherscan.io',
      khazix: 'khazix',
      networkType: 'ethereum',
      filecoinAddress0: '',
      create_time: create_time + 6,
      decimals: 18,
      image: 'eth.svg',
      disabled: true,
      deriveIndex: 0
    },
    {
      name: 'Goerli Test Network',
      rpc: 'https://goerli.infura.io/v3/96837d28a772466ca6ed88eddb221e09',
      chainID: '5',
      symbol: 'ETH',
      ids: 'ethereum',
      browser: 'https://goerli.etherscan.io',
      khazix: 'khazix',
      networkType: 'ethereum',
      filecoinAddress0: '',
      create_time: create_time + 7,
      decimals: 18,
      image: 'eth.svg',
      disabled: true,
      deriveIndex: 0
    },
    {
      name: 'Binance TEST',
      rpc: 'https://data-seed-prebsc-1-s1.binance.org:8545',
      chainID: '56',
      symbol: 'BNB',
      ids: 'binancecoin',
      browser: 'https://testnet.bscscan.com',
      khazix: 'khazix',
      networkType: 'ethereum',
      filecoinAddress0: '',
      create_time: create_time + 8,
      decimals: 18,
      image: 'bnb.svg',
      disabled: true,
      deriveIndex: 0
    }
  ]
}

export default en
