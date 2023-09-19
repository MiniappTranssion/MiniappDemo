Page({
  data: {
    apiList: [
      {
        icon: 'interface',
        title: 'Interface',
        children: [
          {
            name: 'Navigation Bar UI',
            key: 'navigation'
          },
          {
            name: 'Set up navigation bar',
            key: 'set_navigation'
          },
          {
            name: 'Progress Bar',
            key: 'progress_bar'
          },
          {
            name: 'Page Jumping',
            key: 'page_jumping'
          },
          {
            name: 'Pull-to-refresh',
            key: 'pull_to_refresh'
          },
          {
            name: 'Modal Dialog',
            key: 'dialog'
          },
          {
            name: 'Modal Loader',
            key: 'modal_loader'
          },
          {
            name: 'Toast',
            key: 'toast'
          },
          {
            name: 'DXML',
            key: 'dxml'
          }
        ]
      },
      {
        icon: 'device',
        title: 'Equipment',
        children: [
          {
            name: 'Get device info',
            key: 'device_info'
          },
          {
            name: 'Scan',
            key: 'scan'
          },
          {
            name: 'Make a phone call',
            key: 'phone'
          },
          {
            name: 'Clipboard',
            key: 'clipboard'
          },
          {
            name: 'Vibration',
            key: 'vibration'
          }
        ]
      },
      {
        icon: 'network',
        title: 'Network',
        children: [
          {
            name: 'Network Requests',
            key: 'request'
          },
          {
            name: 'Upload a file',
            key: 'upload'
          },
          {
            name: 'Download a file',
            key: 'download'
          }
        ]
      },
      {
        icon: 'media',
        title: 'Media',
        children: [
          {
            name: 'Photo',
            key: 'photo'
          }
        ]
      },
      {
        icon: 'location',
        title: 'Location',
        children: [
          {
            name: 'Get current location',
            key: 'location'
          }
        ]
      },
      {
        icon: 'data',
        title: 'Data Cache',
        children: [
          {
            name: 'Local Storage',
            key: 'local_storage'
          }
        ]
      }
    ]
  },
  navigateTo(e) {
    dlt.navigateTo(e.currentTarget.dataset.url)
  }
})
