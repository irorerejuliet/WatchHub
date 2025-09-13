import Navbar from "./Components/Layouts/Navbar"
import Footer from "./Components/Layouts/Footer"
import { Route, Routes } from "react-router-dom"
import Homepage from "./Pages/Homepage"
import ProductDetails from "./Pages/ProductDetails"
import Cart from "./Pages/Cart"


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
