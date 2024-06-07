import Clients from "@/components/Clients";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentsProject from "@/components/RecentsProject";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";


export default function Home() {
  return (
   <main className="relative mx-auto bg-black-100 
   flex justify-center items-center flex-col
   overflow-hidden sm:px-10 px-5 ">
      <div className="max-w-7xl w-full">
        <FloatingNav
        navItems = {navItems}
        />
        <Hero/>
        <Grid/>
        <RecentsProject/>
        <Clients/>
      </div>
   </main>
  );
}
