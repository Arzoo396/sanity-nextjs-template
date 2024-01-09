// HeroSection.tsx
import React, { useEffect, useState } from 'react'
import { getClient } from '~/lib/sanity.client'
import { getPage } from '~/lib/sanity.queries'
import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url';
import Button from '../Button'
import styles from './HeroSection.module.scss'
import PageWidth from '../PageWidth'

const builder = imageUrlBuilder(getClient(false));

function urlFor(source) {
  return builder.image(source);
}

const HeroSection = ({ slug }) => {
  const [heroSection, setHeroSection] = useState(null)

  useEffect(() => {
    const fetchHeroSection = async () => {
      const client = getClient(false)
      const pageData = await getPage(client, slug)
      setHeroSection(pageData?.heroSection || null)

    }

    if (slug) {
      fetchHeroSection()
    }
  }, [slug])
  return (
    <>
      <section
        className={`${styles.heroSection} relative bg-white dark:bg-gray-900 overflow-hidden`}
      >
        <PageWidth>
          <div
            className={`${styles.mobileHeroGradient} lg:mt-0 lg:col-span-5 lg:flex md:hidden lg:hidden`}
          >
            {heroSection && heroSection.heroImage && (
              <Image
                src={urlFor(heroSection.heroImage).url()} // Updated src
                alt="A descriptive text for the hero image"
                height={382}
                width={440}
                className="object-cover"
                layout="responsive"
              />
            )}
          </div>
          <div
            className={`${styles.heroSectionGradient} absolute inset-0 z-0`}
          />
          <div
            className={`${styles.mobileContent} grid max-w-screen-xl px-4 lg:py-8 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12 relative z-0 md:mt-20 pt-0`}
          >
            <div className="lg:col-span-7 md:col-span-12 order-2 lg:order-1">
              <div className="mr-auto place-self-center pb-16">
              {heroSection && heroSection.heroText && (
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white mt-5">
                    {heroSection.heroText}
                </h1>
                  )}
              {heroSection && heroSection.paragraph && (

                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                 {heroSection.paragraph}
                </p>
                 )}
                <Button text="Contact Us" />
              </div>
            </div>
          </div>
        </PageWidth>
      </section>
    </>
  )
}
export default HeroSection
