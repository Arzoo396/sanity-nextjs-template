import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { getClient } from '~/lib/sanity.client';
import { pageBySlugQuery } from '~/lib/sanity.queries';

const CardContent = ({ slug }) => {
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
    <div>
      {/* You can also render other parts of the page here, like a hero section */}
      {pageData.mainContent.innerBlocks.map((block, index) => (
        <div key={index}>
          {block.cards.map((card, cardIndex) => (
            <div key={cardIndex} className="card">
              <h3>{card.title}</h3>
              {card.imageUrl && (
                <Image
                  src={card.imageUrl}
                  alt={card.imageAlt || 'Card Image'}
                  width={200} // Set appropriate width
                  height={150} // Set appropriate height
                  layout="responsive"
                />
              )}
              <p>{card.paragraph}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CardContent;
