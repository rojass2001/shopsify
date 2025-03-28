/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom'
const mobilenav=[{name:"Home",link:"/"},
    {name:"About",link:"/about"},
    {name:"Products",link:"/products"},
    {name:"Contact",link:"/contact"},
    {name:"signout",link:"/login"}]
function Mobilenavbar({navbarpopup}) {
  return (
    <div className='bg-blue-800 pt-10 text-center absolute h-screen top-0 left-0 w-[92%]'>
       <ul className='text-white text-2xl list-none  font-bold'>
        {mobilenav.map((a)=>(
         <Link to={a?.link} key={a}> <li onClick={navbarpopup} className='mb-7' >{a.name}</li></Link>
       )) }

        </ul>
    </div>
  )
}

export default Mobilenavbar
