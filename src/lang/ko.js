/* eslint-disable camelcase */
const create_time = parseInt(new Date().getTime() / 1000)
const ko = {
  header: {
    customRpc: '사용자 지정 RPC'
  },
  welcome: {
    title: 'FiveToken에 오신 것을 환영합니다.',
    subTitle1: 'Filecoin 생태 분야의 커넥터, 멀티 체인 융합, 미래 저장 세계의 입구입니다.',
    subTitle2: '만나서 반갑습니다.',
    btn1: '새 지갑 만들기',
    btn2: '기존 지갑 가져오기'
  },
  creatWallet: {
    title: '새 지갑 만들기',
    importWords: '도움말 가져오기',
    back: '되돌아가기',
    accountName: '아이디를 입력하세요.',
    nameTips: '15자 이내',
    nameError: '무효한 ID',
    password: '계정 비밀번호를 입력하세요',
    passwordTips: '8자리 및 그 이상의 문자',
    passwordError: '무효한 비밀번호',
    diffError: '비밀번호가 일치하지 않습니다',
    correctPassword: '정확한 비밀번호를 입력하세요',
    confirmPassword: '비밀번호 확인',
    btn: '다음'
  },
  creatWords: {
    title: '도움말 백업',
    subTitle: '순서대로 도움말을 따라쓰세요',
    showWords: '여기를 클릭하여 비밀언어를 표시하기',
    btn1: '도움말 인증',
    btn2: '지갑에 들어가기',
    copy: '도움말 복사',
    copySuccess: '복제 성공',
    tips1: '！ 도움말을 안전한 곳에 보관하여 다른 네트워크와 격리시키세요.',
    tips2: '！ 네트워크에서(예: 이메일, 앨범, SNS 등) 공유하거나 저장하지 마세요.'
  },
  checkWords: {
    title: '도움말 인증',
    subTitle: '아래의 도움말을 순서대로 클릭하여 백업 인증을 완성하세요.',
    btn: '확인',
    checkError: '도움말 인증 오류'
  },
  importWords: {
    title: '가져오기助记词',
    subTitle: '도움말을 입력하여 지갑을 복원하세요.',
    tips: '단어가 빈칸 분리를 사용합니다.',
    btn: '수입',
    error: '도움말 오류',
    exist: '해당 계정이 이미 존재합니다'
  },
  importPrivatkey: {
    title: '비밀 키 가져오기',
    label1: '지원하는 네트워크를 선택하십시오',
    label2: '비밀 키를 입력하여 지갑을 복원하세요.',
    btn: '수입',
    titleNetwork: '네트워크 선택',
    importError: '지원하지 않는 형식입니다.',
    exist: '해당 계정이 이미 존재합니다'
  },
  account: {
    title: '계정',
    lock: '잠금',
    mneAccount: '도움말 계정',
    pkAccount: '비밀 키 계정',
    createWallet: '지갑 만들기',
    import: '비밀 키 가져오기',
    setting: '설정',
    titleAdd: '계정 추가',
    addTips: '해당 주소는 같은 도움말을 사용합니다',
    addLabel: '계정명',
    confirm: '확인하다',
    cancel: '취소'
  },
  wallet: {
    tab: [
      { name: '자산', type: '1' },
      { name: '이벤트', type: '2' }
    ],
    menu: [
      { name: '계정명 수정', action: 'editName' },
      { name: '블록체인 브라우저 보기', action: 'viewInBrowser' },
      { name: '비밀 키 백업', action: 'backupPrivateKey' },
      { name: '지갑 삭제', action: 'deleteWallet' }
    ],
    statusSuccess: '완성',
    statusError: '실패',
    statusPending: '확인 중',
    send: '발송',
    received: '접수',
    labelSend: '주소 보내기',
    labelReceived: '수납 주소',
    titleEdit: '계정명 수정',
    editLabel: '계정명',
    editTips: '15자 이내',
    cancel: '취소',
    confirm: '확인하다',
    deleteTitle: '삭제 확인',
    deleteTips: '비밀 키가 백업되었는지 확인하세요. 삭제 후, 해당 지갑을 보여주려면 비밀 키로 가져와야 합니다.',
    copyAddress: '주소 복사',
    copySuccess: '复制성공',
    tranRecord: '활동 기록',
    noTransactionRecord: '활동 기록 없음',
    waiting: '대기',
    noBrowser: '현재 네트워크에 블록체인 브라우저을 추가하지 않았습니다'
  },
  messageDetail: {
    title: '소식 상세 정보',
    amount: '수량',
    willgasFee: '예상 최대 취급 수수료',
    gasFee: '수수료',
    from: '발신자',
    to: '수신자',
    messageId: '메시지 ID',
    success: '성공',
    error: '실패',
    pending: '확인 중',
    height: '높이.',
    noBrowser: '현재 네트워크에 블록체인 브라우저을 추가하지 않았습니다'
  },
  addToken: {
    addToken: '토큰 추가',
    contractAddress: '계약 주소',
    token: '토큰',
    tokenSymbol: '토큰 기호',
    decimalPoint: '소수점',
    error: '토큰 추가됨',
    addressError: '잘못된 계약 주소'
  },
  sendFil: {
    send: '발송',
    token: '토큰',
    toAddress: '접수 주소',
    number: '수량',
    all: '전체',
    available: '사용 가능',
    selectToken: '토큰 선택',
    selectAddress: '주소 선택',
    recordLast: '최근 사용',
    myAccount: '내 계정',
    addressBook: '주소록',
    gasLimit: 'Gas Limit',
    confirmTransaction: '거래 확인',
    sendAmount: '발송 액수',
    networkGas: '네트워크 요율',
    maxGas: '예상 최대 가스 요금',
    totalTips: '청구 액수+예상 가스 요금',
    total: '총액',
    cancel: '취소',
    confirm: '확인하다',
    gasFeeError: '현재 BaseFee 보다 적음',
    gasLimitError: '현재 Gas Limit 보다 적음',
    addressError: '주소 형식이 잘못되었습니다',
    insufficientBalance: '잔액이 부족합니다.',
    filBaseFeeTips: '네트워크 수수료율은 네트워크 수수료를 지불하는 데 사용되며, 네트워크 수수료율>BaseFee일 때만 메시지가 패키징됩니다. 나노필 = 10^-9',
    baseFeeTips: 'Gas price는 Gas 단위당 지불 토큰 수, Gwei=10^-9',
    gasLimitTips: 'Gas Limit은 메시지를 발송할 때 소모되는 Gas 최대치입니다.',
    vaildNumber: '유효한 숫자를 입력하세요'
  },
  setting: {
    name: '설정',
    currency: '화폐',
    language: '언어',
    titleCurrency: '화폐 선택',
    titlelanguage: '언어 선택',
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
      { name: '인터넷', url: './setting-networks.html' },
      { name: '주소록', url: './setting-address.html' },
      { name: '도움말 백업', url: './setting-backups.html' },
      { name: '관련', url: './setting-about.html' }
    ]
  },
  settingNetworks: {
    title: '인터넷',
    addNetwork: '네트워크 추가',
    networkName: '네트워크 이름',
    deleteTitle: '네트워크 삭제',
    editNewwork: '네트워크 수정',
    viewNetwork: '인터넷 정보',
    addTips: ' 악성 네트워크가 블록 상태를 거짓으로 보고할 수 있으므로 신뢰하는 네트워크를 추가하십시오.',
    chainID: '체인 ID',
    symbol: '기호',
    rpc: 'RPC URL',
    browser: '블록 브라우저 URL(선택)',
    cancel: '취소',
    confirm: '확인하다',
    save: '저장',
    addError: '지원하지 않는 네트워크',
    isExistError: 'RPC 존재했다',
    delete: '삭제',
    deleteTips: '이 네트워크를 삭제하시겠습니까?',
    deleteSuccess: '성공적으로 삭제되었습니다'
  },
  settingAbout: {
    about: '관련',
    filVersion: 'FiveToken',
    Version: 'Version',
    tips: 'Filecoin 생태 분야의 커넥터, 멀티 체인 융합, 미래 저장 세계의 입구입니다.',
    privacy: '프라이버시 정책',
    useRule: '개인정보보호방침'
  },
  settingBackups: {
    backupsCheck: '인증 백업',
    backupsWords: '도움말 백업',
    backupsPk: '비밀 키 백업',
    pkTips: '다른 사람에게 보여주지 마세오. 비밀 키로 당신의 계정을 통제할 수 있습니다.',
    mneTips: '다른 사람에게 보여주지 마세오. 도움말로 당신의 계정을 통제할 수 있습니다.',
    next: '다음 단계',
    close: '닫기',
    inputPassword: '비밀번호 입력',
    copy: '클립보드로 복사',
    copySuccess: '성공적으로 복사',
    passwordError: '비밀번호가 틀렸습니다',
    yourMne: '당신의 도움말',
    yourPk: '당신의 비밀 키'
  },
  settingAddress: {
    addressBook: '주소록',
    name: '라벨명',
    address: '주소',
    addressError: '주소 형식 오류',
    edit: '편집하다',
    cancel: '취소',
    confirm: '확인하다',
    addAddress: '주소 추가',
    addressDetail: '주소 상세 정보',
    editAddress: '주소 편집',
    copySuccess: '성공적으로 복사',
    editSuccess: '편집 완료',
    addressIsExist: '주소가 이미 존재합니다',
    add: '추가',
    delete: '삭제',
    deleteTitle: '주소 삭제',
    deleteTips: '이 주소를 삭제하시겠습니까?',
    deleteSuccess: '성공적으로 삭제되었습니다'
  },
  lock: {
    title: 'FiveToken에 오신 것을 환영합니다.',
    subTitle: 'Filecoin 생태분야의 커넥터, 멀티 체인 융합, 미래 저장 세계의 입구입니다.',
    unlocking: '잠금 해제',
    label: '비밀번호',
    passwordError: '암호 오류'
  },
  connect: {
    title: 'FiveToken으로 연결하기',
    cancel: '취소',
    connect: '연결'
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

export default ko