Page({
  data: {},
  navigatorTo(e) {
    dlt.navigateTo(e.currentTarget.dataset.url)
  },
  navigatorBack() {
    dlt.navigateBack()
  },
  exit() {
    // dlt.exit()
    dlt.navigateBackToHeaderPage()
  }
})
