import AppNavigation from '../components/AppNavigation'
import firstProject from '../../src/assets/img/firstProtoProject.jpg'
import doubleExposure from '../../src/assets/img/DoubleExposure.jpg'
import projectOne from '../../src/assets/img/ProjectOne.jpg'
import productShowcase from '../../src/assets/img/ProductShowcase_Moment.jpg'
import hybridIceBowl from '../../src/assets/img/IceBowl.jpg'
import hybridTinny from '../../src/assets/img/Tinny.jpg'
import productShowcaseVideo from '../../src/assets/video/ProductShowcase.mp4'
import { Link, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

export default function Portfolio() {
  const [active, setActive] = useState(0)
  const info = [
    {
      title: 'Projects',
      subtitle: 'Klik op een foto om meer te weten over elk project.',
      link: 'https://www.instagram.com/__f_o_t_o_g_r_a_f_i_a__/',
      linkText: 'Klik hier om meer van mijn zelfgemaakte foto\'s te zien.',
      extra: <a href={'https://www.instagram.com/__f_o_t_o_g_r_a_f_i_a__/'} target="_blank" rel="noreferrer" className='flex flex-row gap-2 font-body italic'><Link className='stroke-white w-4'/> Klik hier om meer van mijn zelfgemaakte foto's te zien.</a>,
    },
    {
      title: 'Stop it - Spel',
      subtitle: 'Gebruik gemaakt gemaakt van Arduino',
      description: <p className='font-body'>Dit was één van de eindopdrachten die we moesten maken in het eerste semester. <br/> <br/> Er zijn twee knoppen. De ene legt het spel aan en uit en het andere wordt gebruikt om het spel te spelen. Wanneer je het spel aanlegt zie je een ledje branden, het gekozen ledje, voor enkele seconden. Daarna gaan de ledjes heen en weer. Het is nu de bedoeling om telkens wanneer het gekozen ledje brand op de spelknop te drukken. Wanneer je mist zal je een buzzer horen en zullen alle ledjes enkele seconden flikkeren. Wanneer je correct bent zal je ook een buzzer horen en zullen de ledjes voor enkele seconden in een snel tempo heen en weer gaan. Je begint met een score van 3 en bij iedere correcte klik gaat je score omhoog en bij iedere foute klik gaat de score omlaag. Bij 6 punten ben je gewonnen en bij 0 punten heb je verloren. <br/> <br/> De behuizing is gemaakt van een oude snoepdoos.</p> ,
    },
    {
      title: 'Exposure - Photoshop',
      subtitle: 'Gebruik gemaakt gemaakt van Adobe Photoshop',
      description: <p className='font-body'>Dit was een opdracht van het 6de middelbaar.<br/><br/>
      De bedoeling van deze opdracht was om van een portretfoto het gezicht onherkenbaar te maken terwijl het silhouette wel duidelijk herkenbaar bleef.
      <br/><br/>
      Ik vond het een leuk idee om buiten het silhouette een iets rustigere/koudere omgeving te creeeren en in het silhoutte een drukkere/warme omgeving met een vulkaan.</p> ,
    },
    {
      title: 'Productshowcase',
      subtitle: 'Gebruik gemaakt van Cinema 4D',
      description: <p className='font-body'>Voor de opdracht ProductShowCase werd gevraagd om het eerste object dat we vonden in een 3d tekenprogramma (Cinema 4D) na te maken. Mijn object was een doosje van pepermuntjes.</p> ,
      extra: <video src={productShowcaseVideo} controls className='rounded-md mx-auto tablet:w-[70%] web:w-full'/>,
    },
    {
      title: 'Nightlight',
      subtitle: 'Gebruik gemaakt van Visual Studio Code en MySQL',
      description: <p className='font-body'>Op het einde van het eerste jaar MCT kregen we de opdracht om een project te maken aan de hand van alles wat we tot nu toe geleerd hebben en meer. Mijn project is een NightLight. Het is een handig product voor wanneer je in de nacht bijvoorbeeld uit bed wil stappen maar niet eerst 5minuten achter de licht knop wil zoeken in het donker. Je stapt gewoon uit bed en de ledstrip gaat aan. Dit werkt alleen als het donker is maar er is ook mogelijkheid om de ledstrip manueel aan en uit te leggen. Via een website die alleen te bereiken is via het ip adres op het schermpje.
      <br/><br/>
      Voor dit project heb ik gewerkt met html, css, python, javascript en SQL.</p> ,
      extra: <a href={'https://www.instructables.com/NightLight-1/'} target="_blank" rel="noreferrer" className='flex flex-row gap-2 font-body italic'><Link className='stroke-white w-4'/>Klik hier voor meer details.</a>,
    },
    {
      title: 'Hybrid - Photoshop',
      subtitle: 'Gebruik gemaakt van Adobe Photoshop',
      description: <p className='font-body'>De bedoeling was om een realistische hybride te ontwerpen door gebruik te maken van meerdere afbeeldingen van
      dieren. <br/><br/>De Ice Bowl is een mix van een ijsbeer en een uil. En de foto hieronder is een mix van een konijn en een tijger.</p> ,
      extra: <img src={hybridTinny} alt="" className='w-2/3 rounded-md mx-auto tablet:w-1/2 web:w-2/3 '/>
    }
  ]
  const print = (project : number) => {
    console.log('test')
    if (project === active){
      setActive(0)
    }
    else{
      setActive(project)
    }
  }
  const isMobile = useMediaQuery({ query: '(max-width: 840px)' })
  const [showNav, setShowNav] = useState(false)

  const showNavigation = () => {
    if (showNav){
      setShowNav(false)
    }
    else{
      setShowNav(true)
    }
  }

  return (
    // <main className="flex h-screen w-full flex-col items-center bg-black p-4">
    //   <div className="flex w-9/12 flex-row justify-around">
    //     <h1 className="w-11/12 pb-5 font-heading text-4xl font-bold text-white">
    //       Lotte Keyngnaert
    //     </h1>
    //     <AppNavigation />
    //   </div>
    //   <div className="flex h-full w-full flex-row items-center">
    //     <div className="grid grid-cols-3  w-3/5 pr-6">
    //       <div className="col-start-1 col-span-1 flex flex-col gap-6 items-end ">
    //         <img src={firstProject} alt="ledjes en knopjes in een snoepdoos" className={`rounded-2xl w-[80%] ${active === 1 ? 'border-accent border-[3px] opacity-100' :  active === 0 ? 'border-0 opacity-100' : 'border-0 opacity-50'}`} onClick={() => print(1)}/>
    //         <img src={doubleExposure} onClick={() => print(2)} alt="zelfportret met speciale achtergrond en met een speciale foto als omtrek van mijn gezicht" className={`rounded-2xl w-[80%] ${active === 2 ? 'border-accent border-[3px] opacity-100' :  active === 0 ? 'border-0 opacity-100' : 'border-0 opacity-50'}`}/>
    //       </div>
    //       <div className='col-start-2 col-span-2 flex flex-col gap-6 items-center '>
    //         <div className='flex flex-row gap-6 w-[40%] items-center justify-center'>
    //           <img src={productShowcase} alt="een 3d afbeelding van een metalen doosje" onClick={() => print(3)} className={`rounded-2xl ${active === 3 ? 'border-accent border-[3px] opacity-100' :  active === 0 ? 'border-0 opacity-100' : 'border-0 opacity-50'}`}/>
    //           <img src={projectOne} alt="een bed met een groene ledstrip" onClick={() => print(4)} className={`rounded-2xl ${active === 4 ? 'border-accent border-[3px] opacity-100' :  active === 0 ? 'border-0 opacity-100' : 'border-0 opacity-50'}`}/>
    //         </div>
    //         <div className='w-[85%]'>
    //           <img src={hybridIceBowl} alt="een dier met het hoofd van een ijsbeer en het lichaam van een uil in de sneeuw" onClick={() => print(5)} className={`rounded-2xl ${active === 5 ? 'border-accent border-[3px] opacity-100' :  active === 0 ? 'border-0 opacity-100' : 'border-0 opacity-50'}`}/>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="h-full w-2/5 border-l-2 border-accent p-6 text-white flex flex-col">
    //       <h3 className="font-heading text-2xl font-medium">
    //         {info[active].title}
    //       </h3>
    //       <p className="mb-4 font-body font-light">
    //         {info[active].subtitle}
    //       </p>
    //       <div>
    //         {info[active].description ? info[active].description : ''}
    //       </div>
    //       <div className='h-full w-full flex items-end'>
    //         {info[active].extra ? info[active].extra : ''}
    //       </div>
    //     </div>
    //   </div>
    // </main>
    <main className="flex h-screen w-full flex-col items-center p-4">
      <div className={`bg-black z-20 overflow-hidden flex flex-col ${showNav ? 'translate-x-0 absolute top-0 left-0 h-screen w-screen  p-4' : 'translate-x-full none h-0 w-0  p-0'}`}>
      <button className='self-end' onClick={showNavigation}><X className='stroke-white' size={60}/></button>
      <AppNavigation />
    </div>
      <div className="flex flex-row justify-between w-full web:w-9/12 ">
        <h1 className='text-white font-heading font-bold text-4xl'>Lotte Keyngnaert</h1>
        {isMobile ? <button className='self-start' onClick={showNavigation}><Menu className='stroke-white' size={60}/></button> : <AppNavigation /> }
      </div>


      <div className="flex h-full w-full flex-col items-center text-white mt-8 web:flex-row web:w-11/12 ">
        <div className="grid grid-cols-3 w-full h-1/2 gap-6 items-center web:w-3/5 web:h-full">
          <div className="col-start-1 col-span-1 flex flex-col gap-6 items-end ">
            <img src={firstProject} alt="ledjes en knopjes in een snoepdoos" className={`rounded-2xl w-[90%] tablet:w-[70%] web:w-[80%] ${active === 1 ? 'border-accent border-[3px] opacity-100' :  active === 0 ? 'border-0 opacity-100' : 'border-0 opacity-50'}`} onClick={() => print(1)}/>
            <img src={doubleExposure} onClick={() => print(2)} alt="zelfportret met speciale achtergrond en met een speciale foto als omtrek van mijn gezicht" className={`rounded-2xl w-[90%] tablet:w-[70%] web:w-[80%] ${active === 2 ? 'border-accent border-[3px] opacity-100' :  active === 0 ? 'border-0 opacity-100' : 'border-0 opacity-50'}`}/>
          </div>
          <div className='col-start-2 col-span-2 flex flex-col gap-6 items-center '>
            <div className='flex flex-row gap-6 items-center justify-center w-[40%] tablet:w-[33%] web:w-[37%]'>
              <img src={productShowcase} alt="een 3d afbeelding van een metalen doosje" onClick={() => print(3)} className={`rounded-2xl ${active === 3 ? 'border-accent border-[3px] opacity-100' :  active === 0 ? 'border-0 opacity-100' : 'border-0 opacity-50'}`}/>
              <img src={projectOne} alt="een bed met een groene ledstrip" onClick={() => print(4)} className={`rounded-2xl ${active === 4 ? 'border-accent border-[3px] opacity-100' :  active === 0 ? 'border-0 opacity-100' : 'border-0 opacity-50'}`}/>
            </div>
            <div className='w-[85%] tablet:w-[72%] flex justify-center web:w-[80%]'>
              <img src={hybridIceBowl} alt="een dier met het hoofd van een ijsbeer en het lichaam van een uil in de sneeuw" onClick={() => print(5)} className={`rounded-2xl ${active === 5 ? 'border-accent border-[3px] opacity-100' :  active === 0 ? 'border-0 opacity-100' : 'border-0 opacity-50'}`}/>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-1/2 border-t-2 border-accent pt-6 tablet:mt-6 web:border-t-0 web:border-l-2 web:w-2/5 web:h-full web:pt-0 web:pl-6">
          <h3 className="font-heading text-2xl font-medium">
            {info[active].title}
          </h3>
          <p className="mb-4 font-body font-light">
            {info[active].subtitle}
          </p>
          <div className=''>
            {info[active].description ? info[active].description : ''}
          </div>
          <div className={`h-full w-full flex py-4 web:h-fit  web:mt-auto`}>
            {info[active].extra ? info[active].extra : ''}
          </div>
        </div>
      </div>
    </main>
  )
}
