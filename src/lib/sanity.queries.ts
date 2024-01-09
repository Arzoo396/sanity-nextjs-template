import type { PortableTextBlock } from '@portabletext/types'
import type { ImageAsset, Slug } from '@sanity/types'
import groq from 'groq'
import { type SanityClient } from 'next-sanity'
import { HeroSection } from '../types/HeroSection'
import imgReferenceExpansion from './partials/imgReferenceExpansion'

// Posts Query and Function
export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`

export async function getPosts(client: SanityClient): Promise<Post[]> {
  try {
    return await client.fetch(postsQuery)
  } catch (error) {
    console.error('Error fetching posts:', error)
    throw error // Or handle it as needed
  }
}

// Post By Slug Query and Function
export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]`

export async function getPost(
  client: SanityClient,
  slug: string,
): Promise<Post> {
  try {
    return await client.fetch(postBySlugQuery, { slug })
  } catch (error) {
    console.error('Error fetching post by slug:', error)
    throw error // Or handle it as needed
  }
}

// Post Slugs Query
export const postSlugsQuery = groq`*[_type == "post" && defined(slug.current)][].slug.current`

// Page By Slug Query and Function
export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0]{
    ...,
    "heroImage": heroSection.heroImage.asset->url,
    content,
    "mainContent": mainContent{
      "innerBlocks": innerBlocks[]{
        ...,
        cards[]{
          ...,
          "imageUrl": image.asset->url,
        },
        contactBanner[] {
          ...,
        },
        imgContent[] {
          ...,
          "image": Image.asset->url,
        },
      }
    }
  }
`;


export async function getPage(
  client: SanityClient,
  slug: string,
): Promise<Page> {
  try {
    return await client.fetch(pageBySlugQuery, { slug })
  } catch (error) {
    console.error('Error fetching page by slug:', error)
    throw error // Or handle it as needed
  }
}

// Page Slugs Query
// export const pageSlugsQuery = groq`
//   *[_type == "page" && defined(slug.current)] {
//     ...,
//     "heroImages": heroSection.heroImage.asset->url,
//   }
// `

// // sanity.queries.ts
// export const pageBySlugsQuery = groq`
//   *[_type == "page" && slug.current == $slug][0] {
//     ...,
//     "heroSection": {
//       ...heroSection,
//       "heroImageUrl": heroSection.heroImage.asset->url
//     }
//   }
// `

// export const getPageData = async (client) => {
//   const pageSlugsQuery = `
//   *[_type == "page" && defined(slug.current)] {
//     "slug": slug.current,
//     "heroSection": heroSection-> {
//       "heroImage": heroImage.url,
//       "heroText": heroText
//     }
//   } | order(_createdAt desc) | []._id
// `
//   const result = await client.fetch(pageSlugsQuery)
//   return result
// }
// Interfaces
export interface Post {
  _type: 'post'
  _id: string
  _createdAt: string
  title?: string
  slug: Slug
  excerpt?: string
  mainImage?: ImageAsset
  body: PortableTextBlock[]
}

export interface Page {
  _type: 'page'
  _id: string
  _createdAt: string
  title?: string
  slug: Slug
  content?: PortableTextBlock[]
  heroSection?: HeroSection
}
