import { useState } from 'react'
import WerkItem from './WerkItem'
import { iWerk } from '../../interfaces/IWerk'
import { Link } from 'lucide-react'

import keyboard from '../../assets/img/appleKeyboard.jpg'

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

  console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' + werk[0])

  return (
    <div className="grid h-screen w-11/12  grid-cols-[minmax(auto,_1fr)_20px_minmax(auto,_1fr)] content-center items-center gap-x-6 text-white">
      <h2 className="col-span-full mb-8 justify-self-center font-heading text-4xl font-medium">
        Werkervaring
      </h2>
      <div className="col-start-2 row-start-2 row-span-4 flex h-full w-0.5 justify-self-center rounded bg-accent"></div>
      {/* {werk.map((item, index) => (
        <WerkItem key={index} werk={item} />
      ))} */}
      <div
        className={`col-start-1 row-start-2 flex flex-col items-end text-white`}
      >
        <h3 className="text-right font-heading text-2xl font-medium">
          Graphic Designer - Stage
        </h3>
        <p className="mb-4 font-body font-light">
          van 2020-03-02 tot 2020-03-21 (corona)
        </p>
        <p className='font-body '>Logo's ontwerpen, social media video's maken, enz.</p>
        <a
          href={'https://www.impressionant.be/home/'}
          target="_blank"
          rel="noreferrer"
          className='flex flex-row gap-2 justify-end font-body italic'
        >
          <Link className='stroke-white w-4'/> Impressionant in Ieper
        </a>
      </div>
      <div
        className={`col-start-3 row-start-3 flex flex-col items-start text-white`}
      >
        <h3 className="text-left font-heading text-2xl font-medium">
        Administratief bediende - Vakantiejob
        </h3>
        <p className="mb-4 font-light font-body">
        Zomer van 2018, 2019 en 2020
        </p>
        <p className='font-body'>Het digitaliseren van documenten en invullen van opdracht brieven</p>
        <a
          href={'https://www.vandelanotte.be/nl'}
          target="_blank"
          rel="noreferrer"
          className='flex flex-row gap-2 justify-start font-body italic'
        >
          <Link className='stroke-white w-4'/> Vandelanotte Accountancy BVBA in Kortrijk
        </a>
      </div>
      <div
        className={`col-start-1 row-start-4 flex flex-col items-end text-white`}
      >
        <h3 className="text-right font-heading text-2xl font-medium">
        Onderhoud - Vakantiejob
        </h3>
        <p className="mb-4 font-light font-body">
        Zomer 2019, 2020, 2021 en 2022
        </p>
        <p className='font-body'>Het poetsen van kamers, gangen, ramen, leefruimtes, enz.</p>
        <a
          href={'https://www.huizezonnelied.be/'}
          target="_blank"
          rel="noreferrer"
          className='flex flex-row gap-2 justify-start font-body italic'
        >
          <Link className='stroke-white w-4'/> Huize Zonnelied in Ieper
        </a>
      </div>
      <div
        className={`col-start-3 row-start-5 flex flex-col items-start text-white`}
      >
        <h3 className="text-left font-heading text-2xl font-medium">
        Andere - Occasioneel
        </h3>
        <p className="mb-4 font-light font-body">
          van 2017 - heden
        </p>
        <p className='font-body'>Leeftijden tussen 1 en 12jaar</p>
        <p className='font-body italic'>Bij diversen</p>
      </div>
    </div>
  )
}
