import React, { useEffect } from 'react';
import Footer from './footer';
import Header from './header';
import Script from 'next/script';

const Layout = ({ children }) => {
  const APP_ID = 'zt3sl6ig';

  useEffect(() => {
    window.Intercom('boot', {
      app_id: APP_ID,
    });
  });

  return (
    <div>
      <Script id="show-freshdesk" type="text/javascript">
        {`
          (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/zt3sl6ig';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
        `}
      </Script>
      <Header />
      <main className="pt-[11.5rem]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
