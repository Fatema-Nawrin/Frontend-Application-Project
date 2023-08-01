import { configureStore } from '@reduxjs/toolkit';
import { configurationApi } from './configurationApi';
import { productsApi } from './productsApi';
import { trlApi } from './trlApi';

export const store = configureStore({
    reducer: {
        [configurationApi.reducerPath]: configurationApi.reducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [trlApi.reducerPath]: trlApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(configurationApi.middleware, productsApi.middleware, trlApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
