import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from './axiosBaseQuery';
import { ProductData } from '../types';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: axiosBaseQuery({ baseUrl: 'https://api-test.innoloft.com' }),
    endpoints: (builder) => ({
        getProducts: builder.query<ProductData, void>({
            query: () => ({ url: `/product/6781/`, method: 'get' }),
        }),
        updateProduct: builder.mutation<ProductData, Partial<ProductData>>({
            query: (updatedProduct) => ({ url: `/product/6781/`, method: 'put', body: updatedProduct }),
        }),
    }),
});

export const { useGetProductsQuery, useUpdateProductMutation } = productsApi;
