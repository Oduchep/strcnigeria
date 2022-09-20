import React from 'react';
import HeadSeo from '../components/headSEO';
import siteMetadata from '../data/siteMetaData';

const AboutUs = () => {
  return (
    <div>
      <HeadSeo
        title={`About STRC`}
        description={`the about page of society of traditional roman catholics of nigeria`}
        canonicalUrl={siteMetadata.siteUrl}
        ogTwitterImage={siteMetadata.siteLogoSquare}
        ogType={'website'}
      />

      <div className="h-[65vh]">
        <p className="mt-20 text-center"> Page In progress</p>
      </div>
    </div>
  );
};

export default AboutUs;
