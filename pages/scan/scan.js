const falseList = [false, 'false']
Page({
  data: {
    scanInfo: ''
  },
  scan() {
    dlt.scanCode({
      onlyFromCamera: false,
      scanType: '',
      callback: res => {
        if (falseList.includes(res.success)) {
          dlt.showToast('Failed')
        } else {
          this.setData({
            scanInfo: res.data
          })
        }
      }
    })
  }
})
