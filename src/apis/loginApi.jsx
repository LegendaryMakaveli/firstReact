import { createApi, fetchBaseQuery}from "@reduxjs/toolkit/query/react";

const URL = import.meta.env.VITE_APP_FAKESTORE_URL

export const loginApi = createApi({
    reducerPath: "login",
    baseQuery: fetchBaseQuery({baseUrl: URL}),
    endpoints:(builder)=>({
        login:builder.mutation({            //we use mutation because we doing post,patch,delete request...the POST Method
            query:(data)=>({
                url:"/auth/login",
                method: "POST",
                body:data
            })
        })
    })
})

export const {useLoginMutation} = loginApi