// heroSection.js

export default {
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  fields: [
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'heroText',
      title: 'Hero Text',
      type: 'text',
      rows: 3,
    },
    {
      name: 'paragraph',
      title: 'Paragraph',
      type: 'text',
    },
    // Add more fields as needed for your hero section
  ],
}
