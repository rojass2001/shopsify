import { BrowserRouter as Router,Route,Routes  } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import DesktopNav from './Navbar/DesktopNav'
import  Home from '../Pages/Home'
const  Cart=lazy(()=>import('../Pages/Cart'))
import Footer from  './Footer'
import Loader from '../Pages/Loader'
const Productdetails=lazy(()=>import('../Pages/Productdetail'))
const AllProduct =lazy(()=>import('../Pages/AllProducts')) 
const Filter=lazy(()=>import('../Pages/Filter'));
const Login =lazy(()=>import('../Pages/Login'))
//import Login from './Pages/Loginorregister/Login'
const Register =lazy( ()=>import('../Pages/Register'))
const Contact =lazy(()=>import('../Pages/Contact'))
const About=lazy(()=>import('../Pages/About'))


function Routings() {
  return (
    <div className='w-full'>
      
      <Router>
      <DesktopNav />
     <Suspense fallback={<Loader/>}>
     
 
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shopsify" element={<Home/>} />
        <Route path="/details" element={<Productdetails/>} />
        <Route path="/products" element={<AllProduct/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/filter" element={<Filter/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>}/>
        </Routes>
        
        
        </Suspense>
        <Footer/>
      </Router>
      
    </div>
  )
}

export default Routings
