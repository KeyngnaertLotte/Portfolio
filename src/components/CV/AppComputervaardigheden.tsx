import { Languages, Code2, Paintbrush, LayoutGrid } from 'lucide-react'

export default () => {
  return (
    
    <div className="flex h-full flex-col items-center text-white mt-10 tablet:h-4/5  web:w-11/12 web:h-full">
      <h2 className=" text-center font-heading text-[1.7rem] font-medium leading-8 tablet:text-4xl web:m-8 ">
        Computervaardigheden & Taalkennis
      </h2>
      <div className="flex h-full w-full flex-col justify-center items-center tablet:flex-wrap tablet:flex-row tablet:h-fit tablet:mt-24  web:h-auto web:w-3/5 web:mt-0">
        <div className="h-fit w-full p-2 border-b-2 border-accent tablet:w-2/5 tablet:h-44 tablet:p-5 tablet:m-5 tablet:shadow tablet:shadow-accent tablet:border-0">
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
        <div className="h-fit w-full p-4 border-b-2 border-accent tablet:w-2/5 tablet:h-44 tablet:p-5 tablet:m-5 tablet:shadow tablet:shadow-accent tablet:border-0">
          <h3 className="mb-2 flex  flex-row items-center gap-4 font-heading text-2xl font-medium">
            <Code2 className="stroke-white" />
            Codeertalen
          </h3>
          <p className="font-body">
            Html, css, Javascript, Typescript, Python, C#, Typescript, SQL en
            beetje C++
          </p>
        </div>
        <div className="h-fit w-full p-4 border-b-2 border-accent tablet:w-2/5 tablet:h-44 tablet:p-5 tablet:m-5 tablet:shadow tablet:shadow-accent tablet:border-0">
          <h3 className="mb-2 flex  flex-row items-center gap-4 font-heading text-2xl font-medium">
            <Paintbrush className="stroke-white" />
            Adobe Apps
          </h3>
          <p className="font-body">
            Photoshop, Illustrator, Indesign, After Effects, Xd, Premiere Pro
          </p>
        </div>
        <div className="h-fit w-full p-4 border-b-2 border-accent tablet:w-2/5 tablet:h-44 tablet:p-5 tablet:m-5 tablet:shadow tablet:shadow-accent tablet:border-0">
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
