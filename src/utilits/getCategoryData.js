import React from 'react';

const getCategoryData = async () => {
  const res = await fetch('http://localhost:3000/api/categoriesapi');
  const data = await res.json();
  return data || [];
};

export default getCategoryData;
