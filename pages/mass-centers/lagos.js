import React from 'react';
import HeadSeo from '../../components/headSEO';
import siteMetadata from '../../data/siteMetaData';

const Lagos = () => {
  return (
    <>
      <HeadSeo
        title={`Lagos Mission`}
        description={`Lagos mission page of society of traditional roman catholics of nigeria`}
        canonicalUrl={siteMetadata.siteUrl}
        ogTwitterImage={siteMetadata.siteLogoSquare}
        ogType={'website'}
      />
      <div>Lagos</div>
    </>
  );
};

export default Lagos;
