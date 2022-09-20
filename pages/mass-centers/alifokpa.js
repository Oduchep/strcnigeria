import React from 'react';
import HeadSeo from '../../components/headSEO';
import siteMetadata from '../../data/siteMetaData';

const Alifokpa = () => {
  return (
    <>
      <HeadSeo
        title={`Alifokpa Mission`}
        description={`Alifokpa mission page of society of traditional roman catholics of nigeria`}
        canonicalUrl={siteMetadata.siteUrl}
        ogTwitterImage={siteMetadata.siteLogoSquare}
        ogType={'website'}
      />
      <div>Alifokpa</div>
    </>
  );
};

export default Alifokpa;
