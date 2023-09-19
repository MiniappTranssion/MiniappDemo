Page({
  data: {},
  refresh() {
    dlt.startPullDownRefresh()
  },
  stopRefresh() {
    dlt.stopPullDownRefresh()
  }
})
