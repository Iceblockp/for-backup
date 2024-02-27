import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value:0,
};

export const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increase : (state) => {
            state.value += 1;
        },
        decrease : (state) => {
            state.value -= 1;
        },
        payload : (state,action) => {
            state.value += action.payload
        }
    }
});

export const {increase , decrease, payload} = counterSlice.actions
export default counterSlice.reducer;