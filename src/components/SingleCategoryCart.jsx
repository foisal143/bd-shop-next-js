import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleCategoryCart = ({ category }) => {
  const { name, image } = category;
  return (
    <Link href={`/products/${name}`}>
      <div className="p-2 border rounded-md border-gray-300">
        <img className="w-full " src={image}></img>
        <p className="text-2xl font-bold">{name}</p>
      </div>
    </Link>
  );
};

export default SingleCategoryCart;
