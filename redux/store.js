import { applyMiddleware, createStore } from "redux";
import { persistStore } from "redux-persist";
import logger from 'redux-logger' 

import rootReducer from "./reducer";

export const store = createStore(rootReducer, applyMiddleware(logger));
export const persistor = persistStore(store, {});
