let timer = null
Page({
  data: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    width: 0,
    height: 0
  },
  onShow() {
    timer = null
    dlt
      .createSelectorQuery()
      .select('#movable-view')
      .boundingClientRect(rect => {
        this.setData({
          width: Math.round(rect.width),
          height: Math.round(rect.height),
          right: Math.round(rect.width),
          bottom: Math.round(rect.height)
        })
      })
      .exec()
  },
  bindchange({ x, y }) {
    if (timer) return
    timer = setTimeout(() => {
      this.setData({
        left: x,
        top: y,
        right: Math.round((x + this.data.width) * 100) / 100,
        bottom: Math.round((y + this.data.height) * 100) / 100
      })
      clearTimeout(timer)
      timer = null
    }, 100)
  }
})
