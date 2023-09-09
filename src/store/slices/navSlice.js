import { createSlice } from "@reduxjs/toolkit";

export const navSlice = createSlice({
    name : 'nav',
    initialState : {
        path : 'home',
    },
    reducers : {
        AddPath(state,action){
            state.path = action.payload;
        }
    }
})
export const {AddPath} = navSlice.actions;
export const navReducer = navSlice.reducer;