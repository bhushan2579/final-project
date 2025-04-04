import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Description from './Description/Description'
import Product from './Product/Product'
import Nav from './Navigation/Nav'
import ProviderFunction from './Context/ProviderFunction'
import AddtoCart from './Cart/AddtoCart'
import AddtoWishlist from './WishList/AddtoWishList'
import Category from './Category/Category'

function App() {


  return (
    <>
      <BrowserRouter>
      <ProviderFunction>
      <Nav/>
      <Routes>
        <Route path='/' element={<Product/>} />
        <Route path='/cart' element={<AddtoCart/>} />
        <Route path='/wishlist' element={<AddtoWishlist/>} />
        <Route path='/productdesc/:id' element={<Description/>} />
        <Route path='/category' element={<Category/>} />
      </Routes>
      </ProviderFunction>
      </BrowserRouter>
    </>
  )
}

export default App
