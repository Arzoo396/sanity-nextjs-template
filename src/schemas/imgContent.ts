import { TfiLayoutCtaBtnLeft } from 'react-icons/tfi'

export default {
  name: 'imgContent',
  title: 'Image Content Section',
  type: 'document',
  icon: TfiLayoutCtaBtnLeft, // Ensure this icon is correctly imported
  fields: [
    {
      name: 'imageContent',
      title: 'Image Content',
      type: 'object',
      fields: [
        {
          name: 'headline', // Consistent field naming (lowercase)
          title: 'Headline',
          type: 'string',
        },
        {
          name: 'image', // Consistent field naming (lowercase)
          title: 'Image',
          type: 'image', // Ensure 'image' is a valid type
          options: {
            hotspot: true,
          },
        },
        {
          name: 'description',
          title: 'Description',
          type: 'string',
        },
        {
          name: 'portabletext',
          title: 'Portable Text',
          type: 'array',
          of: [
            {
              type: 'block', // Ensure 'block' is a valid type
              styles: [], // Define specific styles if necessary
              lists: [], // Define specific lists if necessary
              marks: {
                decorators: [
                  { title: 'Italic', value: 'em' },
                  { title: 'Strong', value: 'strong' },
                ],
                annotations: [], // Define specific annotations if necessary
              },
            },
          ],
        },
        {
          name: 'imageposition',
          title: 'Image Position',
          type: 'string',
          options: {
            list: [
              { title: 'Top', value: 'top' },
              { title: 'Bottom', value: 'bottom' },
              { title: 'Left', value: 'left' },
              { title: 'Right', value: 'right' },
            ],
            layout: 'dropdown', // Ensure this is a supported layout
          },
          validation: (Rule) => Rule.required(), // Ensure Rule is correctly defined
        },
      ],
    },
  ],
}
