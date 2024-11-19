
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
  const data = useLoaderData()
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const {brand_name, brand_logo, description} = product

  console.log(product)

  useEffect(() => {

    const singleData = data.find(product => product.id == id)
    setProduct(singleData)
    
  }, [data, id])

  return (
    <div>
      {brand_name}
    </div>
  );
};

export default Details;