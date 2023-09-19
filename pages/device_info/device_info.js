Page({
  data: {
    deviceInfoList: [
      {
        name: 'Brand',
        key: 'brand'
      },
      {
        name: 'Model',
        key: 'model'
      },
      {
        name: 'Platform',
        key: 'platform'
      },
      {
        name: 'System',
        key: 'system'
      },
      {
        name: 'Storage',
        key: 'storage'
      },
      {
        name: 'Pixel Ratio',
        key: 'pixelRatio'
      },
      {
        name: 'Language',
        key: 'language'
      },
      {
        name: 'Current Battery',
        key: 'currentBattery'
      },
      {
        name: 'Window Width',
        key: 'windowWidth'
      },
      {
        name: 'Window Height',
        key: 'windowHeight'
      },
      {
        name: 'Screen Width',
        key: 'screenWidth'
      },
      {
        name: 'Screen Height',
        key: 'screenHeight'
      }
    ],
    deviceInfo: null
  },
  getDeviceInfo() {
    dlt.getSystemInfo(res => {
      this.setData({ deviceInfo: res })
    })
  }
})
