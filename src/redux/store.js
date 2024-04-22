import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'; // Correct import
import AsyncStorage from "@react-native-async-storage/async-storage";
import UniReducer from './wishlist/Uni_wishlist'
import jobReducer from './wishlist/Job_slice'
import Scholarship_Reducer from './wishlist/Scholarship_slice';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const rootReducer = combineReducers({
    uni: UniReducer,
    job: jobReducer,
    scholarship: Scholarship_Reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const Store = configureStore({
    reducer: persistedReducer
});
export const persistor=persistStore(Store);
