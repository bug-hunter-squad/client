import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import auth from "./auth/index.js";
import search from "./search/index";
import query from "./searchFlight/index";
import admin from "./admin/index"
import filter from "./filter/index"

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth","query"],
};
const rootReducer = combineReducers({
  auth,
  search,
  query,
  admin,
  filter

}); 

const persistedReducer =persistReducer(persistConfig, rootReducer);

export default persistedReducer;