import React from "react";

const Heading = () => {
  return (
    
      <header className="border-b-2 border-gray-600 py-3 fixed w-full top-0 left-0 bg-white">
        <div className="max-w-[1140px] px-3 md:px-3 lg:px-0 mx-auto">
          <div className="flex justify-between items-center">
            <div >
              <h1 className="font-heading font-bold text-xl md:text-3xl">
                MMS Solution
              </h1>
              <p className="text-gray-500 text-xs md:text-base">
                E-commerce App
              </p>
            </div>
            <div className="flex gap-2">
              {/* text box  */}
              <input
                type="text"
                id="searchInput"
                placeholder="search product"
                className="opacity-0 fixed w-4/5 mx-auto top-16 left-0 right-0 sm:static pointer-events-none  rounded-lg border-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300"
              />
              {/* //outline */}
              <button
                type="button"
                id="searchBtn"
                className="text-gray-700 border border-gray-700 hover:bg-gray-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 pointer-events-none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
              {/* //solid */}
              <button
                type="button"
                id="cartBtn"
                data-drawer-target="drawer-right-example"
                data-drawer-show="drawer-right-example"
                data-drawer-placement="right"
                aria-controls="drawer-right-example"
                className="text-white border relative border-gray-700 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 pointer-events-none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                <span className="cart-item-count bg-red-700 absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 border border-white text-red-100 w-5 h-5 text-xs rounded-full">
                  0
                </span>
                <span className="sr-only">Cart</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    
  );
};

export default Heading;
