import React, { useContext, useEffect, useRef, useState } from "react";
import StarRating from "./StarRating";
import { DataContext } from "../context/DataContext";
import AnimatedImage from "./AnimatedImage";
import Cart from "./Cart";

const Product = ({
  product: {
    id,
    title,
    price,
    image,
    rating: { rate, count },
    description,
    category,
  },
}) => {

    const {addCart,addToCart,deleteProduct} = useContext(DataContext);

    const [animate, setAnimate] = useState(false);
  

  const isOut = deleteProduct.find(el=> el == id );
  
  
  

 


    const handleAddToCart = () => {
       if(!isOut){
        const newCart = {
            product_id: id,
            price,
            title,
            image,
            quantity: 1,
            cost: price ,
        }
        addCart(newCart);
        setAnimate(true);
        addToCart(id);
      }
     
    }


    const imgRef = useRef();

    const [info,setInfo] = useState();

    useEffect(() => {

        setInfo(imgRef.current.getBoundingClientRect());
        
    },[]);

    


  return (
    <div className="product-card group">
      <img ref={imgRef}
        className="product-card-img group-hover:-rotate-6 duration-300 transition-transform h-32 ms-5 -mb-16"
        src={image}
      />
      {animate && <AnimatedImage src={image} info={info} setAnimate={setAnimate}  />}
      <div className="product-card-body border border-neutral-600 p-5">
        <p className="product-card-title font-heading text-xl line-clamp-1 font-bold mt-14 mb-2">
          {title}
        </p>
        <p className="product-card-description text-neutral-500 text-sm mb-4 line-clamp-3">
          {description}
        </p>
        <div className="rating border-b border-neutral-600 pb-3 mb-3 flex justify-between">
          <div className="rating-stars flex gap-1">
          <StarRating rate={rate}/>
           
          </div>
          <p className="rating-text">
            ({rate} / {count})
          </p>
        </div>
        <p className="product-card-price font-heading font-bold text-xl mb-3">
          $ <span className="price">{price}</span>
        </p>
        <button disabled={isOut}  onClick={() => {
          handleAddToCart();

        }} className={` ${isOut && 'bg-neutral-600  text-white'} add-to-cart duration-100 active:scale-90 border border-neutral-600 block w-full disabled:pointer-events-none select-none h-12 font-heading`}>
          {isOut ? "Added":"Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default Product;
