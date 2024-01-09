import { TfiLayoutCtaCenter } from 'react-icons/tfi'

export default {
  name: 'contactBanner',
  type: 'object',
  title: 'Contact Banner',
  icon: TfiLayoutCtaCenter,
  fields: [
    {
      name: 'banner',
      title: 'Banner',
      type: 'object',
      fields: [
        {
          title: 'Heading',
          name: 'bannerHeading',
          type: 'string',
        },
        {
          title: 'Text',
          name: 'bannerText',
          type: 'text',
        },
        {
          title: 'Button Text',
          name: 'buttonText',
          type: 'string',
        },
        {
          title: 'Button Link',
          name: 'buttonLink',
          type: 'url',
        },
      ],
    },

    // {
    //   title: 'Button',
    //   name: 'bannerBtn',
    //   type: 'object',
    //   fields: [
    //     {
    //       title: 'Button Text',
    //       name: 'buttonText',
    //       type: 'string',
    //     },
    //     {
    //       title: 'Button Link',
    //       name: 'buttonLink',
    //       type: 'url',
    //     },
    //     // {
    //     //   title: 'Background Color',
    //     //   name: 'bgColor',
    //     //   type: 'string',
    //     // },
    //     // {
    //     //   title: 'Text Color',
    //     //   name: 'textColor',
    //     //   type: 'string',
    //     // },
    //     // {
    //     //   title: 'Background Hover Color',
    //     //   name: 'bghColor',
    //     //   type: 'string',
    //     // },
    //     // {
    //     //   title: 'Text Hover Color',
    //     //   name: 'texthColor',
    //     //   type: 'string',
    //     // },
    //   ],
    // },
  ],
  preview: {
    prepare: () => {
      return {
        title: 'Contact Banner',
      }
    },
  },
}
