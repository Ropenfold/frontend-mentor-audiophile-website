import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer'

const store = configureStore({
    reducer: rootReducer
  });

  export type AppStore = typeof store;
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
  >;
  
  export default store;