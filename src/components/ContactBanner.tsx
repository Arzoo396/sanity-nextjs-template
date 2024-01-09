import React, { useEffect, useState } from 'react'
import { getClient } from '~/lib/sanity.client'
import { pageBySlugQuery } from '~/lib/sanity.queries'
import { getPage } from '~/lib/sanity.queries'
import Image from 'next/image'

const ContactBanner = ({ slug }) => {
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

  // Check if innerBlocks exists before mapping
  const innerBlocks = pageData?.mainContent?.innerBlocks

  return (
    <>
      {innerBlocks &&
        innerBlocks.map(
          (block, index) =>
            block._type === 'contactBanner' && (
              <div key={index} className="w-full">
                <div className="bg-sectionBgColor text-center p-7">
                  <div className="mx-auto px-4 md:px-8 lg:px-16 xl:px-32 pt-10 pb-10">
                    <h2 className="font-semibold text-3xl pb-2 text-[white]">
                      {block.banner.bannerHeading}
                    </h2>
                    <p className="text-[white] m-4 pb-2">
                      {block.banner.bannerText}
                    </p>
                    <p>
                      <a
                        className="text-primarybtnTxt pt-3 pb-3 pl-4 pr-4 bg-primarybtnBg text-lg hover:bg-primarybtnTxt hover:text-primarybtnBg"
                        href="#" // Assuming buttonLink is not provided
                      >
                        {block.banner.buttonText}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            ),
        )}
    </>
  )
}

export default ContactBanner
