Page({
  data: {},
  showHomeBtn() {
    dlt.showHomeButton({
      action: 'all'
    })
  },
  hideHomeBtn() {
    dlt.showHomeButton({
      action: 'back'
    })
    // dlt.hideHomeButton()
  },
  showAddHomeBtn() {
    dlt.showAddScreenButton()
  },
  hideAddHomeBtn() {
    dlt.hideAddScreenButton()
  }
})
