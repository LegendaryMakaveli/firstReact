import {configureStore} from "@reduxjs/toolkit";
import { productApi } from "../apis/productAPi";
import { loginApi } from "../apis/loginApi";
import myCartReducer from "../features/cart/cartSlice";

export const store = configureStore({
    reducer:{
        [productApi.reducerPath]:productApi.reducer,
        [loginApi.reducerPath]:loginApi.reducer,
        cart: myCartReducer
    },
    middleware:(getDefaultMiddleware) => (
        getDefaultMiddleware().concat(productApi.middleware, loginApi.middleware)
    )
})