import { User_Login,User_Logout,User_Name } from "./loginType";
export const login = (userName) => {
  return {
    type: User_Login,
    payload: userName,
  };
};
export const Logout = (message) => {
  return {
    type: User_Logout,
    payload: message,
  };
};

export const handleUserName =(userName)=>{  
  return{
    type:User_Name,
    payload:userName,
  };
};