Page({
  data: {
    imgs: []
  },
  chosemedia(count) {
    dlt.chooseMedia({
      count,
      success: res => {
        try {
          const images = JSON.parse(res.images) || []
          this.setData({
            imgs: images
          })
        } catch (error) {
          console.log(error)
        }
      }
    })
  }
})
