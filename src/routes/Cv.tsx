import { useEffect, useState } from 'react';
import AppNavigation from '../components/AppNavigation';
import AppComputervaardigheden from '../components/CV/AppComputervaardigheden';
import AppOpleiding from '../components/CV/AppOpleiding';
import AppWerkervaring from '../components/CV/AppWerkervaring';
import { useMediaQuery } from 'react-responsive';
import { Menu, X } from 'lucide-react';
import cvLotte from '../assets/files/CV_LotteKeyngnaert.pdf';

export default function Cv() {
  const isMobile = useMediaQuery({ query: '(max-width: 840px)' });
  const [showNav, setShowNav] = useState(false);
  const [selectedTab, setSelectedTab] = useState('opleiding'); // Initial selected tab

  const showNavigation = () => {
    setShowNav(!showNav); // Toggle nav state
  };

  const handleRadioChange = (event: any) => {
    setSelectedTab(event.target.value); // Update selected tab on radio change
  };

  return (
    <main className="flex h-screen w-screen flex-row">
      <div
        className={`z-20 flex flex-col overflow-hidden bg-black ${
          showNav ? 'absolute top-0 left-0 h-screen w-screen translate-x-0 p-4' : 'none h-0 w-0 translate-x-full p-0'
        }`}
      >
        <button className="self-end" onClick={showNavigation}>
          <X className="stroke-white" size={60} />
        </button>
        <AppNavigation />
        <a
          href={cvLotte}
          download={cvLotte}
          className="absolute bottom-[15%] block text-lg text-white tablet:hidden"
        >
          Download cv
        </a>
      </div>
      <div className="flex h-screen w-full flex-col items-center p-4 pb-0 ">
        <div className="flex w-full flex-row justify-between web:w-9/12 ">
          <h1 className="font-heading text-4xl font-bold text-white">
            Lotte Keyngnaert
          </h1>
          {isMobile ? (
            <button className="self-start" tabIndex={-1} onClick={showNavigation}>
              <Menu className="stroke-white" size={60} />
            </button>
          ) : (
            <AppNavigation />
          )}
        </div>
        <div className="flex h-[85%] w-screen flex-col my-auto web:my-0 tablet:flex-row">
          <AppComputervaardigheden />
          <div className="tablet:mt-10 tablet:w-4/5 w-screen mt-20 flex flex-col tablet:items-start justify-center items-center">
            <div className="flex tablet:w-fit w-[90%] mx-0 tablet:mx-auto rounded flex-col tablet:flex-row  items-center justify-center bg-zinc-900 divide-y-2 tablet:divide-y-0 tablet:divide-x-2 divide-zinc-700">
              <label className="cursor-pointer tablet:px-3 py-3">
                <input
                  type="radio"
                  value="opleiding"
                  checked={selectedTab === 'opleiding'} 
                  onChange={handleRadioChange}
                  className="sr-only"
                />
                <span className={`font-heading text-3xl font-medium  tablet:text-2xl ${selectedTab === 'opleiding' ? 'text-white' : "text-zinc-500"}`}>
                  Opleiding
                </span>
              </label>
              <label className="cursor-pointer tablet:px-3 py-3">
                <input
                  type="radio"
                  value="werkervaring"
                  checked={selectedTab === 'werkervaring'} 
                  onChange={handleRadioChange}
                  className="sr-only"
                />
                <span className={`font-heading text-3xl font-medium  tablet:text-2xl ${selectedTab === 'werkervaring' ? 'text-white' : "text-zinc-500"}`} >
                  Werkervaring
                </span>
              </label>
            </div>
            <div className="h-fit tablet:h-full mt-5 tablet:mt-0 w-full">
              {selectedTab === 'opleiding' && <AppOpleiding />}
              {selectedTab === 'werkervaring' && <AppWerkervaring />}
            </div>
          </div>
        </div>
      </div>
      <a href={cvLotte} download="CV_LotteKeyngnaert" className='fixed z-10 text-white font-body tablet:absolute bottom-5 right-10'>Download CV</a>
    </main>
  );
}
