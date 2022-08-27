import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="bg-primary-3-lighter"></div>

      <div className="bg-primary text-white text-center py-4">
        <Link href="/">
          &copy; 2019 Society of Traditional Roman Catholics, Nigeria
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
