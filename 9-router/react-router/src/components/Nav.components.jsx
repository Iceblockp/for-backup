import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavComponents = () => {
  return (
    <nav>
      <ol className="flex gap-5">
        <li className="flex justify-center items-center px-4 py-2 bg-blue-950 text-white">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="flex justify-center items-center px-4 py-2 bg-blue-950 text-white">
          <NavLink to={"/about"} state={{ phoneNumber: 565226665 }}>
            About
          </NavLink>
        </li>
        <li className="flex justify-center items-center px-4 py-2 bg-blue-950 text-white">
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
        <li className="flex justify-center items-center px-4 py-2 bg-blue-950 text-white">
          <NavLink to={"/book"} >
            Book
          </NavLink>
        </li>
        <li className="flex justify-center items-center px-4 py-2 bg-blue-950 text-white">
          <NavLink to={"/book/532/Author"}>Author</NavLink>
        </li>
        <li className="flex justify-center items-center px-4 py-2 bg-blue-950 text-white">
          <NavLink to={`/book/${(Math.random() * 10).toFixed(0)}`}>Book details</NavLink>
        </li>
      </ol>
    </nav>
  );
};

export default NavComponents;
