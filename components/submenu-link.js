import React from 'react';
import Link from 'next/link';

const SubmenuLink = ({ href, text }) => {
  return (
    <Link href={href}>
      <a className="p-3 hover:bg-primary-3 hover:text-primary">{text}</a>
    </Link>
  );
};

export default SubmenuLink;
