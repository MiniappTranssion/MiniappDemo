Page({
  data: {
    paginationVisible: true,
    isColumn: false,
    loop: false,
    autoPlay: false,
    autoPlayNum: 2000,
    speed: 500,
    transtionRange: [200, 1000],
    autoRange: [500, 2000],
    stage: 100,
    initialSwipe: 0
  },
  handleDotsSwitch(val) {
    this.setData({
      paginationVisible: val
    })
  },
  handleDirectionSwitch(val) {
    this.setData({
      isColumn: val,
      initialSwipe: 0
    })
  },
  handleAutoplaySwitch(val) {
    // 将自动播放和循环一起控制，参照微信小程序的swiper 演示
    this.setData({
      autoPlay: val,
      loop: val
    })
  },
  handleLoopSwitch(val) {
    this.setData({
      loop: val
    })
  },
  handleSpeedSlideChange(val) {
    this.setData({
      speed: val
    })
  },
  handleAutoplaySlideChange(val) {
    this.setData({
      autoPlayNum: val
    })
  }
})
