// schema.js
export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'heroSection',
      title: 'Hero Section',
      type: 'heroSection',
    },
    {
      name: 'mainContent',
      title: 'Main Content',
      type: 'pageSection',
    },
    // Add more fields as needed
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
    },
    prepare: ({ title, slug }) => ({
      title,
      subtitle: `/${slug}`,
    }),
  },
  // // Include the heroSection schema
  // types: [heroSection],
}
