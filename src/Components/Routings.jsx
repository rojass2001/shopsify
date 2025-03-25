import { BrowserRouter as Router,Route,Routes  } from 'react-router-dom'
import { lazy, Suspense } from 'react'
const DesktopNav=lazy(()=>import('./Navbar/DesktopNav'))
const Home=lazy(()=>import('./Pages/Home'))
const Cart=lazy(()=>import('./Pages/Cart'))
const Footer=lazy(()=>import( './Footer'))
import Loader from './Pages/Loader'
const Productdetail=lazy(()=>import('./Pages/Productdetail'));
const AllProducts=lazy(()=>import('./Pages/AllProducts')) 
const Filter=lazy(()=>import('./Pages/Filter'));
const Login =lazy(()=>import('./Pages/Loginorregister/Login'))
//import Login from './Pages/Loginorregister/Login'
const Register =lazy( ()=>import('./Pages/Loginorregister/Register'))
const Contact =lazy(()=>import('./Pages/Contact'))
const About=lazy(()=>import('./Pages/About'))


function Routings() {
  return (
    <div className='w-full'>
      
      <Router>
      <Suspense fallback={<Loader/>}>
      <DesktopNav />
 
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shopsify" element={<Home/>} />
        <Route path="/details" element={<Productdetail/>} />
        <Route path="/products" element={<AllProducts/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/filter" element={<Filter/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>}/>
        </Routes>
        
        <Footer/>
        </Suspense>
      </Router>
      
    </div>
  )
}

export default Routings
