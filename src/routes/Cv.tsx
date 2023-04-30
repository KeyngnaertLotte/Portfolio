import { useEffect, useState } from 'react'
import AppNavigation from '../components/AppNavigation'
import AppComputervaardigheden from '../components/CV/AppComputervaardigheden'
import AppOpleiding from '../components/CV/AppOpleiding'
import AppWerkervaring from '../components/CV/AppWerkervaring'
import { useMediaQuery } from 'react-responsive'
import { Download, Menu, X } from 'lucide-react'
import cvLotte from '../assets/files/CV_LotteKeyngnaert.pdf'


export default function Cv() {
  const [active, setActive] = useState(0)

  // TODO: set timer to change active every 5 seconds
  useEffect(() => {
    console.log(active)
  const timer = setTimeout(() => {
    if (active === 2) {
      setActive(0)
    } else {
      setActive(active + 1)
    }
  }, 3000)
  return () => clearTimeout(timer)
  }, [active])

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
    <main className="h-screen w-screen flex flex-row">
        
    <div className={`bg-black z-20 overflow-hidden flex flex-col ${showNav ? 'translate-x-0 absolute top-0 left-0 h-screen w-screen  p-4' : 'translate-x-full none h-0 w-0  p-0'}`}>
      <button className='self-end' onClick={showNavigation}><X className='stroke-white' size={60}/></button>
      <AppNavigation />
      <a href={cvLotte} download={cvLotte} className='absolute bottom-[15%]  block tablet:hidden text-lg text-white'>Download cv</a>
    </div>
      <div className="h-screen w-full flex flex-col items-center p-4 pb-0 ">
      <div className="flex flex-row justify-between w-full  web:w-9/12 ">
        <h1 className='text-white font-heading font-bold text-4xl'>Lotte Keyngnaert</h1>
        {isMobile ? <button className='self-start' onClick={showNavigation}><Menu className='stroke-white' size={60}/></button> : <AppNavigation /> }
      </div>
      {active === 0 ? <AppOpleiding/> : active === 1 ? <AppWerkervaring/> : <AppComputervaardigheden/>}
      <div className='flex flex-row gap-4 mb-8  items-center'>
       <button className={`w-24 h-1 bg-white rounded ${active === 0 ? `opacity-1` : 'opacity-50'}`} onClick={() => setActive(0)}/>
       <button className={`w-24 h-1 bg-white rounded ${active === 1 ? `opacity-1` : 'opacity-50'}`} onClick={() => setActive(1)}/>
       <button className={`w-24 h-1 bg-white rounded ${active === 2 ? `opacity-1` : 'opacity-50'}`} onClick={() => setActive(2)}/>
        <a href={cvLotte} download={cvLotte} className='absolute hidden tablet:block tablet:right-[10%] web:right-[15%] text-white'>Download cv</a>
     </div>
      </div>
    </main>
  )
}
