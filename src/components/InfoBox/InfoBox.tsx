import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { getClient } from '~/lib/sanity.client';
import { pageBySlugQuery } from '~/lib/sanity.queries';
import styles from './InfoBox.module.scss';

const InfoBox = ({ slug }) => {
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const client = getClient();
      const data = await client.fetch(pageBySlugQuery, { slug });
      setPageData(data);
    };

    if (slug) {
      fetchData();
    }
  }, [slug]);

  if (!pageData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h2 className='ml-5 pb-5 pt-10 font-semibold'>SERVICES & PRODUCTS</h2>
      <h3 className={styles.servicesProduct}>
        De-risk Your Drug Development Projects With Analytical Testing Services Designed by Trusted Experts
      </h3>

      <div className='flex flex-wrap'>
        <div className="hidden md:block w-[350px] h-[210px] m-5 ">
          <div>Choose from our comprehensive analytical testing packages, custom synthesis and GMP CDMO services.</div>
          <br />
          <div>Conducted entirely in-house, our offerings conform to the latest regulatory guidance with faster turnaround times.</div>
        </div>

        {/* Additional content can be rendered here, like a hero section */}
        {pageData.mainContent.innerBlocks.map((block) => (
          <>
            {block.cards?.map((card, cardIndex) => (
              <div key={cardIndex} className={styles.card}>
                <Image
                  src={card.imageUrl}
                  alt={card.imageAlt || 'Card Image'}
                  width={80} // Set appropriate width
                  height={80} // Set appropriate height
                  layout="responsive"
                />
                <h3 className={styles.cardText}>{card.text}</h3>
                <p className={styles.cardDescription}>{card.paragraph}</p>
              </div>
            ))}
          </>
        ))}
      </div>
    </>
  );
};

export default InfoBox;
