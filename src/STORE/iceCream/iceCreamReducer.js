import { BUY_ICECREAM } from "./iceCreamType";

const initaialState = {
  numofIceCreams: 50,
};

export const iceCreamReducer = (state = initaialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numofIceCreams: state.numofIceCreams - 1,
      };
    default:
      return state;
  }
};
