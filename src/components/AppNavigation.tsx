import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

export default () => {
  const currentPage = window.location.pathname.split('/')[1]
  const isMobile = useMediaQuery({ query: '(max-width: 915px)' })

  const onPage = (id: string) => {
    console.log(id)
    if (currentPage === id) {
      return 'm-3 pb-1 border-b-2 border-accent text-2xl web:text-lg w-fit'
    } else {
      return 'm-3 pb-1 border-b-2 border-black hover:border-accent text-2xl web:text-lg text-white/50 hover:text-white w-fit'
    }
  }

  return (
    <div className="font-body text-white flex flex-col web:flex-row web:justify-between h-full web:h-fit mt-10 gap-5 web:items-center web:gap-0  web:mt-0 web:w-3/6">
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
