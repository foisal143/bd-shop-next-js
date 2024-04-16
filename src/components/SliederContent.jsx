'use client';
import Link from 'next/link';
import React from 'react';

const SliederContent = ({ img, title, details }) => {
  return (
    <div
      className={` bg-cover bg-center relative flex justify-center items-center min-h-[calc(100vh-80px)]`}
    >
      <img src={img} alt="" className="absolute top-0 left-0 w-full h-full" />
      <div className="text-center flex justify-center items-center absolute top-0 z-10 w-full min-h-full bg-black/50 text-white">
        <div className="space-y-5 w-full lg:w-1/2 mx-auto">
          <h2 className="upparcase text-3xl font-semibold">{title}</h2>
          <p className="pb-5">{details}</p>
          <Link className="" href="/about">
            <button className="btn-primary btn">Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SliederContent;
