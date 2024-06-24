const callbackId = '123123123'
const trueList = [true, 'true']
const falseList = [false, 'false']
Page({
  data: {
    url: '',
    loading: false,
    accessUrl: ''
  },
  modifyUploadUrl(e) {
    this.data.url = e.currentTarget.value
  },
  upload() {
    if (!this.data.url) {
      return dlt.showToast('Please enter your server URL')
    }
    if (this.data.loading) return
    dlt.chooseMedia({
      count: 1,
      success: res => {
        try {
          const images = JSON.parse(res.images) || []
          const filePath = images[0] || ''
          let fileName = 'test_upload_name.png',
            contentType = 'image/png'
          if (filePath) {
            fileName = filePath.split('/').slice(-1)[0]
            contentType = 'image/' + fileName.split('.').slice(-1)[0]
          }
          this.setData({
            loading: true
          })
          dlt.showLoading()
          console.log('upload---images===', images, fileName, contentType)
          dlt.uploadFile({
            url: this.data.url,
            filePath,
            name: fileName,
            header: JSON.stringify({ "Content-Type": contentType }),
            success: (res) => {
              try {
                const response = JSON.parse(res.response)
                const url = response.data && response.data.ossUrl || filePath
                this.setData({ accessUrl: url })
                dlt.showToast('Successfully Uploaded')
              } catch (error) {
                dlt.showToast('Failed')
              }
            },
            complete: (res) => {
              dlt.hideLoading()
              this.setData({ loading: false})
            },
            fail: err => {
              dlt.showToast('Failed')
              console.log('upload--err===', err)
            },
          })
        } catch (error) {
          dlt.hideLoading()
          this.setData({ loading: false })
          console.log('upload--error===', error)
        }
      }
    })
  },
  onUnload() {
    dlt.abortUploadRequest({
      callbackId
    })
  }
})
