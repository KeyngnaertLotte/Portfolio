import { Link } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default () => {
  const [selectedYear, setSelectedYear] = useState(2023)
  const [pauseTime, setPauseTime] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      if (pauseTime) {
        setSelectedYear((prev) => (prev === 2017 ? 2023 : prev - 1))
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [pauseTime])



  const handleRadioChange = (value: any, textColor: any) => {
    setSelectedYear(value)
    console.log('Selected Year:', value)
    console.log('Text Color:', textColor)
  }
 

  const jobs = [
    {
      year: [2023],
      job: 'Administratief bediende - studentenjob',
      company: 'Cid Lines, Ieper',
      description:
        'Enkele weken in de zomer. Ophalen van gevraagde info van producten uit een Excel/server/database en plaatsen in een overzichtelijke Excel.',
    },
    {
      year: [2023],
      job: 'Onderhoud - studentenjob',
      company: 'Gemeente Zonnebeke, Zonnebeke',
      description:
        "Enkele weken in de zomer. Het poetsen van OC zalen, leefkeukens, bureau's, enz.",
    },
    {
      year: [2018, 2019, 2023],
      job: 'Administratief bediende - studentenjob',
      company: 'Vandelanotte, Kortrijk',
      description:
        'Enkele weken in de zomer. Inscannen van documenten en plaatsen in de correcte map, en nieuwe klanten in het portaal plaatsen.',
    },
    {
      year: [2020, 2021, 2022],
      job: 'Onderhoud - studentenjob',
      company: 'Huize Zonnelied, Ieper',
      description:
        'Enkele weken in de zomer. Het poetsen van kamers, gangen, ramen, leefruimtes, enz.',
    },
    {
      year: 2020,
      job: 'Graphic Designer - stage',
      company: 'Impressionant, Ieper',
      description:
        "2 weken in maart. Vroeg gestopt door corona. Logo's ontwerpen, video's maken in After Effects, enz.",
    },
    {
      year: 2017,
      job: 'Oppassen',
      company: 'Diversen, Westhoek',
      description: 'Leeftijden van 1 jaar tot 12 jaar.',
    },
  ]

  const years = [2023, 2022, 2021, 2020, 2019, 2018, 2017]

  return (
    <div className="flex h-full w-full  items-center justify-center pt-4 font-body text-white">
      <div className="grid-rows-10 grid h-screen tablet:h-full w-[20%]  justify-items-start web:gap-0 gap-x-2">
        <div className="col-span-1 col-start-1 row-start-1 row-end-9 w-2 justify-self-center rounded-full bg-[#B27F00]"></div>
        <div className="col-span-1 col-start-1 row-span-1 row-start-2 h-4 w-4 justify-self-center rounded-full bg-[#B27F00]"></div>
        <div className="col-span-1 col-start-1 row-span-1 row-start-3  h-4 w-4 justify-self-center rounded-full bg-[#B27F00]"></div>
        <div className="col-span-1 col-start-1 row-span-1 row-start-4 h-4 w-4 justify-self-center rounded-full bg-[#B27F00]"></div>
        <div className="col-span-1 col-start-1 row-span-1 row-start-5 h-4 w-4 justify-self-center rounded-full bg-[#B27F00]"></div>
        <div className="col-span-1 col-start-1 row-span-1 row-start-6 h-4 w-4 justify-self-center rounded-full bg-[#B27F00]"></div>
        <div className="col-span-1 col-start-1 row-span-1 row-start-7 h-4 w-4 justify-self-center rounded-full bg-[#B27F00]"></div>
        <div className="col-span-1 col-start-1 row-span-1 row-start-8 h-4 w-4 justify-self-center rounded-full bg-[#B27F00]"></div>

        {years.map(
          (year, index) => (
            <label
              key={index}
              className={`row-span-1 cursor-pointer font-bold row-start-${
                index + 2
              } col-span-1 col-start-2 self-start ${
                selectedYear === year ? 'text-[#B27F00]' : ''
              }`}
            >
              <input
                type="radio"
                value={year}
                className="sr-only"
                onChange={ ()=> handleRadioChange(year, '#B27F00')}
                onClick={()=> setPauseTime(false)}
                checked={selectedYear === year}
              />
              <span className="">{(year === 2017 ? '2018 - heden' : year)}</span>
            </label>
          ),
        )}
      </div>

      <div className="h-full w-[60%] tablet:w-[40%]">
        <div className="flex h-full w-full flex-col items-start justify-center gap-6 pl-6 tablet:pl-0">
          {jobs.map(
            (job, index) =>
              (Array.isArray(job.year)
                ? job.year.includes(selectedYear)
                : job.year === selectedYear) && (
                <div key={index} className="mb-4">
                  <p className="font-bold">{job.job}</p>
                  <p>{job.company}</p>
                  <p className="text-sm text-zinc-500">{job.description}</p>
                </div>
              ),
          )}
        </div>
      </div>
    </div>
  )
}
