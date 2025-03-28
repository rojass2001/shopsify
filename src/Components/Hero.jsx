
function Hero() {  
  return (
<div className="w-full ">
  <div className='w-full  place-items-center bg-blue-600 flex justify-around px-2 min-h-[350px]'>
    <div className='max-w-[400px] h-full place-content-center text-xl font-bold text-white'>
      <p className='text-3xl md:text-5xl '>Elevate Your With Trendy from </p>
      <button className='text-xl lg:text-4xl md:text-2xl text-white shadow-md shadow-gray-300 bg-blue-600
      p-2 rounded-full mt-4'>Shopsify</button>
    </div>
    <div className='place-content-center h-[400px] '>
      <img className='w-[300px] h-[300px] top-12 right-10 '
      src="https://www.rixxo.com/wp-content/uploads/2023/06/ecommerce-agency-hero.png"/>
    </div>
  </div>
</div>
  )
}

export default Hero
