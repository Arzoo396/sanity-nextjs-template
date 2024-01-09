import React, { useEffect, useState } from 'react'
import { getClient } from '~/lib/sanity.client'
import { pageBySlugQuery } from '~/lib/sanity.queries'
import Image from 'next/image'
import styles from './ImgDescSec.module.scss'

import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(getClient(false))

function urlFor(source) {
  return builder.image(source)
}

const ImgDescSec = ({ slug }) => {
  const [pageData, setPageData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const client = getClient()
      const data = await client.fetch(pageBySlugQuery, { slug })
      setPageData(data)
    }

    if (slug) {
      fetchData()
    }
  }, [slug])

  const innerBlocks = pageData?.mainContent?.innerBlocks

  return (
    <>
      {innerBlocks &&
        innerBlocks.map(
          (block, index) =>
            block._type === 'imgContent' && (
              <div key={index} className="w-full flex">
                <div className="w-[40%] mr-[15px]">
                  {block.imageContent && (
                    <Image
                      src={urlFor(block.imageContent.image).url()}
                      alt="A descriptive text for the hero image"
                      height={382}
                      width={440}
                      className="object-cover"
                      layout="responsive"
                    />
                  )}
                </div>
                <div className="w-[60%] ml-[15px]">
                  {block.imageContent.headline &&
                    block.imageContent.description && (
                      <div className="w-[100%]">
                        <h2 className="font-semibold text-3xl pb-5 text-sectionBgColor">
                          {block.imageContent.headline}
                        </h2>
                        <p className="text-primaryFontColor">
                          {block.imageContent.description}
                        </p>
                      </div>
                    )}
                </div>
              </div>
            ),
        )}
    </>
  )
}

export default ImgDescSec
