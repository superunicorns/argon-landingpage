import React from 'react'

const MobileScreens = () => {
  return (
    <div className="w-full justify-center items-center py-10 text-center">
      <h3 className="px-4 my-20 text-3xl text-slate-700">A selection of screens</h3>
      <div className="grid max-w-full gap-10 mx-auto md:max-w-xl lg:max-w-5xl grid-rows-4 md:grid-rows-2 lg:grid-rows-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="w-auto h-auto flex justify-center items-center">
          <img src="/assets/mobile-screen-1.png" alt="mobile home screen" className="w-[300px] shadow-xl shadow-slate-500/50 inset-shadow-sm rounded-xl" />
        </div>
        <div className="w-auto h-auto flex justify-center items-center">
          <img src="/assets/mobile-screen-2.png" alt="mobile navigation screen" className="w-[300px] shadow-xl shadow-slate-500/50 inset-shadow-sm rounded-xl" />
        </div>
        <div className="w-auto h-auto flex justify-center items-center">
          <img src="/assets/mobile-screen-3.png" alt="mobile profile screen" className="w-[300px] shadow-xl shadow-slate-500/50 inset-shadow-sm rounded-xl" />
        </div>
        <div className="w-auto h-auto flex justify-center items-center">
          <img src="/assets/mobile-screen-4.png" alt="mobile sign-up screen" className="w-[300px] shadow-xl shadow-slate-500/50 inset-shadow-sm rounded-xl" />
        </div>
      </div>
    </div>
  )
}

export default MobileScreens;