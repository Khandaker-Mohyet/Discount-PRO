import { Link } from "react-router-dom";


const BrandData = ({ brand }) => {

  const {brand_name, brand_logo, isSaleOn, description, id}= brand
  return (
    <div className='font-serif my-4'>
    <div className="card bg-base-100 w-full shadow-xl">
        <div className="flex p-6 gap-5">
          <div>
          <img className="max-w-60 rounded-2xl" src={brand_logo} alt="" />
          <h1 className="text-3xl font-bold text-center">{brand_name}</h1>
      </div>
      <div>
          <h1 className="text-3xl font-bold">{brand_name}</h1>
            <h1 className=" font-bold">{description}</h1>
            <Link to={`/details/${id}`} className="btn">View Coupons</Link>
            {
              isSaleOn? <h1>sale is on</h1>  : ""
            }
      </div>
      </div>
    </div>
    </div>
  );
};

export default BrandData;