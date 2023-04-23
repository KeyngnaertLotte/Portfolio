import { useState } from 'react'
import AppNavigation from '../components/AppNavigation'
import AppComputervaardigheden from '../components/CV/AppComputervaardigheden'
import AppOpleiding from '../components/CV/AppOpleiding'
import AppWerkervaring from '../components/CV/AppWerkervaring'


export default function Cv() {
  const [active, setActive] = useState(0)

  
  return (
    <main className="flex h-screen w-full flex-col items-center bg-black p-4">
      <div className="flex w-9/12 flex-row justify-around">
        <h1 className="w-11/12 pb-5 font-heading text-4xl font-bold text-white">
          Lotte Keyngnaert
        </h1>
        <AppNavigation />
      </div>
        {active === 0 ? <AppOpleiding/> : active === 1 ? <AppWerkervaring/> : <AppComputervaardigheden/>}
      <div className='flex flex-row gap-4'>
        <button className={`w-24 h-1 bg-white rounded ${active === 0 ? `opacity-1` : 'opacity-50'}`} onClick={() => setActive(0)}/>
        <button className={`w-24 h-1 bg-white rounded ${active === 1 ? `opacity-1` : 'opacity-50'}`} onClick={() => setActive(1)}/>
        <button className={`w-24 h-1 bg-white rounded ${active === 2 ? `opacity-1` : 'opacity-50'}`} onClick={() => setActive(2)}/>
      </div>
    </main>
  )
}
