const falseList = [false, 'false']
const currAppId = '1000850268075192320'
Page({
  data: {
    caseList: [
      {
        logo: '/images/quicknote.png',
        name: 'Quick Note',
        appId: '1000262595995639808'
      },
      {
        logo: '/images/jigsaw.png',
        name: 'Jigsaw',
        appId: '1000827142865809408'
      },
      {
        logo: '/images/stickmaster.png',
        name: 'Stick Master',
        appId: '1000263325676503040'
      }
    ]
  },
  onShow() {
    this.fetchCaseList()
  },
  fetchCaseList() {
    dlt.request({
      url: 'https://transsion-miniapp-android-cdn.oss-eu-central-1.aliyuncs.com/Demo/demo_config.json',
      header: '',
      method: 'GET',
      callback: res => {
        if (falseList.includes(res.success)) {
          return dlt.showToast('Failed')
        }
        try {
          const caseList = JSON.parse(res.response || '[]').filter(
            item => item.appId != currAppId
          )
          this.setData({
            caseList: caseList
          })
        } catch (error) {
          return
        }
      }
    })
  },
  openOtherMiniapp(e) {
    const dataSet = e.currentTarget.dataset
    dlt.navigateToMiniProgram({
      appId: dataSet.appid,
      path: '',
      callback: res => {
        if (falseList.includes(res.success)) {
          dlt.showToast('Failed')
        }
      }
    })
  }
})
