import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoNewsApiHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '869b05e0d3msh965f5528c45c86fp19e49ajsnbafc4b47a1be',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
};

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createrequest = (url) => ({
    url, headers: cryptoNewsApiHeaders
 });

 export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory,count}) => createrequest(`/news/search?q=${newsCategory}&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
 });

 //Redux hooks
 export const {
    useGetCryptoNewsQuery,
 } = cryptoNewsApi;