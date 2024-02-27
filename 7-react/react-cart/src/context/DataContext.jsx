import React, { createContext, useState } from "react";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [cartDrawer, setCartDrawer] = useState(false);
  const [carts, setCarts] = useState([]);
  const [products, setProduct] = useState();
  const [deleteProduct,setDeleteProduct] = useState([]);

  // const [inCart,setInCart] = useState(false);


  const toggleCartDrawer = () => {
    setCartDrawer(!cartDrawer);
  };

  const [cartBtnInfo, setCartBtnInfo] = useState({});


  const addCart = (newCart) => {
    setCarts([...carts, newCart]);
  };

  const updateCart = (id, updateQ) => {
    setCarts(
      carts.map((cart) => {
        if (cart.product_id == id) {
          const newQuantity = cart.quantity + updateQ;

          return {
            ...cart,
            quantity: newQuantity,
            cost: cart.price * newQuantity,
          };
        } else {
          return cart;
        }
      })
    );
  };

  const deleteCart = (id) => {
    setCarts(carts.filter(cart => cart.product_id != id));
    setDeleteProduct(deleteProduct.filter(el => el != id));
  }

  const addToCart = (id) => {
    setDeleteProduct([...deleteProduct,id]);
  }


 



 

  return (
    <DataContext.Provider
      value={{
        cartDrawer,
        toggleCartDrawer,
        carts,
        addCart,
        cartBtnInfo,
        setCartBtnInfo,
        updateCart,
        deleteCart,
        products,
        setProduct,
        addToCart,
        deleteProduct,
       
       
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
