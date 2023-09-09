import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const genderApi = createApi({
    reducerPath: 'gender',
    baseQuery : fetchBaseQuery({
        baseUrl :'http://localhost:3009'
    }),
    endpoints(builder){
        return {
            fetchGender : builder.query({
                query : () => {
                    return {
                        url : '/gender',
                        method: 'GET'
                    }
                }
            })
        }
    }
})
export const {useFetchGenderQuery} = genderApi;
export {genderApi};
