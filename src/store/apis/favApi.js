import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const favApi = createApi({
    reducerPath: 'fav',
    baseQuery : fetchBaseQuery({
        baseUrl : 'http://localhost:3009'
    }),
    endpoints(builder){
        return {
            addfav : builder.mutation({
                invalidatesTags : ['nanana'],
                query : ({item,user}) => {
                    return {
                        url : '/userfav',
                        method : 'POST',
                        body : {
                            userid : user,
                            name : item.name,
                            pic1 : item.pic1,
                            pic2 : item.pic2,
                            price : item.price,


                        }

                    }
                }
            }),
            fetchfav : builder.query({
                providesTags : ['nanana'],
                
                query : (user) => {
                    return {
                        url : '/userfav',
                        method : 'GET',
                        params :{
                            userid : user
                        }
                    }
                }
            }),
            deletefav : builder.mutation({
                invalidatesTags : ['nanana'],
                
                query : (id) =>  {
                    return {
                        url : `/userfav/${id}`,
                        method : 'DELETE',

                    }
                }
            })
        }
    }
})
export const {useAddfavMutation , useFetchfavQuery, useDeletefavMutation} = favApi;
export {favApi};