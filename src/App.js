
import './App.css';
import Home from './component/Home';
import Navbar from './Navbar';
import Products from './component/Products';
import {Route,BrowserRouter,Routes} from 'react-router-dom';
import Product from './component/Product';
import About from './component/About';
import Contact from './component/contact';
import Login from './component/Login';
function App() {
  return (
 <>

<BrowserRouter>
 <Navbar/>
 <Routes>
  <Route  path="/" element={<Home />}/>
  <Route  path="/products" element={<Products />}/>
  <Route  path="/product/:id" element={<Product/>}/>
  <Route  path="/about" element={<About/>}/>
  <Route  path="/contact" element={<Contact/>}/>
  <Route  path="/login" element={<Login/>}/>
  </Routes>

  </BrowserRouter>
 </>
  )
}
export default App;
