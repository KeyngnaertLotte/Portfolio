import { useState } from 'react'
import dogGlasses from '../../assets/img/HondEnBril.jpg'
import { Languages, Code2, Paintbrush, LayoutGrid, Layout } from 'lucide-react'

export default () => {
  return (
    // <div className=" grid h-screen w-11/12 grid-cols-2 place-content-center  gap-6 text-white">
    //   <h2 className="col-span-full mb-8 justify-self-center font-heading text-4xl font-medium">
    //     Computervaardigheden & Taalkennis
    //   </h2>
    //   <div className='grid grid-cols-2 col-start-1 row-start-2 w-1/2  justify-self-end'>
    //     <h3 className="font-heading text-2xl col-span-2 font-medium flex flex-row gap-2 mb-5"><Languages className='stroke-white'/>Taalkennis</h3>
    //     <div className='col-span-2 mb-5'>
    //       <p className="font-body">Nederlands (moedertaal)</p>
    //       <p className="font-body font-light">vloeiend</p>
    //     </div>
    //     <div className=' col-start-1'>
    //       <p className="font-body">Engels</p>
    //       <p className="font-body font-light">vloeiend</p>
    //     </div>
    //     <div className=' col-start-2'>
    //       <p className="font-body">Frans</p>
    //       <p className="font-body font-light">basis</p>
    //     </div>

    //   </div>
    //   <div className='col-start-1 row-start-3 w-1/2 justify-self-end'>
    //     <h3 className="font-heading text-2xl  font-medium flex flex-row gap-2 mb-5"><Paintbrush className='stroke-white'/>Adobe Apps</h3>
    //     <p>Photoshop, Illustrator, Indesign, After Effects, Xd, Premiere Pro</p>

    //   </div>
    //   <div className='col-start-2 row-start-2 w-1/2'>
    //     <h3 className="font-heading text-2xl font-medium flex flex-row gap-2 mb-5"><Code2 className='stroke-white'/>Codeertalen</h3>
    //     <p>Html, css, Javascript, Typescript, Python, C#, Typescript, SQL en beetje C++</p>

    //   </div>
    //   <div className='col-start-2 row-start-3 w-1/2'>
    //     <h3 className="font-heading text-2xl  font-medium flex flex-row gap-2 mb-5"><LayoutGrid className='stroke-white'/>Andere Apps</h3>
    //     <p>Visual Studio Code, Visual Studio, Atom, MySQL, Atom, Word, Excel, PowerPoint</p>

    //   </div>
    // </div>
    // <div className='h-full w-11/12 mt-8 text-white flex flex-col items-center'>
    //   <h2 className='text-center w-full mb-8 font-heading text-4xl font-medium'>Computervaardigheden & Taalkennis</h2>
    //   <div className=' w-1/2 grid grid-cols-2 gap-8'>
    //     <div className='grid grid-cols col-start-1 row-start-1 p-3'>
    //       <h3 className="font-heading text-2xl col-span-2 font-medium gap-2 mb-5 flex flex-row items-center"><Languages className='stroke-white'/>Taalkennis</h3>
    //       <p className='font-body col-start-1 row-start-2'>Nederlands (moedertaal)</p>
    //       <p className="font-body font-light col-start-1 row-start-3 mb-4">vloeiend</p>
    //       <p className='font-body col-start-1 row-start-4'>Engels</p>
    //       <p className="font-body font-light col-start-1 row-start-5">vloeiend</p>
    //       <p className='font-body col-start-2 row-start-4'>Frans</p>
    //       <p className="font-body font-light col-start-2 row-start-5">basis</p>
    //     </div>
    //     <div className='col-start-1 row-start-2 p-3'>
    //       <h3 className="font-heading text-2xl  font-medium gap-2 mb-5 flex flex-row items-center"><Paintbrush className='stroke-white'/>Adobe Apps</h3>
    //       <p className='font-body'>Photoshop, Illustrator, Indesign, After Effects, Xd, Premiere Pro</p>
    //     </div>
    //     <div className='col-start-2 row-start-1 p-3'>
    //       <h3 className="font-heading text-2xl  font-medium gap-2 mb-5 flex flex-row items-center"><Code2 className='stroke-white'/>Codeertalen</h3>
    //       <p className='font-body'>Html, css, Javascript, Typescript, Python, C#, Typescript, SQL en beetje C++</p>
    //     </div>
    //     <div className='col-start-2 row-start-2 p-3'>
    //       <h3 className="font-heading text-2xl  font-medium gap-2 mb-5 flex flex-row items-center"><LayoutGrid className='stroke-white'/>Andere Apps</h3>
    //       <p className='font-body'>Visual Studio Code, Visual Studio, Atom, MySQL, Atom, Word, Excel, PowerPoint</p>
    //     </div>
    //   </div>
    // </div>
    <div className="flex h-full w-11/12 flex-col items-center text-white">
      <h2 className=" m-8 text-center font-heading text-4xl font-medium">
        Computervaardigheden & Taalkennis
      </h2>
      <div className="flex h-auto w-3/5 flex-wrap justify-center">
        <div className="m-5 h-52 w-2/5 rounded p-5 shadow shadow-accent">
          <h3 className="col-span-2 mb-5 flex flex-row items-center gap-2 font-heading text-2xl font-medium">
            <Languages className="stroke-white" />
            Taalkennis
          </h3>
          <div className='grid grid-cols-2'>
            <p className="col-span-full  font-body">
              Nederlands (moedertaal)
            </p>
            <p className="col-start-1 row-start-3 mb-4 font-body font-light">
              vloeiend
            </p>
            <p className="col-start-1 row-start-4 font-body">Engels</p>
            <p className="col-start-1 row-start-5 font-body font-light">
              vloeiend
            </p>
            <p className="col-start-2 row-start-4 font-body">Frans</p>
            <p className="col-start-2 row-start-5 font-body font-light">
              basis
            </p>
          </div>
        </div>
        <div className="m-5 h-52 w-2/5 rounded p-5 shadow shadow-accent">
          <h3 className="mb-5 flex  flex-row items-center gap-2 font-heading text-2xl font-medium">
            <Code2 className="stroke-white" />
            Codeertalen
          </h3>
          <p className="font-body">
            Html, css, Javascript, Typescript, Python, C#, Typescript, SQL en
            beetje C++
          </p>
        </div>
        <div className="m-5 h-52 w-2/5 rounded p-5 shadow shadow-accent">
          <h3 className="mb-5 flex  flex-row items-center gap-2 font-heading text-2xl font-medium">
            <Paintbrush className="stroke-white" />
            Adobe Apps
          </h3>
          <p className="font-body">
            Photoshop, Illustrator, Indesign, After Effects, Xd, Premiere Pro
          </p>
        </div>
        <div className="m-5 h-52 w-2/5 rounded p-5 shadow shadow-accent">
          <h3 className="mb-5 flex  flex-row items-center gap-2 font-heading text-2xl font-medium">
            <LayoutGrid className="stroke-white" />
            Andere Apps
          </h3>
          <p className="font-body">
            Visual Studio Code, Visual Studio, Atom, MySQL, Atom, Word, Excel,
            PowerPoint
          </p>
        </div>
      </div>
    </div>
  )
}
