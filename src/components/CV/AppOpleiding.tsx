import { Link } from 'lucide-react';
import athenaHeule from '../../assets/img/AthenaCampusHeule.jpg';
import HorizontalLine from './HorizontalLine';

export default () => {
  return (
    <div className='h-full w-full flex items-center justify-center pt-4'>
        
      <HorizontalLine/>
      <div>
        <div>
          <h2 className="text-white font-heading text-3xl font-medium tablet:text-2xl">Athena Campus Heule</h2>
          <p className="text-white font-body text-lg tablet:text-base">2014-2018</p>
        </div>
      </div>
    </div>
  );
};
