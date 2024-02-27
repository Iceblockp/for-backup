import React from "react";
import { products } from "./data";
import StarCount from "./StarCount";

const Cards = () => {
  return (
    <section className="box mt-5">
      <div
        id="productGroup"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {products.map(({ id, image, title, description, price, rating }) => {
          return (
            <div key={id} className="product-card group">
              <img src={image} className="h-32 -mb-16 ml-5 product-img" />
              <div className="border rounded-lg border-gray-300 p-5">
                <h3 className="line-clamp-1 product-title  font-heading text-lg mt-12 mb-1">
                  {title}
                </h3>
                <p className="line-clamp-3 product-description text-sm  text-gray-500 mb-5">
                  {description}
                </p>

                <div className="flex justify-between items-center border-b border-gray-500 mb-3 pb-3">
                  <div className="product-stars flex gap-2">
                    <StarCount num={parseFloat(rating.rate)}  />
                  </div>
                  <div className="rating">
                    ( <span className="product-rate">{rating.rate}</span>/{" "}
                    <span className="product-count">{rating.count}</span> )
                  </div>
                </div>
                <p className="font-heading my-3">
                  $ <span className="product-price">{price}</span>
                </p>
                <button
                  type="button"
                  className="text-gray-700 group add-to-cart-btn disabled:bg-gray-700 disabled:text-white hover:text-white border border-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center block w-full"
                >
                  <span className="inline group-disabled:hidden pointer-events-none">
                    Add To Cart
                  </span>
                  <span className="hidden group-disabled:inline pointer-events-none">
                    Cart Added
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Cards;
