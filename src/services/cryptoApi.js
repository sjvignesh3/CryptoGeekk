import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '869b05e0d3msh965f5528c45c86fp19e49ajsnbafc4b47a1be',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
 
const baseUrl = 'https://coinranking1.p.rapidapi.com';

 const createrequest = (url) => ({
    url, headers: cryptoApiHeaders
 });

 export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createrequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createrequest(`/coin/${coinId}`)
        }),
        getCryptoHistory: builder.query({
            query: ({coinId, timeperiod}) => createrequest(`/coin/${coinId}/history?timePeriod=${timeperiod}`)
        }),
    })
 });

 //Redux hooks
 export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery
 } = cryptoApi;