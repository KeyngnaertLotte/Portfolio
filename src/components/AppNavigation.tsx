import { useState } from 'react'
import { Link } from 'react-router-dom'

export default () => {
  const currentPage = window.location.pathname.split('/')[1]

  const onPage = (id: string) => {
    console.log(id)
    if (currentPage === id) {
      return 'm-3 pb-1 border-b-2 border-cyan-400 text-lg '
    } else {
      return 'm-3 pb-1 border-b-2 border-black hover:border-cyan-400 text-lg text-slate-500 hover:text-white'
    }
  }

  return (
    <div className="flex flex-row text-white w-3/6 justify-between items-center">
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
