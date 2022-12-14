import React from 'react';
import Footer from './footer';
import Header from './header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="pt-[11.5rem]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
