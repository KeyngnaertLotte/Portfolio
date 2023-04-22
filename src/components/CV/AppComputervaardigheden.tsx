import { useState } from 'react'
import dogGlasses from '../../assets/img/HondEnBril.jpg'
import { Languages, Code2, Paintbrush, LayoutGrid } from 'lucide-react'

export default () => {
  return (
    <div className=" grid h-screen w-11/12 grid-cols-4 content-center items-center gap-6 text-white">
      <h2 className="col-span-4 mb-8 justify-self-center font-heading text-4xl font-medium">
        Computervaardigheden & Taalkennis
      </h2>
      <div className="grid h-64 w-64 grid-cols-4 rounded-lg p-5 shadow-sm shadow-accent">
        <Languages className="col-span-1 row-start-1" />
        <h3 className="col-span-3 row-start-1 font-heading text-2xl font-medium">
          Taalkennis
        </h3>
        <div className="col-span-4 row-start-2">
          <p className="mt-4">Moedertaal: Nederlands</p>
          <p className="mb-4 font-light ">Vloeiend</p>
        </div>
        <div className="col-span-2 row-start-3">
          <p className="mt-4 ">Engels</p>
          <p className="mb-4 font-light ">Vloeiend</p>
        </div>
        <div className="col-span-2 row-start-3">
          <p className="mt-4 ">Frans</p>
          <p className="mb-4 font-light ">Weinig</p>
        </div>
      </div>
      <div className="h-64 w-64 rounded-lg p-5 shadow-sm shadow-accent grid grid-cols-4">
        <Code2 className='col-span-1 row-start-1'/>
        <h3 className="font-heading text-2xl font-medium col-span-3 row-start-1">
          Codeertalen
        </h3>
        <p className="mt-4 col-span-4 row-start-2">
          Html, Css, Javascript, Python, C#, beetje c++, React native
        </p>
      </div>
      <div className="h-64 w-64 rounded-lg p-5 shadow-sm shadow-accent">
        <Paintbrush />
        <h3 className="font-heading text-2xl font-medium">
          Adobe programma's
        </h3>
        <p className="mt-4">
          Photoshop, Illustrator, Indesign, After Effects, Xd, Premiere Pro
        </p>
      </div>
      <div className="h-64 w-64 rounded-lg p-5 shadow-sm shadow-accent">
        <LayoutGrid />
        <h3 className="font-heading text-2xl font-medium">
          Andere programma's
        </h3>
        <p className="mt-4">
          Visual studio code, Visual studio, Atom, Word, Excel, Powerpoint,
          MySQL
        </p>
      </div>
      {/* <img src={dogGlasses} alt="" className='w-10/12  justify-self-center rounded '/>
      <div className='justify-self-start mr-10'>
        <h3 className="font-heading font-medium text-2xl">Computervaardigheden</h3>
        <p className='mt-4 '>Codeertalen</p>
        <p className="font-light mb-4">Html, Css, Javascript, Python, C#, beetje c++, React native</p>
        <p className='mt-4'>Adobe programma's</p>
        <p className="font-light mb-4">Photoshop, Illustrator, Indesign, After Effects, Xd, Premiere Pro</p>
        <p className='mt-4'>Andere programma's</p>
        <p className="font-light mb-4">Visual studio code, Visual studio, Atom, Word, Excel, Powerpoint, MySQL</p>
      </div> */}
    </div>
  )
}
