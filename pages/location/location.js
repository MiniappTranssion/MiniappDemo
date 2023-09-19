Page({
  data: {
    locationInfoList: [
      {
        name: 'Latitude',
        key: 'latitude'
      },
      {
        name: 'Longitude',
        key: 'longitude'
      }
    ],
    locationInfo: null
  },
  // 经纬度转度分秒
  transformDMS(degree, direction) {
    var D = plusZeroAtHead(Math.floor(degree))
    var M = plusZeroAtHead(Math.floor((degree - D) * 60))
    var S = plusZeroAtHead(Math.floor(((degree - D) * 60 - M) * 60))
    var result = D + '°' + M + '′' + S + '″'

    // 如果是个位数， 则在首位加 0
    function plusZeroAtHead(num) {
      if (num > -10 && num < 0) {
        num = '-0' + Math.abs(num)
      }
      if (num > 0 && num < 10) {
        return '0' + num
      }
      return num
    }

    if (direction === 'lon') {
      D > 0 ? (result = 'E' + result) : (result = 'W' + result)
      return result
    }
    if (direction === 'lat') {
      D > 0 ? (result = 'N' + result) : (result = 'S' + result)
      return result
    }
    return result
  },
  getCurrentLocation() {
    dlt.getLocation(({ latitude, longitude }) => {
      this.setData({
        locationInfo: {
          latitude: this.transformDMS(latitude, 'lat'),
          longitude: this.transformDMS(longitude, 'lon')
        }
      })
    })
  },
  reset() {
    this.setData({ locationInfo: null })
  }
})
