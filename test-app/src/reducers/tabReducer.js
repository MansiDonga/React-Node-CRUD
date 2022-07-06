import * as actions from "../constants/tabConstant";

const tabReducer = (state = [], action) => {
  switch (action.type) {
    case actions.GET_TAB:
      return {
        ...state,
        tab: action.payload,
      };

    case actions.NEXT_TAB:
      return {
        ...state,
        nextTab: action.payload,
      };

    default:
      return state;
  }
};

export default tabReducer;
