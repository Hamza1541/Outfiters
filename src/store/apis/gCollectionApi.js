import {createApi,fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";


const gCollectionApi =  createApi({
    reducerPath : 'gcollection',
    baseQuery : fetchBaseQuery({
        baseUrl : 'http://localhost:3009',
    }),
    endpoints(builder){
        return {
            fetchgcollection : builder.query({
                query :  (gid)  => {
                    return {
                        url : '/gcollection',
                        method : 'GET',
                        params : {
                            gid : gid 
                        }
                    }
                }
            })
        }
    }
})
export const {useFetchgcollectionQuery} = gCollectionApi;
export {gCollectionApi};