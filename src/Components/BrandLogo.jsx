
import Marquee from "react-fast-marquee";


const BrandLogo = () => {
  

  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-5">Top Brands</h1>
      <Marquee pauseOnHover={true} className="mr-10">
      <img className="w-20 h-20 mr-10" src="https://i.ibb.co.com/93yxJFn/Bata.png" alt="" />
      <img className="w-20 h-12 mr-10" src="https://i.ibb.co.com/XpKCBcz/Apex.png" alt="" />
      <img className="w-20 h-12 mr-10" src="https://i.ibb.co.com/NmFmCds/Infinity.webp" alt="" />
      <img className="w-12 h-12 mr-10" src="https://i.ibb.co.com/mhHDhdf/Sapno.png" alt="" />
      <img className="w-12 h-12 mr-10" src="https://i.ibb.co.com/2SjHmtb/aarong.jpg" alt="" />
      <img className="w-20 h-12 mr-10" src="https://i.ibb.co.com/Y3vxp5S/agora.png" alt="" />
      </Marquee>
      
    </div>
  );
};

export default BrandLogo;