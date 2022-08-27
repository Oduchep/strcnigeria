import React from 'react';
import Footer from './footer';
import Header from './header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="pt-44">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
