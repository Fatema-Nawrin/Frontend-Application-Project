import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from './axiosBaseQuery';
type trlObj = {
    id: string;
    name: string;
    description: null;
};
type trlType = trlObj[];

export const trlApi = createApi({
    reducerPath: 'trlApi',
    baseQuery: axiosBaseQuery({ baseUrl: 'https://api-test.innoloft.com' }),
    endpoints: (builder) => ({
        getTrls: builder.query<trlType, void>({
            query: () => ({ url: `/trl/`, method: 'get' }),
        }),
    }),
});

export const { useGetTrlsQuery } = trlApi;
