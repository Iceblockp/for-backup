import { configureStore } from "@reduxjs/toolkit"
import  counterReducer  from "./reducer/count.slice";

// const reducer = combineReducers({
//     value:counterReducer,
// });

// export const store = createStore(reducer,{},applyMiddleware(thunk));


export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

