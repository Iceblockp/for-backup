import React from "react";
import Heading from "./Heading";
import Category from "./Category";
import Cards from "./Cards";
import Footer from "./Footer";
import DrawerGroup from "./DrawerGroup";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Heading />
      <div className=" h-24"></div>
      <Category />
      <Cards  />

      <Footer />

      <DrawerGroup />
    </div>
  );
};

export default App;
