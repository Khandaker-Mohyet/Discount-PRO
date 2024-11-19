import React from 'react';

const HomeCard = ({ brand }) => {
  const {brand_name, brand_logo, category}= brand
  return (
    <div className='flex'>
      <div className="card bg-base-200 shadow-md p-6 w-96">
  <figure>
    <img className='h-24 pt-3'
      src={brand_logo}
      alt="Logo" />
  </figure>
  <div className="card-body">
    <h2 className="text-xl font-bold">Brand Name: {brand_name}</h2>
    <h3 className='text-xl '>Total Coupons: 2</h3>
    <h3 className='text-xl '>Category: {category}</h3>
  </div>
</div>
    </div>
  );
};

export default HomeCard;