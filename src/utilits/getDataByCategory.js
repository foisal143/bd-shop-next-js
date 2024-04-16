import React from 'react';

const getDataByCategory = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/productsapi`
  );

  const data = await res.json();

  return data || [];
};

export default getDataByCategory;
