import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
    name :'items',
    initialState : {
        gcid : null,
        showgcid : false,

    },
    reducers : {
        Addgcid(state,action){
            state.gcid = action.payload;
        },
        Ashowgcid(state,action){
            state.showgcid = true;
        }
    }
})

export const {Addgcid , Ashowgcid} =  itemsSlice.actions;
export const itemsReducer = itemsSlice.reducer;