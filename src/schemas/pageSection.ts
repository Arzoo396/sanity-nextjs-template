import { ImSection } from 'react-icons/im'

export default {
  name: 'pageSection',
  type: 'object',
  title: 'Page Section',
  icon: ImSection,
  fields: [
    {
      title: 'Section Title',
      name: 'sectionTitle',
      type: 'string',
      description: 'Display the following text as section title',
    },
    {
      name: 'innerBlocks',
      type: 'array',
      title: 'Inner Blocks',
      of: [
        { type: 'cardCollection' },
      ],
      validation: (Rule) => Rule.required(),
    },
    // {
    //   title: 'Top Padding',
    //   name: 'topPadding',
    //   type: 'number',
    // },
    // {
    //   title: 'Bottom Padding',
    //   name: 'bottomPadding',
    //   type: 'number',
    // },
    // {
    //   title: 'Exclude from the section navigation (if enabled)',
    //   name: 'excludeFromSectionNav',
    //   type: 'boolean',
    // },
    // {
    //   name: 'addHr',
    //   type: 'addHr',
    //   title: 'Add horizontal rule to bottom of section?',
    //   hidden: ({ parent }) => parent.backgroundcolor !== 'none',
    // },
  ],
  // preview: {
  //   select: {
  //     title: 'sectionTitle',
  //     backgroundColor: 'backgroundcolor',
  //     block0: 'innerBlocks.0._type',
  //     block1: 'innerBlocks.1._type',
  //     block2: 'innerBlocks.2._type',
  //   },
  //   prepare: ({ title, backgroundColor, block0, block1, block2 }) => {
  //     const blocksRaw = [block0, block1, block2].filter(Boolean)
  //     const blocks = blocksRaw.map((block) =>
  //       block === 'wideCards' ? 'cardList' : block,
  //     )
  //     const blockNames = blocks.map((block) => {
  //       const upperCaseNames = block.charAt(0).toUpperCase() + block.slice(1)
  //       const formattedNames = upperCaseNames.replace(/[A-Z]/g, ' $&').trim()
  //       return formattedNames
  //     })
  //     const blockTitles =
  //       blockNames.length > 0 ? `${blockNames.join(', ')}` : ''
  //     const hasMoreBlocks = Boolean(block2)
  //     return {
  //       title: title
  //         ? title
  //         : hasMoreBlocks
  //           ? `${blockTitles}...`
  //           : blockTitles,
  //       subtitle:
  //         backgroundColor && backgroundColor !== 'none'
  //           ? `background color: ${backgroundColor}`
  //           : '',
  //     }
  //   },
  // },
}
