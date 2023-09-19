const defaultSrc = '/images/img_5222.png'
Page({
  data: {
    buttons: [
      {
        name: 'Scale',
        children: [
          {
            desc: 'scaleToFill: Scale image to fit on canvas, without maintaining aspect ratio.',
            key: 'scaleToFill',
            src: defaultSrc
          },
          {
            desc: 'aspectFit: Scales image to fit on canvas by maintaining the aspect ratio. The entire image will be displayed.',
            key: 'aspectFit',
            src: defaultSrc
          },
          {
            desc: 'aspectFill: Scales image to fit on canvas by maintaining the aspect ratio. Portions of the image may be clipped.',
            key: 'aspectFill',
            src: defaultSrc
          },
          {
            desc: 'widthFix: Maintain the width, and container height should adapt to the content by maintaining the aspect ratio.',
            key: 'widthFix',
            src: defaultSrc
          },
          {
            desc: 'heightFix: Maintain the height, and container width should adapt to the content by maintaining the aspect ratio.',
            key: 'heightFix',
            src: defaultSrc
          }
        ]
      },
      {
        name: 'Crop',
        children: [
          {
            desc: 'top: No scaling, and show the upper center of the image.',
            key: 'top',
            src: defaultSrc
          },
          {
            desc: 'bottom: No scaling, and show the bottom center of the image.',
            key: 'bottom',
            src: defaultSrc
          },
          {
            desc: 'center: No scaling, and show the center of the image.',
            key: 'center',
            src: defaultSrc
          },
          {
            desc: 'left: No scaling, and show the middle left of the image.',
            key: 'left',
            src: defaultSrc
          },
          {
            desc: 'right: No scaling, and show the middle right of the image.',
            key: 'right',
            src: defaultSrc
          },
          {
            desc: 'top left: No scaling, and show the top left of the image.',
            key: 'top left',
            src: defaultSrc
          },
          {
            desc: 'top right: No scaling, and show the top right of the image.',
            key: 'top right',
            src: defaultSrc
          },
          {
            desc: 'bottom left: No scaling, and show the bottom left of the image.',
            key: 'bottom left',
            src: defaultSrc
          },
          {
            desc: 'bottom right: No scaling, and show the bottom right of the image.',
            key: 'bottom right',
            src: defaultSrc
          }
        ]
      }
    ]
  }
})
