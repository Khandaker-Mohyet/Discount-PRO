import React from 'react';

const HomeCard = ({ brand }) => {
  const {brand_name, brand_logo, category}= brand
  return (
    <div className='flex font-serif'>
      <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img className='h-24 pt-3'
      src={brand_logo}
      alt="Logo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Brand Name: {brand_name}</h2>
    <h3 className='text-xl '>Total Coupons: 2</h3>
    <h3 className='text-xl '>Category: {category}</h3>
  </div>
</div>
    </div>
  );
};

export default HomeCard;