import { useState } from 'react';
import { iWerk } from '../../interfaces/IWerk';

export default ({ werk } : { werk: iWerk}) => {
    const [place, setPlace] = useState('justify-self-end justify-items-end col-start-1') 
    if (werk.direction === 'left') {
        setPlace('justify-self-start justify-items-start col-start-1')
    }

    return (
        <div className={`text-white col-span-3 row-span-1 ${place}`}>
            <h3 className="font-heading font-medium text-2xl">{werk.name}</h3>
            <p className="font-light mb-4">{werk.date}</p>
            <a href={werk.website} target="_blank" rel="noreferrer" >{werk.place}</a>
            <p>{werk.description}</p>
        </div>
    )
}