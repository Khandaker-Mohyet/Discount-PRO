
import Banner from '../Components/Banner';
import BrandLogo from '../Components/BrandLogo';
import { useLoaderData } from 'react-router-dom';
import HomeCard from '../Components/HomeCard';
import Brand from './Brand';
import Footer from '../Components/Footer';
import StaticSections from '../Components/StaticSections';

const Home = () => {
  const  brands  = useLoaderData()
  // console.log(brands)
  return (
    <div className='w-10/12 mx-auto'>
      <Banner></Banner>
      <BrandLogo></BrandLogo>
      <div className="grid gap-6 lg:grid-cols-3 md: grid-cols-2 my-16">
      {
        brands.map(brand => <HomeCard  key={brand._id} brand={brand}></HomeCard>)
      }
      </div>
      <StaticSections></StaticSections>
    </div>
  )
};

export default Home;