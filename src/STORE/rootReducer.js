import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import { iceCreamReducer } from "./iceCream/iceCreamReducer";
import { fetchReducer } from "./fetchdata/fetchDataReducer";
import { authReducer } from "./Login/loginReducer";

export const reducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  userData: fetchReducer,
  auth: authReducer,
});
