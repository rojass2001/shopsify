
import Service from "@/components/service/Service";
import Hero from "../components/Hero";
import HomeCategory from "../components/categorys/HomeCategory";
import Topproducts from "../components/Topproducts";

export default function Home() {
  return (
    <div className='w-full mt-[105px] md:mt-[60px]'>
      <Hero />
      <HomeCategory />
      <Topproducts />
      <Service/>
    </div>
  );
}
