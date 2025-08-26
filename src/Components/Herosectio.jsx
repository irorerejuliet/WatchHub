import React from 'react'

const Herosectio = () => {
  return (
    <div className="bg-heroImg  bg-cover bg-left h-screen">
      <div>
        <div className="flex gap-20 justify-between p-[100px]">
          <div className="max-w-[50%] mt-[120px]">
            <h2 className="text-[65px]">
              Uncleash Premium Luxury Quality Watch
            </h2>
            <p className="mt-[15px] font-20 text-[#666]"></p>
            <button className="py-3 px-16 bg-red-700 text-white mt-[1.25rem] rounded-xl  font-bold">
              Shop the collection
            </button>
          </div>
          {/* <div className="max-w-[50%]">
            <img src="images/PlainLogo.jpg" alt="hero-image" className='w-[640px] h-[570px] object-contain'/>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Herosectio
