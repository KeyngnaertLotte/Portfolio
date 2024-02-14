import { Link } from 'lucide-react'
import athenaHeule from '../../assets/img/AthenaCampusHeule.jpg'
import HorizontalLine from './HorizontalLine'
import { useState } from 'react';

export default () => {
  const [selectedYear, setSelectedYear] = useState(2023);

  const handleRadioChange = (value: any, textColor: any) => {
    setSelectedYear(value);
    console.log('Selected Year:', value);
    console.log('Text Color:', textColor);
  };

  const jobs = [
    {
      year: [2023],
      job: 'Administratief bediende - studentenjob',
      company: 'Cid Lines, Ieper',
      description: 'Enkele weken in de zomer. Ophalen van gevraagde info van producten uit een Excel/server/database en plaatsen in een overzichtelijke Excel.'
    },
    {
      year: [2023],
      job: 'Onderhoud - studentenjob',
      company: 'Gemeente Zonnebeke, Zonnebeke',
      description: 'Enkele weken in de zomer. Het poetsen van OC zalen, leefkeukens, bureau\'s, enz.'
    },
    {
      year: [2018, 2019, 2023],
      job: 'Administratief bediende - studentenjob',
      company: 'Vandelanotte, Kortrijk',
      description: 'Enkele weken in de zomer. Inscannen van documenten en plaatsen in de correcte map, en nieuwe klanten in het portaal plaatsen.'
    },
    {
      year: [2020, 2021, 2022],
      job: 'Onderhoud - studentenjob',
      company: 'Huize Zonnelied, Ieper',
      description: 'Enkele weken in de zomer. Het poetsen van kamers, gangen, ramen, leefruimtes, enz.'
    },
    {
      year: 2020,
      job: 'Graphic Designer - stage',
      company: 'Impressionant, Ieper',
      description: '2 weken in maart. Vroeg gestopt door corona. Logo\'s ontwerpen, video\'s maken in After Effects, enz.'
    },
    {
      year: '2018 - heden',
      job: 'Oppassen',
      company: 'Diversen, Westhoek',
      description: 'Leeftijden van 1 jaar tot 12 jaar.'
    }
  ]

  

  return (
    <div className="flex h-full w-full items-center justify-center pt-4 font-body text-white">
      {/* 
        <div className='flex flex-col row-span-1 row-start-1 col-start-3 col-span-full'>
          <p>Administratief bediende - studentenjob</p>
          <p>Cid Lines, Ieper</p>
          <p className='text-sm text-zinc-500'>Enkele weken in de zomer. Ophalen van gevraagde info van producten uit een Excel/server/database en plaatsen in een overzichtelijke Excel.</p>
        </div>
       </div> */}
       <div className='grid h-full w-[20%] grid-rows-10  justify-items-start'>
       <div className="col-start-1 col-span-1 row-start-1 row-end-9 w-2 rounded-full bg-[#B27F00] justify-self-center"></div>
        <div className="col-span-1 col-start-1 row-span-1 row-start-2 h-4 w-4 rounded-full bg-[#B27F00] justify-self-center"></div>
        <div className="col-span-1 col-start-1 row-span-1 row-start-3  h-4 w-4 rounded-full bg-[#B27F00] justify-self-center"></div>
        <div className="col-span-1 col-start-1 row-span-1 row-start-4 h-4 w-4 rounded-full bg-[#B27F00] justify-self-center"></div>
        <div className="col-span-1 col-start-1 row-span-1 row-start-5 h-4 w-4 rounded-full bg-[#B27F00] justify-self-center"></div>
        <div className="col-span-1 col-start-1 row-span-1 row-start-6 h-4 w-4 rounded-full bg-[#B27F00] justify-self-center"></div>
        <div className="row-start-7 col-span-1 col-start-1 row-span-1 h-4 w-4 rounded-full bg-[#B27F00] justify-self-center"></div>
        <div className="row-start-8 col-span-1 col-start-1 row-span-1 h-4 w-4 rounded-full bg-[#B27F00] justify-self-center"></div>

        {[2023, 2022, 2021, 2020, 2019, 2018, '2018 - heden'].map((year, index) => (
        <label
          key={index}
          className={`cursor-pointer font-bold row-span-1 row-start-${index + 2} col-start-2 col-span-1 self-start ${
            selectedYear === year ? 'text-[#B27F00]' : ''
          }`}
        >
          <input
            type="radio"
            value={year}
            className="sr-only"
            onChange={() => handleRadioChange(year, '#B27F00')}
            checked={selectedYear === year}
          />
          <span className="">{year}</span>
        </label>
      ))}
       </div>

       <div className='w-[40%] h-full'>
  <div className='w-full h-full flex flex-col items-start justify-center gap-6'>
    {jobs.map((job, index) => (
      (Array.isArray(job.year) ? job.year.includes(selectedYear) : job.year === selectedYear) && (
        <div key={index} className="mb-4">
          <p className="font-bold">{job.job}</p>
          <p>{job.company}</p>
          <p className='text-sm'>{job.description}</p>
        </div>
      )
    ))}
  </div>
</div>

    </div>
  )
}
