
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Details = () => {
  const data = useLoaderData()
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };
  
  useEffect(() => {

    const singleData = data.find(product => product.id == id)
    setProduct(singleData)
    
  }, [data, id])

  const { brand_name, brand_logo, rating, coupons } = product || {}
  
  console.log(product, coupons)

  return (
    <div>
      <div className='flex flex-col justify-center items-center'>
        <img className='max-w-[50%]' src={brand_logo} alt="" />
        <h1 className='text-2xl font-bold text-blue-600'>{brand_name}</h1>
      <p>Rating: <div className="rating rating-sm">
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  
            <input
            type="radio"
            name="rating-6"
            className="mask mask-star-2 bg-orange-400"
              defaultChecked />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  
         </div> {rating}</p>
      </div>
        
      <div className="md: flex my-14 w-8/12 mx-auto">
      { coupons?.length>0 &&
       coupons.map((coupon, idx) => (
         <div className="card bg-base-200 shadow-md w-96 p-5 mx-auto space-y-3" key={idx}>
           
           <h1 className='font-bold'>Coupon: {coupon.coupon_code}</h1>
           <p>Description: {coupon.description}</p>
           <p>Expiry date: {coupon.expiry_date}</p>
           <p>Condition: {coupon.condition}</p>
           <p>Coupon type: {coupon.coupon_type}</p>
           <CopyToClipboard text={coupon.coupon_code} onCopy={handleCopy}>
        <button className="btn btn-primary btn-outline my-2">Copy Code</button>
      </CopyToClipboard>
      {isCopied && (
        <p className="text-green-500 mt-2">Coupon code copied successfully!</p>
      )}
           
           
         </div>
      ))
      }
      </div>
    </div>
  );
};

export default Details;