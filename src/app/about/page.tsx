import Image from 'next/image'
function About() {
  return (
    <div className="w-full mt-[120px] md:mt-[60px] ">
    <div className="h-screen relative">
        <Image className='w-full h-full' fill unoptimized  src="/about.jpg" alt="image loading" />
    </div>
    </div>
  )
}

export default About
