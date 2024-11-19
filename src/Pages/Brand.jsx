import { useLoaderData } from "react-router-dom";
import BrandData from "../Components/BrandData";


const Brand = () => {
  const  brands  = useLoaderData()
  
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-2xl font-bold text-center">All Brand Data</h1>
      <div className="md:w-7/12 mx-auto ">
      {
        brands.map(brand => <BrandData  key={brand._id} brand={brand}></BrandData>)
      }
      </div>
    </div>
  );
};

export default Brand;