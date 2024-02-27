import { configureStore } from "@reduxjs/toolkit"
import { ApiService } from "./service/apiService";

// const reducer = combineReducers({
//     value:counterReducer,
// });

// export const store = createStore(reducer,{},applyMiddleware(thunk));


export const store = configureStore({
    reducer: {
        [ApiService.reducerPath] : ApiService.reducer,
    },
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(ApiService.middleware),
});


export default store;

