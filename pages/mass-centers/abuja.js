import React from 'react';
import HeadSeo from '../../components/headSEO';
import siteMetadata from '../../data/siteMetaData';

const Abuja = () => {
  return (
    <>
      <HeadSeo
        title={`Abuja Mission`}
        description={`abuja mission page of society of traditional roman catholics of nigeria`}
        canonicalUrl={siteMetadata.siteUrl}
        ogTwitterImage={siteMetadata.siteLogoSquare}
        ogType={'website'}
      />
      <div>Abuja</div>
    </>
  );
};

export default Abuja;
