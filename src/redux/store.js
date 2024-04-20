import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UniReducer from './wishlist/Uni_wishlist'
import jobReducer from './wishlist/Job_slice'
import Scholarship_Reducer from './wishlist/Scholarship_slice';
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
  }

let rootReducer=combineReducers({
    uni:UniReducer,
        job:jobReducer,
        scholarship: Scholarship_Reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const Store=configureStore({
   reducer: persistedReducer
}) 