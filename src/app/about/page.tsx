import Image from 'next/image'
import img from '../../../public/images/about.jpg'
function About() {
  return (
    <div className="w-full mt-[120px] md:mt-[60px] ">
    <div className="h-screen relative">
        <Image className='w-full h-full' fill  src={img} alt="image loading" />
    </div>
    </div>
  )
}

export default About
