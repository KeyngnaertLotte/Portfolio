import { Link } from 'lucide-react';
import athenaHeule from '../../assets/img/AthenaCampusHeule.jpg';
import HorizontalLine from './HorizontalLine';

export default () => {
  return (
    <div className='h-full mb-5 tablet:mb-0 tablet:h-[70%] w-full flex items-center justify-center pt-4 text-white font-body web:h-full'>
      <div className='w-full tablet:w-[70%] grid grid-rows-15 grid-cols-9 grid-cols-10px grid-rows-10px ml-4 justify-items-center content-end gap-0 gap-y-4'> 
      <div className="col-start-1 col-span-1 row-span-5 row-start-1   w-2 rounded-full bg-[#B27F00]"></div>
      <div className=" h-4 w-4 rounded-full bg-[#B27F00]  col-span-1 col-start-1 row-span-1 row-start-2"></div>
        <div className="h-4 w-4 rounded-full bg-[#B27F00] col-span-1 col-start-1 row-span-1 row-start-3"></div>
        <div className="h-4 w-4 rounded-full bg-[#B27F00] col-span-1 col-start-1 row-span-1 row-start-4"></div>
        <div className="h-4 w-4 rounded-full bg-[#B27F00] col-span-1 col-start-1 row-span-1 row-start-5"></div>

          <p className='font-bold row-start-2 row-span-1 col-start-2 col-span-2'>2020 - heden</p>
          <div className='row-start-2 row-span-1 col-start-4 col-span-4 flex flex-col justify-self-start'>
            <p className=''>MCT - Multimedia Creative Technologie</p>
            <p className=''>Howest, Kortrijk</p>
            <p className='text-zinc-500'>Afstudeer richting: Next Web Developer</p>
          </div>
          
          <p className='font-bold row-start-3 row-span-1 col-start-2 col-span-2'>2018 - 2020</p>
          <div className='row-start-3 row-span-1 col-start-4 col-span-4 flex flex-col justify-self-start'>
            <p className=''>Multimedia Visueel</p>
            <p className=''>Athena Heule, Heule</p>
            <p className='text-zinc-500'>Designen en creeëren in Adobe apps en basis websites bouwen</p>
          </div>

          <p className='font-bold row-start-4 row-span-1 col-start-2 col-span-2'>2016 - 2018</p>
          <div className='row-start-4 row-span-1 col-start-4 col-span-4 flex flex-col justify-self-start'>
            <p className=''>Handel & IT</p>
            <p className=''>Heilige Familie, Ieper</p>
            <p className='text-zinc-500'>Basis boekhouden, basis Office pakket en basis opbouw computer</p>
          </div>

          <p className='font-bold row-start-5 row-span-1 col-start-2 col-span-2'>2014 - 2016</p>
          <div className='row-start-5 row-span-1 col-start-4 col-span-4 flex flex-col justify-self-start'>
            <p className=''>Moderne</p>
            <p className=''>Lyceum, Ieper</p>
            <p className='text-zinc-500'>Basis vakken</p>
          </div>
          
      </div>
    </div>
  );
};
