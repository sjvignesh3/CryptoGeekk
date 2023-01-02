import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const coinGecko = createApi({
    reducerPath: 'coinGecko',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.coingecko.com/api/v3'}),
    endpoints: (builder) => ({
        getExchanges: builder.query({
            query: () => `/exchanges`
        }),
    })
 });

 //Redux hooks
 export const {
    useGetExchangesQuery,
 } = coinGecko;