import {combineReducers, configureStore} from "@reduxjs/toolkit";
import accountReducer from './reducers/AccountSlice';

const rootReducer = combineReducers({
    accountReducer
});

export const setupStore = () => {
    return configureStore({
        reducer:rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];