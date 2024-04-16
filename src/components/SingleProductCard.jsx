import React from 'react';

const SingleProductCard = ({ product }) => {
  const { price, name, image, _id } = product;
  return (
    <div className="space-y-1 p-2 border border-gray-300 rounded-md">
      <img className="w-full h-56 lg:h-48" src={image} alt={name} />
      <p>
        <strong>Price:</strong> ${price}
      </p>
      <h4 className="text-2xl font-semibold">{name}</h4>
      <button className="btn btn-primary w-full"> Add To Card</button>
    </div>
  );
};

export default SingleProductCard;
