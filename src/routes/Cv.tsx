import AppNavigation from "../components/AppNavigation";

export default function Cv() {
  return (
    <main className="h-screen bg-black w-full flex flex-col items-center p-4">
      <div className="flex flex-row justify-around w-9/12">
        <h1 className='text-white text-4xl pb-5 font-heading font-bold w-11/12'>Lotte Keyngnaert</h1>
        <AppNavigation/>
      </div>
    </main>
  );
}