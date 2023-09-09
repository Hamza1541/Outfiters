import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import { genderApi } from "./apis/genderApi";
import { gCollectionApi } from "./apis/gCollectionApi";
import { itemsApi } from "./apis/itemsApi";
import { itemsReducer, Addgcid , Ashowgcid} from "./slices/itemSlice";
import { userApi } from "./apis/userApi";
import { userReducer,Addusername ,Addloginguser, Adduserid} from './slices/userSlice';
import { navReducer, AddPath } from "./slices/navSlice";
import { favApi } from "./apis/favApi";
import { cartReducer,AddtoCart,deleteitem } from "./slices/cartSlice";


export const store = configureStore({
    reducer : {
      gender : genderApi.reducer,
      gcollection : gCollectionApi.reducer,
      items :  itemsApi.reducer,
      itemsl : itemsReducer,
      users : userApi.reducer,
      usersname : userReducer,
      navbar : navReducer,
      fav : favApi.reducer,
      cart: cartReducer,
      


    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(genderApi.middleware,
          gCollectionApi.middleware,itemsApi.middleware, userApi.middleware,favApi.middleware);
      },

})
setupListeners(store.dispatch);
export { useFetchGenderQuery } from './apis/genderApi';
export { useFetchgcollectionQuery } from './apis/gCollectionApi';
export {useFetchItemsQuery} from './apis/itemsApi';
export {useAddUserMutation , useFetchUserQuery } from './apis/userApi';
export {Addgcid , Ashowgcid, Addusername , Addloginguser, AddPath, Adduserid,AddtoCart,deleteitem};
export {useAddfavMutation , useFetchfavQuery ,  useDeletefavMutation} from './apis/favApi';


