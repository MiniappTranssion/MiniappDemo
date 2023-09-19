// input 不能双向绑定，否则会显示异常，微信小程序的input是一个原生组件，也不支持双向绑定, 目前我们还没有原生的input组件，故如此模拟
Page({
  data: {
    storageKey: '',
    trueStorageKey: '',
    storageData: '',
    trueStorageData: ''
  },
  modifyStorageKey(e) {
    this.data.trueStorageKey = e.currentTarget.value
  },
  updateStorageKey(e) {
    this.setData({
      storageKey: e.currentTarget.value
    })
  },
  updateStorageData(e) {
    this.setData({
      storageData: e.currentTarget.value
    })
  },
  modifyStorageData(e) {
    this.data.trueStorageData = e.currentTarget.value
  },
  save() {
    const { trueStorageKey, trueStorageData = '' } = this.data
    if (!trueStorageKey) {
      return dlt.showToast('Please enter Key value')
    }
    dlt.setStorage(trueStorageKey, trueStorageData)
    dlt.showModal({
      title: 'Successfully saved',
      content: trueStorageKey + ': ' + trueStorageData,
      confirmText: 'Confirm',
      confirmColor: '#0081FF'
    })
  },
  read() {
    const { trueStorageKey } = this.data
    if (!trueStorageKey) {
      return dlt.showToast('Please enter Key value')
    }
    dlt.getStorage(trueStorageKey, value => {
      if (value == null) {
        return dlt.showToast('"Key" does not exist')
      }
      dlt.showModal({
        title: 'Successfully read',
        content: trueStorageKey + ': ' + value,
        confirmText: 'Confirm',
        confirmColor: '#0081FF'
      })
      this.setData({
        storageData: value,
        trueStorageData: value
      })
    })
  },
  reset() {
    this.setData({
      storageKey: '',
      trueStorageKey: '',
      storageData: '',
      trueStorageData: ''
    })
  }
})
