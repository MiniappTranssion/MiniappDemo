Page({
  data: {},
  showModalLoader() {
    dlt.showLoading()
    setTimeout(() => {
      dlt.hideLoading()
    }, 3000)
  }
})
