import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from './axiosBaseQuery';
import { Configuration } from './types';

export const configurationApi = createApi({
    reducerPath: 'configurationApi',
    baseQuery: axiosBaseQuery({ baseUrl: 'https://api-test.innoloft.com' }),
    endpoints: (builder) => ({
        getConfigurationById: builder.query<Configuration, number>({
            query: (appId: number) => ({ url: `/configuration/${appId}/`, method: 'get' }),
        }),
    }),
});

export const { useGetConfigurationByIdQuery } = configurationApi;
