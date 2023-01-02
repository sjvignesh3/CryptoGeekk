import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";
import { coinGecko } from "../services/coinGecko";

export default configureStore({
    reducer:{
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
        [coinGecko.reducerPath]: coinGecko.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([cryptoApi.middleware,cryptoNewsApi.middleware,coinGecko.middleware]),
        
});