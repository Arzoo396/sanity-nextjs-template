import React, { useEffect, useState } from 'react'
import { getClient } from '~/lib/sanity.client'
import { pageBySlugQuery } from '~/lib/sanity.queries'
import { getPage } from '~/lib/sanity.queries'
import Image from 'next/image'

const MethodList = ({ slug }) => {
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
      {/* {sectionPageData &&
        sectionPageData.content &&
        sectionPageData.content.map(
          (item) =>
            (item.methodHeadline ||
              item.methodText ||
              (item.methodData && item.methodData.length > 0)) && (
              <div key={item._id} className="w-full mt-10 mb-10">
                <div className="mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
                  {item.methodHeadline && (
                    <h2 className="font-semibold text-3xl pb-5 md:w-9/12 w-9/12 text-sectionBgColor">
                      {item.methodHeadline}
                    </h2>
                  )}
                  {item.methodText && <p>{item.methodText}</p>}
                  {item.methodData && item.methodData.length > 0 && (
                    <div
                      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`}
                    >
                      {item.methodData.map((method, index) => (
                        <div key={index}>
                          {method.methodName && (
                            <h3 className="font-semibold leading-7 text-2xl text-primaryFontColor mt-6 mb-4">
                              {method.methodName}
                            </h3>
                          )}
                          {method.methodList && (
                            <ul
                              className={`list-disc text-primaryFontColor pb-3 pl-4`}
                            >
                              {method.methodList.map((listItem, listIndex) => (
                                <li key={listIndex}>{listItem}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ),
        )} */}
      <p>Hello I'm Method List</p>
    </>
  )
}

export default MethodList
