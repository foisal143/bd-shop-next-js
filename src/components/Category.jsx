import getCategoryData from '@/utilits/getCategoryData';
import React from 'react';
import SingleCategoryCart from './SingleCategoryCart';

const Category = async () => {
  const categories = await getCategoryData();
  return (
    <div className="py-12">
      <h3 className="font-bold text-3xl text-center">Our Products Category</h3>
      <div className="my-12 px-5 lg:px-12 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {categories.map(category => (
          <SingleCategoryCart key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Category;
