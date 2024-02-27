import React from "react";

const ProductInCart = () => {
  return (
    <div className="product-in-cart">
      <img
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt
        className="h-20 -mb-10 ml-5 cart-img relative z-10"
      />
      <div className="group border rounded-lg bg-white border-gray-300 p-5 relative overflow-hidden">
        <button className="cart-del bg-red-200 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto translate-x-14 group-hover:translate-x-0 duration-200 text-red-700 rounded-lg absolute top-3 right-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 pointer-events-none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
        <p className="cart-title line-clamp-1 text-sm font-bold font-heading mt-6 mb-3">
          Your perfect pack for everyday use and walks in the forest. Stash your
          laptop
        </p>
        <div className="flex justify-between items-center">
          <p className="font-heading">
            $ <span className="cart-cost">123</span>
            <span className="cart-price hidden" />
          </p>
          <div className="cart-quantity-control flex">
            <button className="bg-gray-200 cart-q-sub hover:bg-gray-700 hover:text-white px-1 text-gray-700 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-3 h-3 pointer-events-none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12h-15"
                />
              </svg>
            </button>
            <p className=" w-6 text-end me-1 cart-q">1</p>
            <button className="bg-gray-200 cart-q-add hover:bg-gray-700 hover:text-white rounded px-1 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-3 h-3 pointer-events-none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInCart;
