const callbackId = '1234567890'
const trueList = [true, 'true']
const falseList = [false, 'false']
Page({
  data: {
    loading: false,
    avatarUrl: null
  },
  download() {
    if (this.data.loading) return
    this.setData({
      loading: true
    })
    dlt.downloadFile({
      url: 'https://app-oss-fat1.byte-app.com/app/demo/20220706-175912.png',
      saveName: '20220706-175912.png',
      header: '',
      callbackId,
      callback: res => {
        console.log('Download===', res)
        if (trueList.includes(res.success)) {
          this.setData({ avatarUrl: res.tempFilePath, loading: false })
        } else if (res.onProgress) {
          console.log('Download--onPregerss')
        } else if (falseList.includes(res.success)) {
          dlt.showToast('Failed')
          this.setData({ loading: false })
        }
      }
    })
  },
  reset() {
    dlt.abortDownloadRequest({
      callbackId
    })
    this.setData({
      avatarUrl: null,
      loading: false
    })
  },
  onUnload() {
    this.reset()
  }
})
