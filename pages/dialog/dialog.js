Page({
  data: {},
  dialogSingleBtn() {
    dlt.showModal({
      title: 'Title',
      content:
        'A dialog is a type of modal window that appears in front of app content to provide critical information or ask for a decision.',
      confirmText: 'OK'
    })
  },
  dialogTwoBtn() {
    dlt.showModal({
      title: 'Title',
      showCancel: true,
      cancelText: 'Cancel',
      content:
        'A dialog is a type of modal window that appears in front of app content to provide critical information or ask for a decision.',
      confirmText: 'Confirm'
    })
  },
  dialogNoTitle() {
    dlt.showModal({
      content:
        'A dialog is a type of modal window that appears in front of app content to provide critical information or ask for a decision.',
      confirmText: 'OK'
    })
  },
  dialogSwipe() {
    dlt.showModal({
      title: 'Title',
      content:
        'Here is long description. Here is long description. Here is long description. Here is long description. Here is long description. Here is long description. Here is long description. Here is long description. Here is long description. Here is long description. Here is long description. Here is long description. Here is long description. Here is long description. Here is long description. Here is long description. Here is long description. Here is long description. Here is long description. Here is long description.Here is long description. Here is long description. Here is long description. Here is long description. Here is long description. Here is long description. Here is long description. Here is long description. Here is long description. Here is long description. Here is long description. Here is long description. Here is long description. Here is long description. Here is long description. Here is long description. Here is long description. Here is long description. Here is long description. Here is long description.',
      confirmText: 'Confirm'
    })
  }
})
