import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        cart : [],
    },
    reducers : {
        AddtoCart(state,action){
            state.cart.push(action.payload);
        },
        deleteitem(state,action){
           // state.cart.filter
            state.cart = state.cart.filter(item => item.id !== action.payload);
        },
        
    }
})

export const {AddtoCart,deleteitem} = cartSlice.actions;
export const  cartReducer = cartSlice.reducer;