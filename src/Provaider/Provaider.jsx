import AuthProvaider from '@/context/AuthProvaider/AuthProvaider';
import React from 'react';

const Provaider = ({ children }) => {
  return (
    <>
      <AuthProvaider>{children}</AuthProvaider>
    </>
  );
};

export default Provaider;
