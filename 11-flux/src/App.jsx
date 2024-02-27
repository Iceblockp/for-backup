// import React, { useReducer } from "react";

// import {useSelector, useDispatcher} from "react-redux";


// //useSelector = store ui initial data

// /*
// Action 
//  type
//  payload
// */

// const reducer = (store, action) => {
//   switch (action.type) {
//     case "increase": {
//       if (action.payload) {
//         return (store = store + action.payload);
//       } else {
//         return (store = store + 1);
//       }
//     }
//     case "decrease": {
//       if (store > 0) {
//         return (store = store - 1);
//       } else {
//         return store;
//       }
//     }
//     case "addWithPayload": {
//       return (store = store + action.payload);
//     }
//     default: {
//       return store;
//     }
//   }
// };

// const App = () => {
//   const [state, dispatcher] = useReducer(reducer, 0);

//   const handleAdd = () => {
//     dispatcher({ type: "increase" });
//   };
//   const handleRemove = () => {
//     dispatcher({ type: "decrease" });
//   };
//   const handleAddWithPayload = () => {
//     dispatcher({ type: "increase", payload: 8 });
//   };
//   return (
//     <div>
//       <div>{state}</div>
//       <button onClick={handleAdd}>Add</button>
//       <button onClick={handleRemove}>remove</button>
//       <button onClick={handleAddWithPayload}>Double Add</button>
//     </div>
//   );
// };

// export default App;

import React from 'react'
import { useSelector , useDispatch} from "react-redux";
import { increase } from './store/action/counterAction';

// useSelector = store ui initial data



const App = () => {
  const state  = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(increase());
  }
  return (
    
    <div>
    <div>{state}</div>
    <button onClick={handleClick}>increase</button>


    </div>
  )
}

export default App
