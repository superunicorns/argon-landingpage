import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full relative">
      <div id="footer-background" className="absolute -z-10 -my-[200px] top-0 bottom-0 right-0 left-0" />
      <div className="flex gap-10 mx-auto w-full items-center justify-center" >
        <img src="/assets/microsoft-logo.png" alt="Microsoft" className="w-auto h-[80px]" />
        <div className="flex gap-6 flex-col lg:flex-row">
        <img src="/assets/typescript-logo.png" alt="TypeScript" width={80} height={80} className="rounded-full" />
        <img src="/assets/tailwind-logo.png" alt="Tailwind" width={80} height={80} className="rounded-full" />
        <img src="/assets/next-logo.png" alt="Next.Js" width={80} height={80} className="rounded-full" />
        <img src="/assets/react-logo.png" alt="React.Js" width={80} height={80} className="rounded-full" />
        </div>
      </div>
    </footer>
  )
}

export default Footer