import AppNavigation from '../components/AppNavigation'
import firstProject from '../../src/assets/img/firstProtoProject.jpg'
import doubleExposure from '../../src/assets/img/DoubleExposure.jpg'
import projectOne from '../../src/assets/img/ProjectOne.jpg'
import productShowcase from '../../src/assets/img/ProductShowcase_Moment.jpg'
import hybridIceBowl from '../../src/assets/img/IceBowl.jpg'

export default function Portfolio() {
  const print = () => {
    console.log('test')
  }

  return (
    <main className="flex h-screen w-full flex-col items-center bg-black p-4">
      <div className="flex w-9/12 flex-row justify-around">
        <h1 className="w-11/12 pb-5 font-heading text-4xl font-bold text-white">
          Lotte Keyngnaert
        </h1>
        <AppNavigation />
      </div>
      {/* <div className="h-full w-full flex flex-row">
        <div className="h-full w-3/5  grid grid-cols-3  grid-rows-layout gap-6 pr-6">
        <div className="col-start-1 row-start-1 row-span-2 flex flex-col gap-y-6 bg-green-500 h-fit p-5">
            <img src={firstProject} alt="" className="rounded-2xl" onClick={print}/>
            <img src={doubleExposure} alt="" className="rounded-2xl "/>
          </div>
          <div className="col-start-2 row-start-1  bg-green-500 h-fit">
            <img src={productShowcase} alt="" className="rounded-2xl object-contain"/>
          </div>
          <div className="col-start-3 row-start-1 bg-green-500 h-fit">
            <img src={projectOne} alt="" className="rounded-2xl object-contain"/>
          </div>
          <div className="col-span-2 col-start-2 row-start-2 bg-green-500 h-fit">
            <img src={hybridIceBowl} alt="" className="rounded-2xl object-contain"/>
          </div>
        </div>
        <div className="h-full w-2/5 border-l-2 border-accent p-6"></div>
      </div> */}
      <div className="flex h-full w-full flex-row items-center">
        <div className="grid grid-cols-3  w-3/5 pr-6">
          <div className="col-start-1 col-span-1 flex flex-col gap-6 items-end ">
            <img
              src={firstProject}
              alt=""
              className="rounded-2xl w-[80%]"
              onClick={print}
            />
            <img src={doubleExposure} alt="" className="rounded-2xl w-[80%]" />
          </div>
          <div className='col-start-2 col-span-2 flex flex-col gap-6 items-center '>
            <div className='flex flex-row gap-6 w-[40%] items-center justify-center'>
              <img src={productShowcase} alt="" className='rounded-2xl '/>
              <img src={projectOne} alt="" className='rounded-2xl'/>
            </div>
            <div className='w-[85%]'>
              <img src={hybridIceBowl} alt="" className='rounded-2xl'/>
            </div>
          </div>
        </div>
        <div className="h-full w-2/5 border-l-2 border-accent p-6"></div>
      </div>
    </main>
  )
}
