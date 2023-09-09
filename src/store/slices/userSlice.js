import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name : 'usersname',
    initialState : {
        name : '',
        loginuser : null, 
        userid : 0,

    },
     reducers : {
        Addusername(state,action){
            state.name = action.payload
        },
        Addloginguser(state, action) {
            state.loginuser = action.payload;
         },
         Adduserid(state, action){
            state.userid = action.payload
         }
     }
     
})
export const {Addusername , Addloginguser, Adduserid } = userSlice.actions;
export const userReducer = userSlice.reducer;