import React from "react";
import ProductInCart from "./ProductInCart";

const DrawerGroup = () => {
  return (
    <div
      id="drawer-right-example"
      className="fixed top-0 right-0 z-40 h-screen overflow-y-auto transition-transform bg-white w-80"
      tabIndex={-1}
      aria-labelledby="drawer-right-label"
    >
      <div className="flex flex-col h-screen">
        <div className="cart-drawer-header px-3 border-b-2 border-gray-700 py-3 flex justify-between items-center ">
          <div>
            <h1 className="font-heading font-bold text-3xl">Your Cart</h1>
            <p className="text-gray-500">
              Items in Cart{" "}
              <span className="cart-item-count bg-red-200 text-red-700 px-2 py-1 text-xs rounded-lg">
                0
              </span>
            </p>
          </div>
          <button
            type="button"
            data-drawer-hide="drawer-right-example"
            aria-controls="drawer-right-example"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex items-center justify-center "
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
        </div>
        <div
          id="cartGroup"
          className="cart-drawer-body  flex-grow flex flex-col gap-3 overflow-y-scroll  p-3"
        >
          {/* empty-cart  */}
          <div className="hidden last:flex flex-col text-center w-full ">
            <img src="" />
            <p>There is no item yet!</p>
          </div>
          <ProductInCart />
        </div>
        <div className="cart-drawer-footer border-t-2 border-gray-600 px-5">
          <p className="text-gray-500 text-end">Total Amount</p>
          <h1 className="font-heading font-bold text-3xl text-end mb-3">
            $ <span id="costTotal">0</span>
          </h1>
          <button
            type="button"
            id="orderBtn"
            className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-4 w-full block"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default DrawerGroup;
