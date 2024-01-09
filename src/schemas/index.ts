import { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import post from './post'
import page from './page'
import heroSection from './heroSection'
import pageSection from './pageSection'
import cardCollection from './cardCollection'
import contactBanner from './contactBanner'
import imgContent from './imgContent'
import methodList from './methodList'

export const schemaTypes = [post, blockContent, page]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    blockContent,
    page,
    heroSection,
    pageSection,
    cardCollection,
    contactBanner,
    imgContent,
    methodList,
  ],
}