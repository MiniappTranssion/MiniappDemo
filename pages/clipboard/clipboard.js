let timer = null
const defaultContent = 'hello'
Page({
  data: {
    content: defaultContent,
    pasteContent: ''
  },
  updateContent(e) {
    this.setData({
      content: e.currentTarget.value
    })
  },
  copy() {
    dlt.setClipboard(this.data.content)
    dlt.showToast('Successfully copied')
  },
  paste() {
    dlt.getClipboard().then(res => {
      this.setData({
        pasteContent: res.text
      })
    })
  }
})
