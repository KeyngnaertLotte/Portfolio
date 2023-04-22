import { iWerk } from '../../interfaces/IWerk';

export default ({ werk } : { werk: iWerk}) => {
    return (
        <div className="text-white col-span-1 row-span-1">
            <h3 className="font-heading font-medium text-2xl">{werk.name}</h3>
            <p className="font-light mb-4">{werk.date}</p>
            <a href={werk.website} target="_blank" rel="noreferrer" >{werk.place}</a>
            <p>{werk.description}</p>
        </div>
    )
}