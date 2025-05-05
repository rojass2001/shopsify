import Image from 'next/image' // Next.js optimized Image component
import img from '../../../public/images/about.jpg' // Importing a static image
import Box from '@/components/Box' // Custom wrapper component (likely an abstraction over <div>)

function About() {
  return (
    // Outer Box with responsive top margin (120px default, 60px on medium screens)
    <Box className="w-full mt-[120px] md:mt-[60px]">
      {/* Full screen height container with relative positioning required for fill layout in Image */}
      <Box className="w-full h-screen relative">
        {/* Image with "fill" makes it occupy the entire parent container */}
        {/* 'object-contain' ensures the image covers the box without distortion */}
        <Image
          className="w-full h-full object-right-top" // Consider adding object-fit styling for better visual results
          fill
          src={img}
          quality={75}
          priority
          alt="About section background" // More descriptive alt for accessibility
        />
      </Box>
    </Box>
  )
}

export default About
