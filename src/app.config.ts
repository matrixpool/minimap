export default {
  pages: [
    'pages/add-point/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '热活',
    navigationBarTextStyle: 'black',
    backgroundColor: '#f7f7f7'
  },
  permission: {
    'scope.userLocation': {
      'desc': '你的位置信息将用于小程序定位'
    }
  }
}
