import AppNavigation from '../components/AppNavigation'
import AppComputervaardigheden from '../components/CV/AppComputervaardigheden'
import AppOpleiding from '../components/CV/AppOpleiding'
import AppWerkervaring from '../components/CV/AppWerkervaring'


export default function Cv() {
  return (
    <main className="flex h-full w-full flex-col items-center bg-black p-4">
      <div className="flex w-9/12 flex-row justify-around">
        <h1 className="w-11/12 pb-5 font-heading text-4xl font-bold text-white">
          Lotte Keyngnaert
        </h1>
        <AppNavigation />
      </div>
        <AppOpleiding />
        <AppWerkervaring />
        <AppComputervaardigheden/>
    </main>
  )
}
