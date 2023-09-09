import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { faker } from "@faker-js/faker";

const itemsApi = createApi({
    reducerPath : 'items',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:3009'
    }),
    endpoints(builder){
        return{
          
            fetchItems : builder.query({
                query : (gcid) => {
                    return {
                        url : '/items',
                        method : 'GET',
                        params : {
                            gcid : gcid
                        }
                    }
                }
            })
        }
    }
})
export const {useFetchItemsQuery} = itemsApi;
export {itemsApi};