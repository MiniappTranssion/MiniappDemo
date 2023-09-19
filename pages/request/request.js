const trueList = [true, 'true']
Page({
  data: {
    loading: false,
    info: null
  },
  request() {
    if (this.data.loading) return
    this.setData({
      loading: true
    })
    dlt.request({
      url: 'https://gw.alicdn.com/tfscom/L0/avengers/component/TB1EWroOFXXXXbdXXXXhA1h2FXX',
      header: '',
      method: 'GET',
      callback: res => {
        console.log('request===', res)
        if (trueList.includes(res.success)) {
          this.setData({ info: res.response, loading: false })
          dlt.showToast('Successfully completed')
        } else {
          dlt.showToast('Failed')
          this.setData({ loading: false })
        }
      }
    })
  },
  reset() {
    this.setData({
      info: null,
      loading: false
    })
  },
  onUnload() {
    this.reset()
  }
})
