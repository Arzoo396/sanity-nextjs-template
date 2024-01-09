import { TfiMenuAlt } from 'react-icons/tfi'
import { GoDotFill } from 'react-icons/go'

export default {
  name: 'methodList',
  title: 'Method List Section',
  type: 'document',
  icon: TfiMenuAlt,
  fields: [
    {
      name: 'banner',
      title: 'Banner',
      type: 'object',
      fields: [
        {
          name: 'methodHeadline',
          title: 'Method Headline',
          type: 'string',
          validation: (Rule) =>
            Rule.required()
              .min(10)
              .warning('A headline is required and should be descriptive.'),
        },
        {
          name: 'methodText',
          title: 'Method Section Description',
          type: 'string',
        },
        {
          name: 'methodData',
          title: 'Method Data',
          type: 'array',
          icon: GoDotFill,
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'methodName',
                  title: 'Method Name',
                  type: 'string',
                  validation: (Rule) =>
                    Rule.required().min(5).warning('Method name is required.'),
                },
                {
                  name: 'methodList',
                  title: 'List of Steps',
                  type: 'array',
                  of: [{ type: 'string' }],
                  validation: (Rule) =>
                    Rule.required()
                      .min(1)
                      .warning('At least one step is required.'),
                },
              ],
              preview: {
                select: { title: 'methodName' },
                prepare(selection) {
                  return {
                    title: `Method: ${selection.title}`,
                    subtitle: 'List of steps included',
                  }
                },
              },
            },
          ],
          validation: (Rule) =>
            Rule.required()
              .min(1)
              .warning('At least one method data is required.'),
          options: {
            layout: 'grid',
          },
        },
      ],
    },
  ],
}
