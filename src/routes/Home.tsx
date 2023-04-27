import AppNavigation from '../components/AppNavigation'
import bg from '../assets/img/BgHome.jpg'
import { useMediaQuery } from 'react-responsive'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
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
    // <main className=" h-screen flex flex-col-reverse web:flex-row">
    //   <div className='web:h-full  h-1/2 web:w-1/2 w-full'> <img src={bg} alt="" className='web:h-full h-3/5 absolute bottom-0 left-0'/></div>
    //   <div className="h-1/2 web:h-full web:w-1/2 w-full flex flex-row web:flex-col web:justify-center web:items-center">
    //     <h1 className='text-white text-6xl pb-5 font-heading font-bold '>Lotte Keyngnaert</h1>
    //     <AppNavigation />
    //   </div>
    // </main>
    
    <main className="h-screen w-screen flex flex-col-reverse web:flex-row">
      <div className='h-2/3 w-full web:h-full web:w-1/2'> <img src={bg} alt="" className='h-full'/></div>
      <div className="h-1/3 w-full flex flex-row justify-between web:justify-center web:items-center p-4 web:h-full web:w-1/2 web:flex-col">
        <h1 className='text-white font-heading font-bold text-5xl web:text-6xl self-center tablet:text-7xl'>Lotte Keyngnaert</h1>
        {isMobile ? <button className='self-start' onClick={showNavigation}><Menu className='stroke-white' size={60}/></button> : <AppNavigation /> }
      </div>
      <div className={`bg-black overflow-hidden flex flex-col ${showNav ? 'translate-x-0 absolute h-screen w-screen  p-4' : 'translate-x-full none h-0 w-0  p-0'}`}>
        <button className='self-end' onClick={showNavigation}><X className='stroke-white' size={60}/></button>
        <AppNavigation />
      </div>
    </main>
  )
}
