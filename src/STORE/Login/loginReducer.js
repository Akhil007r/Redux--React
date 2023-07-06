import { User_Login, User_Logout,User_Name } from "../../STORE/Login/loginType";

const initialState = {
  login: false,
  name: "",
  logoutMessage: "",
};

export const authReducer = (state = initialState, action) => {
  const type = action.type;
  const payload = action.payload;
  switch (type) {
    case User_Login:
      return {
        ...state,
        login: true,
        name: payload,
      };
    case User_Logout:
      return {
        ...state,
        login: false,
        logoutMessage: payload,
      };
    case User_Name:return{
      ...state,
      name:payload,
    }
    default:
      return state;
  }
};
