import { Smile, Frown } from 'lucide-react'
import arrowRight from '../../assets/svg/arrowMyName.svg'
import books from '../../assets/img/books.png'
import music from '../../assets/img/music.png'
import photograpy from '../../assets/img/photography.png'
import arrowDown from '../../assets/svg/arrowThisIsMe.svg'
import myPhoto from '../../assets/img/Foto_LotteKeyngnaert.png'
import { useState } from 'react'


export default () => {
  const [hover, setHover] = useState(0)

  const handleHover = (id: number) => {
    setHover(id)
    console.log(hover)
  }

  return (
    // <div className="relative h-full w-full ">
    //   <div className="absolute left-[13%] top-0 flex flex-row items-end">
    //     <img  src={arrowRight} alt="" />
    //     <p className='text-white font-special ml-4 text-2xl tracking-widest'>Mijn naam</p>
    //   </div>
    //   <div onMouseEnter={() => handleHover(1)} onMouseLeave={() => handleHover(0)} className='absolute w-1/4 bottom-0 right-0 z-10'>
    //       <img src={books} alt="" className={`${hover === 1 ? 'blur-xs' : 'blur-none'}`}/>
    //     <div className={`absolute inset-0  flex justify-center items-center ${hover === 1 ? 'opacity-100' : 'opacity-0'}`}>
    //       <p className='text-center font-special text-xl tracking-widest text-white'>Hobby: engelstalige boeken lezen</p>
    //     </div>
    //   </div>
    //   <div onMouseEnter={() => handleHover(2)} onMouseLeave={() => handleHover(0)} className='absolute w-[13%] top-[7%] right-[5%] origin-center rotate-[18deg] z-10'>
    //     <img src={music} alt="" className={`${hover === 2 ? 'blur-xs brightness-25' : 'blur-none'}`}/>
    //     <div className={`absolute inset-0  flex justify-center items-center ${hover === 2 ? 'opacity-100' : 'opacity-0'}`}>
    //       <p className='text-center font-special text-xl tracking-widest text-white'>Hobby: muziek luisteren</p>
    //     </div>
    //   </div>
    //   <div onMouseEnter={() => handleHover(3)} onMouseLeave={() => handleHover(0)} className='absolute w-1/6 top-[17%] left-[15%] origin-center rotate-[-18deg] z-10'>
    //       <img src={photograpy} alt="" className={`${hover === 3 ? 'blur-xs brightness-25' : 'blur-none'} `}/>
    //     <div className={`absolute inset-0  flex justify-center items-center ${hover === 3 ? 'opacity-100' : 'opacity-0'}`}>
    //       <p className='text-center font-special text-xl tracking-widest text-white'>Hobby: foto's maken</p>
    //     </div>
    //   </div>
    //   <div className='absolute inset-x-0 bottom-0 flex flex-col items-center gap-2'>
    //     <p className='text-white font-special text-2xl tracking-widest'>Dit ben ik</p>
    //     <img src={arrowDown} alt="" className='w-[2%]'/>
    //     <img src={myPhoto} alt="" className='w-[30%]'/>
    //   </div>
    //   <div className='absolute bottom-[13%] left-[3%] flex flex-row '>
    //     <Smile className='stroke-white m-3'/>
    //     <p className='text-white font-special text-xl tracking-widest w-1/3'>zeer gedreven, goed luisterend oor, een doorzetter, zorgzaam, denkt out-of-the-box</p>
    //   </div>
    //   <div className='absolute inset-y-0 right-[3%] flex flex-row items-center'>
    //     <Frown className='stroke-white m-3'/>
    //     <p className='text-white font-special text-xl tracking-widest w-3/4'>vlug afgeleid, introvert, overthinker</p>
    //   </div>
    // </div>
    <div className="grid grid-cols-2 h-full w-full ">
      <div className="row-start-1 col-start-1 flex flex-row items-center self-start ">
        <img  src={arrowRight} alt="" className='w-1/4 tablet:w-[15%]'/>
        <p className='text-white font-special ml-4 text-2xl tracking-widest  self-end'>Mijn naam</p>
      </div>
      <div onMouseEnter={() => handleHover(1)} onMouseLeave={() => handleHover(0)} className='row-start-6 col-span-2 z-10 h-fit relative text-center tablet:w-3/4 tablet:row-start-5 tablet:justify-self-center'>
          <img src={books} alt="" className={`w-full ${hover === 1 ? 'blur-xs' : 'blur-none'}`}/>
        <div className={`absolute top-1/2 w-full  ${hover === 1 ? 'opacity-100' : 'opacity-0'}`}>
          <p className='text-center font-special text-xl tracking-widest text-white'>Hobby: engelstalige boeken lezen</p>
        </div>
      </div>
      <div onMouseEnter={() => handleHover(2)} onMouseLeave={() => handleHover(0)} className='row-start-4 col-start-1 w-4/5 tablet:w-1/2 rotate-[18deg] z-10 p-4 tablet:row-start-2 tablet:col-start-2 tablet:justify-self-center tablet:p-0'>
        <img src={music} alt="" className={`${hover === 2 ? 'blur-xs brightness-50' : 'blur-none'}`}/>
        <div className={`absolute top-1/3 w-full ${hover === 2 ? 'opacity-100' : 'opacity-0'}`}>
          <p className='text-center font-special text-xl tracking-widest text-white'>Hobby: muziek luisteren</p>
        </div>
      </div>
      <div onMouseEnter={() => handleHover(3)} onMouseLeave={() => handleHover(0)} className='row-start-2 col-start-1 w-4/5 tablet:w-3/5 rotate-[-18deg] z-10 p-4' >
          <img src={photograpy} alt="" className={`${hover === 3 ? 'blur-xs brightness-50' : 'blur-none'} `}/>
        <div className={`absolute top-1/3 w-full ${hover === 3 ? 'opacity-100' : 'opacity-0'}`}>
          <p className='text-center font-special text-xl tracking-widest text-white'>Hobby: foto's maken</p>
        </div>
      </div>
      <div className='hidden'>
        <p className='text-white font-special text-2xl tracking-widest'>Dit ben ik</p>
        <img src={arrowDown} alt="" className='w-[2%]'/>
        <img src={myPhoto} alt="" className='w-[30%]'/>
      </div>
      <div className='row-start-3 col-span-2 flex flex-row justify-end '>
        <Smile className='stroke-white m-3'/>
        <p className='text-white font-special text-xl tracking-widest w-1/2  p-2 text-justify'>zeer gedreven, goed luisterend oor, een doorzetter, zorgzaam, denkt out-of-the-box</p>
      </div>
      <div className='row-start-5 col-span-2 flex flex-row items-center justify-center py-2 tablet:p-0 tablet:col-span-1 tablet:row-start-4'>
        <Frown className='stroke-white m-3'/>
        <p className='text-white font-special text-xl tracking-widest w-3/4'>vlug afgeleid, introvert, overthinker</p>
      </div>
    </div>
  )
}
