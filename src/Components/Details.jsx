
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
  const data = useLoaderData()
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const {brand_name, brand_logo, rating, coupons} = product || {}

  console.log(coupons)

  useEffect(() => {

    const singleData = data.find(product => product.id == id)
    setProduct(singleData)
    
  }, [data, id])

  return (
    <div>
      <h1 className='text-2xl font-bold'>{brand_name}</h1>
      <img src={brand_logo} alt="" />
        
      <div>
      {/* {
       coupons.map((coupon, idx) => (
       <div key={idx}>{coupon.coupon_code}</div>
      ))
      } */}
      </div>
    </div>
  );
};

export default Details;