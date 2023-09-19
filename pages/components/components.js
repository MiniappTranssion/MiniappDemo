Page({
  data: {
    components: [
      {
        icon: 'view',
        title: 'View Container',
        children: [
          {
            name: 'View',
            key: 'view',
          },
          {
            name: 'Swiper',
            key: 'swiper',
          },
          // { // todo: 带后续设计出具体交互
          //   name: 'Scroll View',
          //   key: 'scroll_view',
          // },
        ],
      },
      {
        icon: 'basic',
        title: 'Basic Components',
        children: [
          {
            name: 'Text',
            key: 'text',
          },
        ],
      },
      {
        icon: 'form',
        title: 'Form Components',
        children: [
          {
            name: 'Button',
            key: 'button',
          },
          {
            name: 'Editor',
            key: 'editor',
          },
        ],
      },
      {
        icon: 'photo',
        title: 'Media Components',
        children: [
          {
            name: 'Image',
            key: 'image',
          },
        ],
      },
    ],
  },
  navigateTo(e) {
    dlt.navigateTo(e.currentTarget.dataset.url);
  },
});
