import { legacy_createStore, applyMiddleware } from "redux";
import { reducer } from "./rootReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

export const Store = legacy_createStore(
  reducer,
  composeWithDevTools(applyMiddleware())
);
