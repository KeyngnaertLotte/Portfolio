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
    <div className="grid grid-cols-2 h-full w-full web:block web:relative">
      <div className="row-start-1 col-start-1 flex flex-row items-center self-start web:absolute web:left-[13%] web:top-0 web:items-end">
        <img  src={arrowRight} alt="een pijl die vanboven start en naar rechts wijst" className='w-1/4 tablet:w-[15%] web:w-1/4'/>
        <p className='text-white font-special ml-4 text-2xl tracking-widest self-end'>Mijn naam</p>
      </div>
      <div onMouseEnter={() => handleHover(1)} onMouseLeave={() => handleHover(0)} className='row-start-6 col-span-2 z-10 h-fit relative text-center tablet:w-3/4 tablet:row-start-5 tablet:justify-self-center web:absolute web:w-1/4 web:bottom-0 web:right-0'>
          <img src={books} alt="een tekening van enkele boeken op een plank" className={`w-full ${hover === 1 ? 'blur-xs' : 'blur-none'}`}/>
        <div className={`absolute top-1/2 w-full  ${hover === 1 ? 'opacity-100' : 'opacity-0'}`}>
          <p className='text-center font-special text-xl tracking-widest text-white'>Hobby: engelstalige boeken lezen</p>
        </div>
      </div>
      <div onMouseEnter={() => handleHover(2)} onMouseLeave={() => handleHover(0)} className='row-start-4 col-start-1 w-4/5 tablet:w-1/2 rotate-[18deg] z-10 p-4 tablet:row-start-2 tablet:col-start-2 tablet:justify-self-center tablet:p-0 web:absolute web:w-[13%] web:top-[7%] web:right-[5%] '>
        <img src={music} alt="een tekening van een koptelefoon waar muzieknoten uit komt" className={`${hover === 2 ? 'blur-xs brightness-50 web:brightness-25' : 'blur-none'}`}/>
        <div className={`absolute top-1/3 w-full ${hover === 2 ? 'opacity-100' : 'opacity-0'}`}>
          <p className='text-center font-special text-xl tracking-widest text-white'>Hobby: muziek luisteren</p>
        </div>
      </div>
      <div onMouseEnter={() => handleHover(3)} onMouseLeave={() => handleHover(0)} className='row-start-2 col-start-1 w-4/5 tablet:w-3/5 rotate-[-18deg] z-10 p-4 web:absolute web:w-1/6 web:top-[17%] web:left-[15%]' >
          <img src={photograpy} alt="een tekening van 2 handen met een camera die een foto neemt" className={`${hover === 3 ? 'blur-xs brightness-50' : 'blur-none'} `}/>
        <div className={`absolute top-1/3 w-full ${hover === 3 ? 'opacity-100' : 'opacity-0'}`}>
          <p className='text-center font-special text-xl tracking-widest text-white'>Hobby: foto's maken</p>
        </div>
      </div>
      <div className='hidden web:absolute web:inset-x-0 web:bottom-0 web:flex web:flex-col web:items-center web:gap-2'>
        <p className='text-white font-special text-2xl tracking-widest'>Dit ben ik</p>
        <img src={arrowDown} alt="een pijl die van boven naar beneden wijst" className='w-[2%]'/>
        <img src={myPhoto} alt="een zelfportret" className='w-[30%]'/>
      </div>
      <div className='row-start-3 col-span-2 flex flex-row justify-end web:absolute web:bottom-[13%] web:left-[3%] web:justify-start'>
        <Smile className='stroke-white m-3'/>
        <p className='text-white font-special text-xl tracking-widest w-1/2 web:w-2/5 web:p-0 p-2 text-justify web:text-left'>zeer gedreven, goed luisterend oor, een doorzetter, zorgzaam, denkt out-of-the-box</p>
      </div>
      <div className='row-start-5 col-span-2 flex flex-row items-center justify-center py-2 tablet:p-0 tablet:col-span-1 tablet:row-start-4 web:absolute web:inset-y-0 web:right-[3%]'>
        <Frown className='stroke-white m-3'/>
        <p className='text-white font-special text-xl tracking-widest w-3/4'>vlug afgeleid, introvert, overthinker</p>
      </div>
    </div>
  )
}
