import AppNavigation from "../components/AppNavigation";

export default function Portfolio() {
  return (
    <main className="flex h-screen justify-end bg-black bg-[url('../assets/img/BgHome.jpg')] bg-no-repeat align-middle">
      <div className="flex flex-col justify-center align-middle p-8 w-2/4">
        <h1 className='text-white'>Lotte Keyngnaert</h1>
        <AppNavigation />
      </div>
    </main>
  );
}