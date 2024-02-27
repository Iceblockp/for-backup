import React from "react";

const Category = () => {

  
const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing"
];

  return (
    <section className="mt-5 mb-10">
      <div className="max-w-[1140px] mx-auto px-3 md:px-3 lg:px-0">
        <h3 className="font-bold font-heading mb-3">Product Categories</h3>
        <div id="categoryGroup" className="flex gap-3 overflow-x-auto">
      {categories.map(category => {
        return (
          <button key={category} type="button" className="select-none text-gray-700 hover:text-white border border-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-4 py-2 text-center active">
            {category}
          </button>
        )
      })}
        </div>
      </div>
    </section>
  );
};

export default Category;
