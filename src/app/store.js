import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./feature/cardSlice";
import getProductReducer from "./feature/getProductSlice";
import togglerReducer from "./feature/togglerSlice";
import { SplitApi } from "./services/apiSlice";

const store = configureStore({
  reducer: {
    toggler: togglerReducer,
    productList: getProductReducer,
    cardList: cardReducer,
    [SplitApi.reducerPath]: SplitApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(SplitApi.middleware),
});
export default store;
