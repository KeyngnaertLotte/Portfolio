import { Link } from 'lucide-react'
import athenaHeule from '../../assets/img/AthenaCampusHeule.jpg'

export default () => {
  return (
    // <div className="text-white grid grid-cols-2 my-8 h-full w-11/12 gap-y-6 gap-x-24 items-center content-center">
    //   <h2 className="font-heading text-4xl font-medium col-span-2 justify-self-center">Opleiding</h2>
    //     <div className='col-span-1 text-right justify-items-end'>
    //         <h3 className="font-heading text-2xl font-medium">Multimedia Visueel</h3>
    //         <p className="font-light font-body mb-4">Afgestudeerd in 2020</p>
    //         <a href="https://www.athena-school.be/onze-school/campus-heule" target="_blank" rel="noreferrer">Athena in Heule</a>
    //     </div>
    //     <img title='Afbeelding gemaakt op Athena Campus Heule' src={athenaHeule} alt="Foto op Athena campus Heule By me" className='col-span-1 row-span-2 m-4 w-8/12 shadow-md shadow-accent rounded'/>
    //     <div className='col-span-1 text-right justify-items-end'>
    //         <h3 className="font-heading font-medium text-2xl">Multimedia Creative Technologie</h3>
    //         <p className="font-light font-body mb-4">2020 - heden</p>
    //         <a href="https://mct.be/" target="_blank" rel="noreferrer">Howest in Kortrijk</a>
    //     </div>
    // </div>
    <div className="text-white grid grid-cols-1 h-full mt-10 tablet:grid-cols-2 tablet:grid-rows-tablet tablet:h-4/5 items-center">
      <h2 className="font-heading text-3xl font-medium justify-self-center tablet:col-span-2">Opleiding</h2>
        <div className='row-start-2 text-right my-3 tablet:my-1'>
            <h3 className="font-heading text-2xl font-medium">Multimedia Visueel</h3>
            <p className="font-light font-body mb-4">Afgestudeerd in 2020</p>
            <a href="https://www.athena-school.be/onze-school/campus-heule" target="_blank" rel="noreferrer" className='flex flex-row gap-2 justify-end font-body italic'><Link className='stroke-white w-4'/> Athena in Heule</a>
        </div>
        <img title='Afbeelding gemaakt op Athena Campus Heule' src={athenaHeule} alt="Foto op Athena campus Heule By me" className='w-1/2 mb-6 rounded-lg justify-self-center shadow-md shadow-accent tablet:row-span-2 tablet:col-start-2 tablet:self-center tablet:w-3/5 tablet:mb-0'/>
        <div className='row-start-3 my-3 tablet:text-right tablet:my-1'>
            <h3 className="font-heading font-medium text-2xl">Multimedia & Creative Technologie</h3>
            <p className="font-light font-body mb-4">2020 - heden</p>
            <a href="https://mct.be/" target="_blank" rel="noreferrer" className='flex flex-row gap-2 font-body italic tablet:justify-end'><Link className='stroke-white w-4'/> Howest in Kortrijk</a>
        </div>
    </div>
  )
}
