import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const userApi = createApi({
    reducerPath : 'users',
    baseQuery : fetchBaseQuery({
        baseUrl :'http://localhost:3009'
    }),
    endpoints(builder){
        return {
            addUser : builder.mutation({
                invalidatesTags : ['newusercame'],
               
                query : ({name,pimages}) => {
                    return {
                        url: '/users',
                        method : 'POST',
                        body : {
                            name : name,
                            pimage : pimages,
                            
                        }
                    }
                }
            }),
            fetchUser : builder.query({
                providesTags : ['newusercame'],
                
                query : () => {
                    return {
                        url : '/users',
                        method : 'GET',

                    }
                }
            })
        }
    }
})
export const {useAddUserMutation ,  useFetchUserQuery} = userApi;
export {userApi};