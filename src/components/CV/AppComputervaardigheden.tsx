import { useState } from 'react'
import { Languages, Code2, Paintbrush, LayoutGrid, Layout } from 'lucide-react'

export default () => {
  return (
    // <div className="flex h-full w-11/12 flex-col items-center text-white">
    //   <h2 className=" m-8 text-center font-heading text-4xl font-medium">
    //     Computervaardigheden & Taalkennis
    //   </h2>
    //   <div className="flex h-auto w-3/5 flex-wrap justify-center">
    //     <div className="m-5 h-52 w-2/5 rounded p-5 shadow shadow-accent">
    //       <h3 className="col-span-2 mb-5 flex flex-row items-center gap-2 font-heading text-2xl font-medium">
    //         <Languages className="stroke-white" />
    //         Taalkennis
    //       </h3>
    //       <div className='grid grid-cols-2'>
    //         <p className="col-span-full  font-body">
    //           Nederlands (moedertaal)
    //         </p>
    //         <p className="col-start-1 row-start-3 mb-4 font-body font-light">
    //           vloeiend
    //         </p>
    //         <p className="col-start-1 row-start-4 font-body">Engels</p>
    //         <p className="col-start-1 row-start-5 font-body font-light">
    //           vloeiend
    //         </p>
    //         <p className="col-start-2 row-start-4 font-body">Frans</p>
    //         <p className="col-start-2 row-start-5 font-body font-light">
    //           basis
    //         </p>
    //       </div>
    //     </div>
    //     <div className="m-5 h-52 w-2/5 rounded p-5 shadow shadow-accent">
    //       <h3 className="mb-5 flex  flex-row items-center gap-2 font-heading text-2xl font-medium">
    //         <Code2 className="stroke-white" />
    //         Codeertalen
    //       </h3>
    //       <p className="font-body">
    //         Html, css, Javascript, Typescript, Python, C#, Typescript, SQL en
    //         beetje C++
    //       </p>
    //     </div>
    //     <div className="m-5 h-52 w-2/5 rounded p-5 shadow shadow-accent">
    //       <h3 className="mb-5 flex  flex-row items-center gap-2 font-heading text-2xl font-medium">
    //         <Paintbrush className="stroke-white" />
    //         Adobe Apps
    //       </h3>
    //       <p className="font-body">
    //         Photoshop, Illustrator, Indesign, After Effects, Xd, Premiere Pro
    //       </p>
    //     </div>
    //     <div className="m-5 h-52 w-2/5 rounded p-5 shadow shadow-accent">
    //       <h3 className="mb-5 flex  flex-row items-center gap-2 font-heading text-2xl font-medium">
    //         <LayoutGrid className="stroke-white" />
    //         Andere Apps
    //       </h3>
    //       <p className="font-body">
    //         Visual Studio Code, Visual Studio, Atom, MySQL, Atom, Word, Excel,
    //         PowerPoint
    //       </p>
    //     </div>
    //   </div>
    // </div>
    
    <div className="flex h-full flex-col items-center text-white mt-10">
      <h2 className=" text-center font-heading text-[1.7rem] font-medium leading-8">
        Computervaardigheden & Taalkennis
      </h2>
      <div className="flex h-full w-full flex-col justify-center items-center">
        <div className="h-fit w-full p-2 border-b-2 border-accent">
          <h3 className="col-span-2 mb-1 flex flex-row items-center gap-2 font-heading text-2xl font-medium">
            <Languages className="stroke-white" />
            Taalkennis
          </h3>
          <div className='grid grid-cols-2'>
            <p className="col-span-full  font-body">
              Nederlands (moedertaal)
            </p>
            <p className="col-start-1 row-start-3 mb-2 font-body font-light">
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
        <div className="h-fit w-full p-4 border-b-2 border-accent">
          <h3 className="mb-2 flex  flex-row items-center gap-4 font-heading text-2xl font-medium">
            <Code2 className="stroke-white" />
            Codeertalen
          </h3>
          <p className="font-body">
            Html, css, Javascript, Typescript, Python, C#, Typescript, SQL en
            beetje C++
          </p>
        </div>
        <div className="h-fit w-full p-4 border-b-2 border-accent">
          <h3 className="mb-2 flex  flex-row items-center gap-4 font-heading text-2xl font-medium">
            <Paintbrush className="stroke-white" />
            Adobe Apps
          </h3>
          <p className="font-body">
            Photoshop, Illustrator, Indesign, After Effects, Xd, Premiere Pro
          </p>
        </div>
        <div className="h-fit w-full p-4 border-b-2 border-accent">
          <h3 className="mb-2 flex  flex-row items-center gap-4 font-heading text-2xl font-medium">
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
