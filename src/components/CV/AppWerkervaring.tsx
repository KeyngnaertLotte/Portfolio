import { useState } from 'react'
import WerkItem from './WerkItem'
import { iWerk } from '../../interfaces/IWerk'
import { Link, Play } from 'lucide-react'
import { useMediaQuery } from 'react-responsive'

export default () => {
  const [werk, setWerk] = useState<iWerk[]>([
    {
      name: 'Graphic Designer - Stage',
      date: 'van 2020-03-02 tot 2020-03-21 (corona)',
      place: 'Impressionant in Ieper',
      website: 'https://www.impressionant.be/home/',
      description: "Logo's ontwerpen, video's maken, enz.",
      direction: 'right',
    },
    {
      name: 'Administratief bediende - Vakantiejob',
      date: 'Zomer van 2018-2020',
      place: 'Vandelanotte Accountancy BVBA in Kortrijk',
      website: 'https://www.vandelanotte.be/nl',
      description:
        'Het digitaliseren van documenten en invullen van opdracht brieven.',
      direction: 'left',
    },
    {
      name: 'Onderhoud - Vakantiejob',
      date: 'Zomer 2019-2022',
      place: 'Huize Zonnelied in Ieper',
      website: 'https://www.huizezonnelied.be/',
      description: 'Het kuisen van kamers, gangen, ramen, livings, enz.',
      direction: 'right',
    },
    {
      name: 'Andere - Occasioneel',
      description: 'Oppassen bij diversen',
      direction: 'left',
    },
  ])
  const isTablet = useMediaQuery({ query: '(min-width:560px)' })
  const isDesktop = useMediaQuery({ query: '(min-width:840px)' })
  const [showInfo, setShowInfo] = useState(0)

  const showingInfo = (index: number) => {
    if (showInfo === index) {
      setShowInfo(0)
    } else {
      setShowInfo(index)
    }
  }

  return (
    // <div className="grid h-screen w-11/12  grid-cols-[minmax(auto,_1fr)_20px_minmax(auto,_1fr)] content-center items-center gap-x-6 text-white">
    //   <h2 className="col-span-full mb-8 justify-self-center font-heading text-4xl font-medium">
    //     Werkervaring
    //   </h2>
    //   <div className="col-start-2 row-start-2 row-span-4 flex h-full w-0.5 justify-self-center rounded bg-accent"></div>
    //   {/* {werk.map((item, index) => (
    //     <WerkItem key={index} werk={item} />
    //   ))} */}
    //   <div
    //     className={`col-start-1 row-start-2 flex flex-col items-end text-white`}
    //   >
    //     <h3 className="text-right font-heading text-2xl font-medium">
    //       Graphic Designer - Stage
    //     </h3>
    //     <p className="mb-4 font-body font-light">
    //       van 2020-03-02 tot 2020-03-21 (corona)
    //     </p>
    //     <p className='font-body '>Logo's ontwerpen, social media video's maken, enz.</p>
    //     <a
    //       href={'https://www.impressionant.be/home/'}
    //       target="_blank"
    //       rel="noreferrer"
    //       className='flex flex-row gap-2 justify-end font-body italic'
    //     >
    //       <Link className='stroke-white w-4'/> Impressionant in Ieper
    //     </a>
    //   </div>
    //   <div
    //     className={`col-start-3 row-start-3 flex flex-col items-start text-white`}
    //   >
    //     <h3 className="text-left font-heading text-2xl font-medium">
    //     Administratief bediende - Vakantiejob
    //     </h3>
    //     <p className="mb-4 font-light font-body">
    //     Zomer van 2018, 2019 en 2020
    //     </p>
    //     <p className='font-body'>Het digitaliseren van documenten en invullen van opdracht brieven</p>
    //     <a
    //       href={'https://www.vandelanotte.be/nl'}
    //       target="_blank"
    //       rel="noreferrer"
    //       className='flex flex-row gap-2 justify-start font-body italic'
    //     >
    //       <Link className='stroke-white w-4'/> Vandelanotte Accountancy BVBA in Kortrijk
    //     </a>
    //   </div>
    //   <div
    //     className={`col-start-1 row-start-4 flex flex-col items-end text-white`}
    //   >
    //     <h3 className="text-right font-heading text-2xl font-medium">
    //     Onderhoud - Vakantiejob
    //     </h3>
    //     <p className="mb-4 font-light font-body">
    //     Zomer 2019, 2020, 2021 en 2022
    //     </p>
    //     <p className='font-body'>Het poetsen van kamers, gangen, ramen, leefruimtes, enz.</p>
    //     <a
    //       href={'https://www.huizezonnelied.be/'}
    //       target="_blank"
    //       rel="noreferrer"
    //       className='flex flex-row gap-2 justify-start font-body italic'
    //     >
    //       <Link className='stroke-white w-4'/> Huize Zonnelied in Ieper
    //     </a>
    //   </div>
    //   <div
    //     className={`col-start-3 row-start-5 flex flex-col items-start text-white`}
    //   >
    //     <h3 className="text-left font-heading text-2xl font-medium">
    //     Andere - Occasioneel
    //     </h3>
    //     <p className="mb-4 font-light font-body">
    //       van 2017 - heden
    //     </p>
    //     <p className='font-body'>Leeftijden tussen 1 en 12jaar</p>
    //     <p className='font-body italic'>Bij diversen</p>
    //   </div>
    // </div>
    <div className="grid grid-cols-1 grid-rows-mobile text-white h-full tablet:h-4/5 web:grid-cols-[minmax(auto,_1fr)_20px_minmax(auto,_1fr)] web:h-full web:mb-8 web:gap-x-8">
      <h2 className="mb-8 justify-self-center self-end font-heading text-3xl font-medium tablet:text-4xl web:col-span-3 web:row-start-1">
        Werkervaring
      </h2>
      <div className={`${isDesktop ? 'col-start-2 row-start-2 row-span-4 flex h-full w-0.5 justify-self-center rounded bg-accent' : 'hidden'}`}></div>
      <div className="flex flex-row web:col-start-1 web:row-start-2 web:justify-end">
        <button className='mt-2 mr-2 h-fit web:hidden' onClick={() => showingInfo(1)}>
          <Play className={`fill-accent stroke-none ${showInfo === 1 && !isTablet ? 'origin-center rotate-90' : 'origin-center rotate-0'}`} size={32} />
        </button>
        <div className="flex flex-col items-start web:items-end">
          <div className="flex flex-col items-start web:items-end">
            <h3 className="text-left font-heading text-2xl font-medium">
              Graphic Designer - Stage
            </h3>
            <p className="mb-4 font-body font-light">
              van 2020-03-02 tot 2020-03-21 (corona)
            </p>
          </div>
          <div className={`flex-col items-start ${showInfo === 1 || isTablet ? 'flex' : 'hidden'} web:items-end`}>
            <p className="font-body ">
              Logo's ontwerpen, social media video's maken, enz.
            </p>
            <a
              href={'https://www.impressionant.be/home/'}
              target="_blank"
              rel="noreferrer"
              className="flex flex-row justify-end gap-2 font-body italic"
            >
              <Link className="w-4 stroke-white" /> Impressionant in Ieper
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row web:col-start-3 web:row-start-3">
        <button className='mt-2 mr-2 h-fit web:hidden' onClick={() => showingInfo(2)}>
          <Play className={`fill-accent stroke-none ${showInfo === 2 && !isTablet ? 'origin-center rotate-90' : 'origin-center rotate-0'}`} size={32} />
        </button>
        <div className="flex flex-col items-start">
          <div className="flex flex-col items-start">
          <h3 className="text-left font-heading text-2xl font-medium">
          Administratief bediende - Vakantiejob
        </h3>
        <p className="mb-4 font-body font-light">
          Zomer van 2018, 2019 en 2020
        </p>
          </div>
          <div className={`flex-col items-start ${showInfo === 2 || isTablet ? 'flex' : 'hidden'}`}>
          <p className="font-body">
          Het digitaliseren van documenten en invullen van opdracht brieven
        </p>
        <a
          href={'https://www.vandelanotte.be/nl'}
          target="_blank"
          rel="noreferrer"
          className="flex flex-row justify-start gap-2 font-body italic"
        >
          <Link className="w-4 stroke-white" /> Vandelanotte Accountancy BVBA in
          Kortrijk
        </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row web:col-start-1 web:row-start-4 web:justify-end">
        <button className='mt-2 mr-2 h-fit web:hidden' onClick={() => showingInfo(3)}>
          <Play className={`fill-accent stroke-none ${showInfo === 3 && !isTablet ? 'origin-center rotate-90' : 'origin-center rotate-0'}`} size={32} />
        </button>
        <div className="flex flex-col items-start web:items-end">
          <div className="flex flex-col items-start web:items-end">
          <h3 className="text-left font-heading text-2xl font-medium">
          Onderhoud - Vakantiejob
        </h3>
        <p className="mb-4 font-body font-light">
          Zomer 2019, 2020, 2021 en 2022
        </p>
          </div>
          <div className={`flex-col items-start ${showInfo === 3 || isTablet ? 'flex' : 'hidden'} web:items-end`}>
          <p className="font-body">
          Het poetsen van kamers, gangen, ramen, leefruimtes, enz.
        </p>
        <a
          href={'https://www.huizezonnelied.be/'}
          target="_blank"
          rel="noreferrer"
          className="flex flex-row justify-start gap-2 font-body italic"
        >
          <Link className="w-4 stroke-white" /> Huize Zonnelied in Ieper
        </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row web:col-start-3 web:row-start-5">
        <button className='mt-2 mr-2 h-fit web:hidden' onClick={() => showingInfo(4)}>
          <Play className={`fill-accent stroke-none ${showInfo === 4 && !isTablet ? 'origin-center rotate-90' : 'origin-center rotate-0'}`} size={32} />
        </button>
        <div className="flex flex-col items-start">
          <div className="flex flex-col items-start">
          <h3 className="text-left font-heading text-2xl font-medium">
          Andere - Occasioneel
        </h3>
        <p className="mb-4 font-body font-light">van 2017 - heden</p>
          </div>
          <div className={`flex-col items-start ${showInfo === 4 || isTablet ? 'flex' : 'hidden'}`}>
          <p className="font-body">Leeftijden tussen 1 en 12jaar</p>
        <p className="font-body italic">Bij diversen</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}
