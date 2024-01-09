export default {
    name: 'cardCollection',
    title: 'Card Collection',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Collection Title',
        type: 'string',
      },
      {
        name: 'cards',
        title: 'Cards',
        type: 'array',
        of: [
          {
            type: 'object',
            name: 'card',
            title: 'Card',
            fields: [
              {
                name: 'title',
                title: 'Title',
                type: 'string',
                validation: (Rule) => Rule.required(),
              },
              {
                name: 'image',
                title: 'Image',
                type: 'image',
                options: {
                  hotspot: true,
                },
                fields: [
                  {
                    name: 'alt',
                    title: 'Alternative Text',
                    type: 'string',
                    options: {
                      isHighlighted: true
                    },
                    // validation: (Rule) => Rule.required(),
                  }
                ]
              },
              {
                name: 'text',
                title: 'Text',
                type: 'string',
              },
              {
                name: 'paragraph',
                title: 'Paragraph',
                type: 'text',
                rows: 4,
              },
            ],
          },
        ],
      },
      // You can add more fields for the collection if needed
    ],
  };
  