import React from 'react'

const Footer = () => {
  return (
    
   <footer className="bg-gray-700 text-white mt-auto">
  <div className="box py-5">
    <div className="flex justify-between items-center">
      <p>
        Copyright @ 2023 <a href="https://mms-it.com" target="_blank">MMS IT</a>
      </p>
      <a href="#top" className="text-white border border-white hover:bg-white hover:text-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
        </svg>
        <span className="sr-only">Scroll to top</span>
      </a>
    </div>
  </div>
</footer>

  )
}

export default Footer