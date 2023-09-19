let timer = null
Page({
  data: {
    phone: '11111888888'
  },
  modifyPhone(e) {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => {
      this.setData({
        phone: e.currentTarget.value
      })
    }, 50)
  },
  call() {
    dlt.makePhoneCall(this.data.phone)
  }
})
