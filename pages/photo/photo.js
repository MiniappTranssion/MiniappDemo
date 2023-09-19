const trueList = [true, 'true']
Page({
  data: {
    imageList: null
  },
  select() {
    dlt.chooseMedia({
      success: res => {
        this.setData({ imageList: JSON.parse(res.images) })
        dlt.showToast('Successfully selected')
      }
    })
  },
  preview() {
    dlt.previewImage({
      urls: JSON.stringify([
        'https://app-oss-fat1.byte-app.com/app/demo/20220706-175920.png',
        'https://app-oss-fat1.byte-app.com/app/demo/20220706-175912.png'
      ]),
      current: 1
    })
  },
  save() {
    // todo: 保存图片没有回调，即没法loading
    dlt.saveImageToPhotosAlbum(
      'https://app-oss-fat1.byte-app.com/app/demo/20220706-175920.png',
      res => {
        if (trueList.includes(res.success)) {
          dlt.showToast('Successfully saved')
        } else {
          dlt.showToast('Failed')
        }
      }
    )
  }
})
