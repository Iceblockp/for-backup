import React, { useContext, useEffect, useRef } from 'react'
import { DataContext } from '../context/DataContext';

const AnimatedImage = ({src,info,setAnimate}) => {

    const styles = {
        width : info.width + "px",
        height : info.height + "px",
        left : info.left + 'px',
        top : info.top + "px"
    }

    const imgRef = useRef();

    const {cartBtnInfo} = useContext(DataContext);

    useEffect(() => {

        const keyframe = [
            {
                top: info.top +"px",
                left: info.left + "px",
            },
            {
                top: cartBtnInfo.top +"px",
                left: cartBtnInfo.left + "px",
                height: 10 + "px",
                width: 10 + "px",
                rotate: "2turn"
            }
        ];

        const options = {
            duration: 500,
            iterations: 1,
            fill: "both",
        }
        const run = () => {
            setAnimate(false);
        }

       const animation = imgRef.current.animate(keyframe,options);
       animation.addEventListener("finish",run);

       return () => {
        animation.removeEventListener("finish",run);
       }
        
    },[])

  return (
    <img src={src} style={styles} ref={imgRef} className=' fixed z-40 ' />
  )
}

export default AnimatedImage