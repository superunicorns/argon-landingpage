import React from 'react'

const Features = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="my-20 px-10 text-center w-full md:w-2xl text-md md:text-lg text-slate-400">
      Argon React Native is a fully coded app template built over <span className="text-[#6772e5] font-semibold">Galio.io, React Native</span> and <span className="text-[#6772e5] font-semibold">Expo</span> to allow you to create powerful and beautiful mobile applications. You will save a lot of time going from prototyping to full-functional code, because all elements are implemented over Galio and every element has multiple states for colors, styles, hover, focus, that you can easily access and use.
      </p>
      <div className="grid px-10 md:px-20 lg:px-40 mx-auto w-full mb-30 grid-rows-1 grid-cols-1 lg:grid-rows-2 lg:grid-cols-2">
        <div className="h-64 w-full bg-red-100 flex items-center justify-center md:border-r-2 border-r-0 border-b-2 border-slate-300">1</div>
        <div className="h-64 w-full bg-blue-100 flex items-center justify-center border-b-2 border-slate-300">2</div>
        <div className="h-64 w-full bg-yellow-100 flex items-center justify-center md:border-r-2 border-r-0 md:border-b-0 border-b-2 border-slate-300">3</div>
        <div className="h-64 w-full bg-green-100 flex items-center justify-center">4</div>
      </div>
    </div>
  )
}

export default Features;