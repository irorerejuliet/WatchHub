import { useContext } from "react"
import { Link } from "react-router-dom"
import { ShopContext } from "../context/ShopContextProvider"


const ProductList = () => {

  const {products} = useContext(ShopContext)

  return (
    <div>
      <div>
        <h2>Our Elegant & Expectional Collection</h2>
        <div>
          {products.map(({id, image, title, price}) =>  (
            <div key={id}>
              <Link to={`/product/${id}`}>
                <img src={image} alt={title} />
                <div>
                  <h4>{title}</h4>
                  <p>${price}</p>
                </div>
              </Link>
              <button>Add To Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductList
