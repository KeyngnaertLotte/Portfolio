import AppNavigation from '../components/AppNavigation'

export default function Home() {
  return (
    <main className="flex h-screen justify-end bg-black bg-[url('../assets/img/BgHome.jpg')] bg-no-repeat bg-contain align-middle ">
      <div className="flex flex-col justify-center items-center  w-2/4">
        <h1 className='text-white text-6xl pb-5 font-heading font-bold'>Lotte Keyngnaert</h1>
        <AppNavigation />
      </div>
    </main>
  )
}
