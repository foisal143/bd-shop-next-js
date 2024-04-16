import SingleProductCard from '@/components/SingleProductCard';
import getDataByCategory from '@/utilits/getDataByCategory';
import React from 'react';

const ProductsPage = async () => {
  const products = await getDataByCategory();

  return (
    <main className="py-12">
      <h3 className="text-center text-3xl font-bold">All Products</h3>
      <div className="grid my-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-5 lg:px-12">
        {products &&
          products.map(product => (
            <SingleProductCard
              key={product._id}
              product={product}
            ></SingleProductCard>
          ))}
      </div>
    </main>
  );
};

export default ProductsPage;
