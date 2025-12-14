import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const URL = import.meta.env.VITE_APP_FAKESTORE_URL

export const productApi = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({baseUrl: URL}),
    endpoints:(builder)=>({

        getAllProducts:builder.query({  //we use query because we doing get request...the GET Method
            query:()=>"/products"
        }),

         getSingleProduct:builder.query({
            query:(id)=>`/products/${id}`
        })
    })
})

export const {useGetAllProductsQuery, useGetSingleProductQuery} = productApi; 