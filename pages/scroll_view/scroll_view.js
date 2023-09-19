Page({
  data: {
    freshY: false,
    freshX: false,
    scrollTop: 0,
    scrollIntoView: ''
  },

  refreshY() {
    this.setData({
      freshY: true
    })
    setTimeout(() => {
      this.setData({
        freshY: false
      })
    }, 1000)
  },
  handleScrollY(data) {
    console.log('handleScrollY', data)
  },
  scrolltoupperY() {
    dlt.showToast('scrolltoupperY')
  },
  scrolltolowerY() {
    dlt.showToast('scrolltolowerY')
  },

  toNextY() {
    const top = this.data.scrollTop
    const step = Math.floor(top / 150)
    const next = (step + 1) * 150

    this.setData({
      scrollTop: next > 750 ? 0 : next
    })
  },

  tapMove() {
    this.setData({
      scrollTop: this.data.scrollTop + 20 > 750 ? 0 : this.data.scrollTop + 20
    })
  },

  scrollToDemo() {
    this.setData({
      scrollIntoView: 'demo3'
    })
    setTimeout(() => {
      this.setData({
        scrollIntoView: ''
      })
    }, 300)
  },

  refreshX() {
    this.setData({
      freshX: true
    })
    setTimeout(() => {
      this.setData({
        freshX: false
      })
    }, 1000)
  },
  scrolltoupperX() {
    dlt.showToast('scrolltoupperX')
  },
  scrolltolowerX() {
    dlt.showToast('scrolltolowerX')
  }
})
