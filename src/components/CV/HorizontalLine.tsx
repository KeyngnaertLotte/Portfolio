export default () => {
      return (
        //     <svg className='h-full w-full' width={100} height={100}>
    // <line className="fill-none stroke-[#b17f11] rounded-full stroke-2" height={100} x1="2.38" y1="2.38" x2="2.38" y2="331.72"/>
    // <rect className="fill-[#b17f11] stroke-0" x="0" y="0" width="4.77" height="4.77" rx="2.38" ry="2.38"/>
    // <rect className="fill-[#b17f11] stroke-0" x="0" y="329.34" width="4.77" height="4.77" rx="2.38" ry="2.38"/>
    // <rect className="fill-[#b17f11] stroke-0" x="0" y="82.33" width="4.77" height="4.77" rx="2.38" ry="2.38"/>
    // <rect className="fill-[#b17f11] stroke-0" x="0" y="247" width="4.77" height="4.77" rx="2.38" ry="2.38"/>
    // <rect className="fill-[#b17f11] stroke-0" x="0" y="164.67" width="4.77" height="4.77" rx="2.38" ry="2.38"/>
    // </svg>
    <div className="relative h-full flex flex-row justify-center items-center">
    <div className="w-2  h-full bg-yellow-400 rounded-full flex-grow-1"></div>
    <div className="absolute flex flex-col h-full justify-between">
      {/* Content of the second sibling div */}
      <div className="w-4 h-4 bg-yellow-400 rounded-full mt-3"></div>
      <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
      <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
      <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
    </div>
  </div>
  


      )
    }