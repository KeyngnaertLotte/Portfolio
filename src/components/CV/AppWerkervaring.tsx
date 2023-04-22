import { useState } from 'react'
import WerkItem from './WerkItem'
import { iWerk } from '../../interfaces/IWerk'

import keyboard from '../../assets/img/appleKeyboard.jpg'

export default () => {
  const [werk, setWerk] = useState<iWerk[]>([
    {
      name: 'Graphic Designer - Stage',
      date: 'van 2020-03-02 tot 2020-03-21 (corona)',
      place: 'Impressionant in Ieper',
      website: 'https://www.impressionant.be/home/',
      description: "Logo's ontwerpen, video's maken, enz.",
    },
    {
      name: 'Administratief bediende - Vakantiejob',
      date: 'Zomer van 2018-2020',
      place: 'Vandelanotte Accountancy BVBA in Kortrijk',
      website: 'https://www.vandelanotte.be/nl',
      description:
        'Het digitaliseren van documenten en invullen van opdracht brieven.',
    },
    {
      name: 'Onderhoud - Vakantiejob',
      date: 'Zomer 2019-2022',
      place: 'Huize Zonnelied in Ieper',
      website: 'https://www.huizezonnelied.be/',
      description: 'Het kuisen van kamers, gangen, ramen, livings, enz.',
    },
    // { name: 'Andere - Occasioneel', description: 'Oppassen bij diversen' },
  ])

  return (
    <div className="text-white grid grid-cols-2  h-screen w-11/12 gap-6 items-center content-center">
      <h2 className="font-heading text-4xl mb-8 font-medium col-span-2 justify-self-center">Werkervaring</h2>
      <img
        src={keyboard}
        alt="Foto van een apple keyboard By me" className='w-9/12 justify-self-center rounded row-span-3'
      />
        {werk.map((job: iWerk) => (
          <WerkItem werk={job} />
        ))}
    </div>
  )
}
