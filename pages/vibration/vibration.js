Page({
  data: {
    duration: '',
    min: 100,
    max: 1000
  },
  modifyDuration(e) {
    this.data.duration = e.currentTarget.value
  },
  handleVibrate() {
    const { duration, max, min } = this.data
    if (
      isNaN(duration) ||
      duration > max ||
      duration < min ||
      duration % 1 !== 0
    ) {
      return dlt.showToast('Invalid')
    }
    dlt.vibrate(+duration)
  }
})
