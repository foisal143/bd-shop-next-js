'use client';
import React, { useEffect } from 'react';

const changedTheme = () => {
  const theme = localStorage.getItem('bd-shop-theme');
  const html = document.querySelector('html');
  html.setAttribute('data-theme', theme);
};

export default changedTheme;
