import React from 'react';
import HeadSeo from '../../components/headSEO';
import siteMetadata from '../../data/siteMetaData';

const Umunze = () => {
  return (
    <>
      <HeadSeo
        title={`Umunze Mission`}
        description={`Umunze mission page of society of traditional roman catholics of nigeria`}
        canonicalUrl={siteMetadata.siteUrl}
        ogTwitterImage={siteMetadata.siteLogoSquare}
        ogType={'website'}
      />
      <div>Umunze</div>
    </>
  );
};

export default Umunze;
