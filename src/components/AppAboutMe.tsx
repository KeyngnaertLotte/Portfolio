import { ChevronRight, Plus, Minus } from 'lucide-react'
import myPhoto from '../assets/img/Foto_LotteKeyngnaert.png'

export default () => {
  return (
    <div className="flex h-full w-9/12 flex-col items-center justify-center text-white relative overflow-hidden ">
      <img src={myPhoto} alt="" className='relative h-4/5 opacity-40 rounded'/>
      <div className="p-8  w-3/4 absolute grid grid-rows-2 grid-cols-2 items-center gap-4 bg-neutral-800/40 rounded-lg">
        <ul className="col-span-1 row-span-1 self-start">
          <li className="m-4 flex items-start gap-2 ">
            <ChevronRight color="cyan" />
            <p>Naam: Lotte Keyngnaert</p>
          </li>
          <li className="m-4 flex items-start gap-2 ">
            <ChevronRight color="cyan" />
            <p>Geboortedatum: 2002-03-29</p>
          </li>
          <li className="m-4 flex items-start gap-2 ">
            <ChevronRight color="cyan" />
            <p>Woonplaats: Zonnebeke</p>
          </li>
        </ul>
        <ul className="col-span-1 row-span-1 self-start">
          <li className="m-4 flex items-start gap-2 row-span-1">
            <ChevronRight color="cyan" />
            <p className="max-w-fit">
              Opleiding:{' '}
              <a href="https://mct.be/">Multimedia & Creative Technologie</a>
            </p>
          </li>
          <li className="m-4 flex items-start gap-2">
            <ChevronRight color="cyan" />
            <p className="max-w-fit"></p>
            <p>Hobbies: lezen (taal: Engels), fotografie, muziek luisteren.</p>
          </li>
          <li className="m-4 flex items-start gap-2">
            <ChevronRight color="cyan" />
            <p>Broers/zussen: 1 oudere broer</p>
          </li>
        </ul>
        <div className='col-span-2 row-span-1 gap-2	m-4 flex flex-col items-start '>
        <p className="flex flex-row items-center justify-center gap-2">
          <Plus color="cyan" /> Sterke punten: zeer gedreven, goed luisterend
          oor, een doorzette, zorgzaam, denkt out of the box
        </p>
        <p className="flex flex-row items-center justify-center gap-2">
          <Minus color="cyan" /> Zwakke punten: vlug afgeleid, kan moeilijk
          sociale contacten leggen
        </p>
        </div>
      </div>
    </div>
  )
}
