// PageSlugRoute.tsx

import { PortableText } from '@portabletext/react'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useLiveQuery } from 'next-sanity/preview'
import Container from '~/components/Container'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import {
  getPage,
  pageBySlugQuery,
  pageSlugsQuery,
  Page,
} from '~/lib/sanity.queries'
import type { SharedPageProps } from '~/pages/_app'
import HeroSection from '~/components/HeroSection'
import CardContent from '~/components/CardContent'
import InfoBox from '~/components/InfoBox'
import PageWidth from '~/components/PageWidth'
import InfoBoxFull from '~/components/InfoBoxFull'
import ContactBanner from '~/components/ContactBanner'
import ImgDescSec from '~/components/ImgDescSec'

interface Query {
  [key: string]: string
}

export const getStaticProps: GetStaticProps<
  SharedPageProps & { page: Page },
  Query
> = async ({ draftMode = false, params = {} }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const page = await getPage(client, params.slug)

  if (!page) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      page,
    },
  }
}

const PageSlugRoute = (
  props: InferGetStaticPropsType<typeof getStaticProps>,
) => {
  const [page] = useLiveQuery(props.page, pageBySlugQuery, {
    slug: props.page.slug.current,
  })

  // Ensure you are passing the correct slug to the HeroSection component
  return (
      <section className="page">
        <div className="page__container">
          {/* <h1 className="page__title">{page.title}</h1> */}
          <div className="page__content">
            <PortableText value={page.content} />
          </div>
          <div>
            {/* Other components */}
            <HeroSection slug={page.slug.current} />
            <PageWidth>
            <InfoBox slug={page.slug.current} />
            <InfoBoxFull />
            <ContactBanner slug={page.slug.current} />
            <ImgDescSec slug={page.slug.current} />
            </PageWidth>
          </div>
        </div>
      </section>
  )
}

export const getStaticPaths = async () => {
  const client = getClient()
  const slugs = await client.fetch(pageSlugsQuery)

  return {
    paths: slugs?.map(({ slug }) => `/page/${slug}`) || [],
    fallback: 'blocking',
  }
}

// At the bottom of your PageSlugRoute file
export default PageSlugRoute
