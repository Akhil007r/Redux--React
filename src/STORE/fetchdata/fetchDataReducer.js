import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from "./fetchDataType";

const initialState = {
  loading: false,
  userData: [],
  error: "",
};

export const fetchReducer = (state = initialState, { type, payload }) => {
  // console.log(type, payload);
  switch (type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        loading: false,
        userData: payload,
        error: "",
      };
    case FETCH_DATA_FAILURE:
      return {
        loading: false,
        userData: [],
        error: payload,
      };
    default:
      return state;
  }
};
