import store from './index.ts';

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
