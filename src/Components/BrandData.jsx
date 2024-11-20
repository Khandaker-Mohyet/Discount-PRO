import { Link } from "react-router-dom";


const BrandData = ({ brand }) => {

  const {brand_name,rating, brand_logo, isSaleOn, description, id}= brand
  return (
    <div className='my-4'>
    <div className="card bg-base-100 w-full shadow-xl">
        <div className="flex p-6 gap-5">
          <div>
          <img className="max-w-60 rounded-2xl" src={brand_logo} alt="" />
            <h1 className="text-3xl font-bold text-center">{brand_name}</h1>
            <p className="mt-5 text-center"><div className="rating rating-sm">
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
      <div className="space-y-4">
          <h1 className="text-3xl font-bold">{brand_name}</h1>
            <h1 className=" font-bold">{description}</h1>
            <Link to={`/details/${id}`} className="btn btn-primary">View Coupons</Link>
            {
              isSaleOn? <h1 className="font-bold text-green-600 animate__animated animate__swing">sale is on</h1>  : ""
            }
      </div>
      </div>
    </div>
    </div>
  );
};

export default BrandData;