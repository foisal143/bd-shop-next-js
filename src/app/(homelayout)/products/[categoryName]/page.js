import SingleProductCard from '@/components/SingleProductCard';
import getDataByCategory from '@/utilits/getDataByCategory';
import React from 'react';

const ProductsByCategory = async ({ params }) => {
  const { categoryName } = params;
  console.log(categoryName);
  const products = await getDataByCategory();
  const productsByCategory = products.filter(
    product => product?.category === categoryName
  );
  console.log(products);

  return (
    <div className="my-12 px-5 lg:px-12 ">
      <h3 className="font-bold text-3xl text-center">
        <span className="text-blue-500 text-4xl">{categoryName}</span>{' '}
        Collection
      </h3>

      <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {productsByCategory &&
          productsByCategory.map(product => (
            <SingleProductCard key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default ProductsByCategory;
