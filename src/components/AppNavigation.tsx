import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

export default () => {
  const currentPage = window.location.pathname.split('/')[1]
  const isMobile = useMediaQuery({ query: '(max-width: 915px)' })

  const onPage = (id: string) => {
    console.log(id)
    if (currentPage === id) {
      return 'm-3 pb-1 border-b-2 border-accent text-2xl w-fit'
    } else {
      return 'm-3 pb-1 border-b-2 border-black hover:border-accent text-2xl text-white/50 hover:text-white w-fit'
    }
  }

  return (
    // <div className="flex flex-row text-white w-3/6 justify-between items-center font-body">
    //   <Link to={'/'} className={onPage('')}>
    //     Home
    //   </Link>
    //   <Link to={'/aboutme'} className={onPage('aboutme')}>
    //     Over mij
    //   </Link>
    //   <Link to={'/cv'} className={onPage('cv')}>
    //     Cv
    //   </Link>
    //   <Link to={'/portfolio'} className={onPage('portfolio')}>
    //     Portfolio
    //   </Link>
    // </div>

    <div className="font-body text-white flex flex-col h-full mt-10 gap-5">
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
