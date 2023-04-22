import athenaHeule from '../../assets/img/AthenaCampusHeule.jpg'

export default () => {
  return (
    <div className="text-white grid grid-cols-2 my-8 h-full w-11/12 gap-6 items-center content-center">
      <h2 className="font-heading text-4xl font-medium col-span-2 justify-self-center">Opleiding</h2>
        <div className='col-span-1 text-right justify-items-end'>
            <h3 className="font-heading text-2xl font-medium">Multimedia Visueel</h3>
            <p className="font-light mb-4">Afgestudeerd in 2020</p>
            <a href="https://www.athena-school.be/onze-school/campus-heule" target="_blank" rel="noreferrer">Athena in Heule</a>
        </div>
        <img title='Afbeelding gemaakt op Athena Campus Heule' src={athenaHeule} alt="Foto op Athena campus Heule By me" className='col-span-1 row-span-2 m-4 w-8/12 justify-self-center rounded'/>
        <div className='col-span-1 text-right justify-items-end'>
            <h3 className="font-heading font-medium text-2xl">Multimedia Creative Technologie</h3>
            <p className="font-light mb-4">2020 - heden</p>
            <a href="https://mct.be/" target="_blank" rel="noreferrer">Howest in Kortrijk</a>
        </div>
    </div>
  )
}
