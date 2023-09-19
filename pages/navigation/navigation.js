const defaultTitle = 'Navigation Bar UI'
const defaultTitleColor = 'black'
const defaultIconColor = 'black'
const reverseColor = 'white'
function getRandomColor() {
  return (
    '#' + ('00000' + ((Math.random() * 0x1000000) << 0).toString(16)).slice(-6)
  )
}
Page({
  data: {
    title: '',
    trueTitle: '',
    isFocus: false,
    defaultTitleColor,
    titleColor: defaultTitleColor,
    iconColor: defaultIconColor
  },
  onLoad() {
    // dlt.setNavigationBarTitle(defaultTitle)
    // dlt.setNavigationBarTitleColor(defaultTitleColor)
  },
  modifyTitle(e) {
    // input 不能双向绑定，否则会显示异常，微信小程序的input是一个原生组件，也不支持双向绑定, 目前我们还没有原生的input组件，故如此模拟
    this.data.trueTitle = e.currentTarget.value
  },
  updateTitleStatus() {
    const isFocus = !this.data.isFocus
    this.setData({
      isFocus,
      title: this.data.trueTitle
    })
  },
  modifyColor(e) {
    this.setData({
      titleColor: e.currentTarget.dataset.color
    })
  },
  set() {
    const emojiReg =
      /([0-9|*|#]\uFE0F\u20E3)|([0-9|#]\u20E3)|([\u203C-\u3299]\uFE0F\u200D)|([\u203C-\u3299]\uFE0F)|([\u2122-\u2B55])|(\u303D)|([A9|AE]\u3030)|(\uA9)|(\uAE)|(\u3030)|([\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF])|([\uDC00-\uDFFF])|([\uD83C|\uD83D|\uD83E])|([\u200D])|[\uFE0F]/
    if (emojiReg.test(this.data.trueTitle)) {
      return dlt.showToast('Forbid input emoji')
    }
    dlt.setNavigationBarTitle(this.data.trueTitle)
    dlt.setNavigationBarTitleColor(this.data.titleColor)
  },
  reset() {
    this.setData({
      title: '',
      trueTitle: '',
      titleColor: defaultTitleColor
    })
    dlt.setNavigationBarTitle(defaultTitle)
    dlt.setNavigationBarTitleColor(defaultTitleColor)
  },
  randomBgColor() {
    dlt.setNavigationBarBackgroundColor(getRandomColor())
  },
  switchIconColor() {
    const iconColor =
      this.data.iconColor === defaultIconColor ? reverseColor : defaultIconColor
    this.setData({
      iconColor
    })
    dlt.setNavigationBarIconStyle(iconColor)
  }
})
