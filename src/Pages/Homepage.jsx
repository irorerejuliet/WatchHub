
import Herosection from '../Components/Herosection';
import ProductList from '../Components/ProductList';

const Homepage = () => {
  return (
    <div className="bg-heroimg  bg-cover bg-left h-screen">
      <Herosection />
      <ProductList/>
    </div>
  );
}

export default Homepage
