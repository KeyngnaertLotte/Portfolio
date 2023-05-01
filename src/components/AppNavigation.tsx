import { Link } from 'react-router-dom'

export default () => {
  const currentPage = window.location.pathname.split('/')[1]

  const onPage = (id: string) => {
    if (currentPage === id) {
      return 'm-3 pb-1 border-b-2 border-accent text-2xl web:text-lg w-fit focus:ring-2 focus:ring-accent focus:rounded focus:outline-none'
    } else {
      return 'm-3 pb-1 border-b-2 border-black hover:border-accent text-2xl web:text-lg text-white/50 hover:text-white w-fit focus:ring-2 focus:ring-accent focus:rounded focus:outline-none'
    }
  }

  return (
    <div className="font-body text-white flex flex-col web:flex-row web:justify-end h-full web:h-fit mt-10 gap-5 web:items-center web:gap-0  web:mt-0 web:w-3/6">
      <Link to={'/'} className={onPage('')}>
        Home
      </Link>
      <Link to={'/aboutme'} className={onPage('aboutme')}>
        Over mij
      </Link>
      <Link to={'/cv'} className={onPage('cv')}>
        Cv
      </Link>
      <Link to={'/portfolio'} className={onPage('portfolio')}>
        Portfolio
      </Link>
    </div>
  )
}
