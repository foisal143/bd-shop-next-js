'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({ path, title }) => {
  const pathName = usePathname();
  const isActive = path === pathName;
  return (
    <Link className={isActive && ' border-b-2 border-blue-500'} href={path}>
      {title}
    </Link>
  );
};

export default Navlink;
