"use client"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion";
    const mobilenav=[{name:"Home",link:"/"},
      {name:"About",link:"/about"},
      {name:"Products",link:"/products"},
      {name:"Contact",link:"/contact"},
      { name: "signout", link: "/login" }]
      
function Mobiledrawer({ navbarpopup, open }: { navbarpopup: () => void, open: boolean }) {
  return (
    <AnimatePresence mode="wait">
  {open &&(
      <motion.header
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
         transition={{ duration: 0.3 }}
         className='bg-blue-800 p-5 pt-10  absolute h-screen top-0 left-0 w-[92%]'>
        <ul className='text-white text-2xl list-none  font-bold'>
          {mobilenav.map((a)=>(
            <Link href={a.link} key={a.name}><li onClick={navbarpopup} className='mb-7' >{a.name}</li></Link>
          )) }

         </ul>
      </motion.header>
  )}
    </AnimatePresence>
  )
}

export default Mobiledrawer
