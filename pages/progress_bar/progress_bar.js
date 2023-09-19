Page({
  data: {},
  showProgressBar() {
    dlt.showNavigationBarLoading(res => {
      dlt.changeNavigationBarProgress({
        endProgress: 80
      })
    })
  },
  // setProgress(curr, target, step = 10, delay = 100) {
  //   if (curr >= target) return
  //   curr = curr + step > target ? target : curr + step
  //   dlt.changeNavigationBarProgress({
  //     progress: curr
  //   })
  //   setTimeout(() => {
  //     this.setProgress(curr, target, step, delay)
  //   }, delay)
  // },
  hideProgressBar() {
    dlt.hideNavigationBarLoading()
  }
})
