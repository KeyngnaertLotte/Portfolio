import AppAboutMe from "../components/AboutMe/AppAboutMe";
import AppNavigation from "../components/AppNavigation";
import { useMediaQuery } from 'react-responsive'
import { useState } from 'react'
import { Menu, X } from "lucide-react";

export default function AboutMe() {
  const isMobile = useMediaQuery({ query: '(max-width: 840px)' })
  const [showNav, setShowNav] = useState(false)

  const showNavigation = () => {
    if (showNav){
      setShowNav(false)
    }
    else{
      setShowNav(true)
    }
  }
  return (
    // <main className="h-screen  w-full flex flex-col items-center p-4">
    //   <div className="flex flex-row justify-around w-9/12">
    //     <h1 className='text-white text-4xl pb-5 font-heading font-bold w-11/12'>Lotte Keyngnaert</h1>
    //     <AppNavigation/>
    //   </div>
    //   <AppAboutMe/>
    // </main>
    <main className="h-screen w-screen flex flex-row">
        
    <div className={`bg-black z-20 overflow-hidden flex flex-col ${showNav ? 'translate-x-0 absolute top-0 left-0 h-screen w-screen  p-4' : 'translate-x-full none h-0 w-0  p-0'}`}>
      <button className='self-end' onClick={showNavigation}><X className='stroke-white' size={60}/></button>
      <AppNavigation />
    </div>
      <div className="h-screen w-full flex flex-col items-center p-4 pb-0 ">
      <div className="flex flex-row justify-between w-full  web:w-9/12 ">
        <h1 className='text-white font-heading font-bold text-4xl'>Lotte Keyngnaert</h1>
        {isMobile ? <button className='self-start' onClick={showNavigation}><Menu className='stroke-white' size={60}/></button> : <AppNavigation /> }
      </div>
        <AppAboutMe/>

      </div>
    </main>
  );
}