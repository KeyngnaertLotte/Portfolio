import { Languages, Code2, Paintbrush, LayoutGrid } from 'lucide-react'

export default () => {
  return (
    
    <div className="flex h-full flex-col items-center text-white mt-10 tablet:h-4/5  web:w-1/5 web:max-h-screen">
      <h2 className=" text-center font-heading text-[1.7rem] font-medium leading-8 tablet:text-4xl web:m-8 ">
        Vaardigheden
      </h2>
      <div className="h-screen overflow-y-auto flex px-4 flex-col justify-center items-center tablet:flex-wrap tablet:flex-row tablet:h-fit tablet:mt-24  web:h-auto web:w-full web:mt-0">
        <div className='w-full'>
          <h3 className='font-bold text-zinc-500'>Taalkennis</h3>
          <div className='flex flex-row justify-between items-center'>
            <p>Nederlands</p>
            <div className='flex flex-row gap-1'>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-white rounded-xl'></div>
            </div>
          </div>
          <div className='flex flex-row justify-between items-center'>
            <p>Engels</p>
            <div className='flex flex-row gap-1'>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-white rounded-xl'></div>
            </div>
          </div>
          <div className='flex flex-row justify-between items-center'>
            <p>Frans</p>
            <div className='flex flex-row gap-1'>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-white rounded-xl'></div>
              <div className='w-3 h-3 bg-white rounded-xl'></div>
              <div className='w-3 h-3 bg-white rounded-xl'></div>
              <div className='w-3 h-3 bg-white rounded-xl'></div>
            </div>
          </div>
        </div>
        <div className='w-full mt-4'>
          <h3 className='font-bold text-zinc-500'>Programmeerkennis</h3>
          <div className='flex flex-row justify-between items-center'>
            <p>HTML</p>
            <div className='flex flex-row gap-1'>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-white rounded-xl'></div>
            </div>
          </div>
          <div className='flex flex-row justify-between items-center'>
            <p>CSS</p>
            <div className='flex flex-row gap-1'>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-white rounded-xl'></div>
            </div>
          </div>
          <div className='flex flex-row justify-between items-center'>
            <p>Javascript</p>
            <div className='flex flex-row gap-1'>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-white rounded-xl'></div>
              <div className='w-3 h-3 bg-white rounded-xl'></div>
            </div>
          </div>
          <div className='flex flex-row justify-between items-center'>
            <p>MySQL</p>
            <div className='flex flex-row gap-1'>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-white rounded-xl'></div>
              <div className='w-3 h-3 bg-white rounded-xl'></div>
              <div className='w-3 h-3 bg-white rounded-xl'></div>
            </div>
          </div>
          <div className='flex flex-row justify-between items-center'>
            <p>Typescript</p>
            <div className='flex flex-row gap-1'>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-white rounded-xl'></div>
              <div className='w-3 h-3 bg-white rounded-xl'></div>
            </div>
          </div>
          <div className='flex flex-row justify-between items-center'>
            <p>C#</p>
            <div className='flex flex-row gap-1'>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-white rounded-xl'></div>
              <div className='w-3 h-3 bg-white rounded-xl'></div>
              <div className='w-3 h-3 bg-white rounded-xl'></div>
              <div className='w-3 h-3 bg-white rounded-xl'></div>
            </div>
          </div>
          <div className='flex flex-row justify-between items-center'>
            <p>C++</p>
            <div className='flex flex-row gap-1'>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-white rounded-xl'></div>
              <div className='w-3 h-3 bg-white rounded-xl'></div>
              <div className='w-3 h-3 bg-white rounded-xl'></div>
              <div className='w-3 h-3 bg-white rounded-xl'></div>
            </div>
          </div>
          <div className='flex flex-row justify-between items-center'>
            <p>React (native)</p>
            <div className='flex flex-row gap-1'>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-white rounded-xl'></div>
              <div className='w-3 h-3 bg-white rounded-xl'></div>
            </div>
          </div>
        </div>
        <div className='w-full mt-4'>
          <h3 className='font-bold text-zinc-500'>Adobe apps</h3>
          <div className='flex flex-row justify-between items-center'>
            <p>Photoshop</p>
            <div className='flex flex-row gap-1'>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-white rounded-xl'></div>
              <div className='w-3 h-3 bg-white rounded-xl'></div>
            </div>
          </div>
          <div className='flex flex-row justify-between items-center'>
            <p>Illustrator</p>
            <div className='flex flex-row gap-1'>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-white rounded-xl'></div>
              <div className='w-3 h-3 bg-white rounded-xl'></div>
            </div>
          </div>
          <div className='flex flex-row justify-between items-center'>
            <p>Indesign</p>
            <div className='flex flex-row gap-1'>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-white rounded-xl'></div>
              <div className='w-3 h-3 bg-white rounded-xl'></div>
              <div className='w-3 h-3 bg-white rounded-xl'></div>
            </div>
          </div>
          <div className='flex flex-row justify-between items-center'>
            <p>XD</p>
            <div className='flex flex-row gap-1'>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-white rounded-xl'></div>
            </div>
          </div>
          <div className='flex flex-row justify-between items-center'>
            <p>Premiere Pro</p>
            <div className='flex flex-row gap-1'>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-white rounded-xl'></div>
              <div className='w-3 h-3 bg-white rounded-xl'></div>
              <div className='w-3 h-3 bg-white rounded-xl'></div>
            </div>
          </div>
          <div className='flex flex-row justify-between items-center'>
            <p>After Effects</p>
            <div className='flex flex-row gap-1'>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-white rounded-xl'></div>
              <div className='w-3 h-3 bg-white rounded-xl'></div>
            </div>
          </div>
        </div>
        <div className='w-full mt-4'>
          <h3 className='font-bold text-zinc-500'>Office apps</h3>
          <div className='flex flex-row justify-between items-center'>
            <p>Word</p>
            <div className='flex flex-row gap-1'>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-white rounded-xl'></div>
              <div className='w-3 h-3 bg-white rounded-xl'></div>
            </div>
          </div>
          <div className='flex flex-row justify-between items-center'>
            <p>Excel</p>
            <div className='flex flex-row gap-1'>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-white rounded-xl'></div>
              <div className='w-3 h-3 bg-white rounded-xl'></div>
            </div>
          </div>
          <div className='flex flex-row justify-between items-center'>
            <p>Powerpoint</p>
            <div className='flex flex-row gap-1'>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-[#B27F00] rounded-xl'></div>
              <div className='w-3 h-3 bg-white rounded-xl'></div>
              <div className='w-3 h-3 bg-white rounded-xl'></div>
              <div className='w-3 h-3 bg-white rounded-xl'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}