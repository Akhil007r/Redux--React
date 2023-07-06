import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from "./fetchDataType";

export const fetchUserRequest = () => {
  return {
    type: FETCH_DATA_REQUEST,
  };
};
export const fetchUserSuccess = (users) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: users,
  };
};
export const fetchUserFailure = (error) => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error,
  };
};
