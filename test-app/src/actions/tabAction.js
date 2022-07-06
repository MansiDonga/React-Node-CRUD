import * as actions from "../constants/tabConstant";

export const getCurrentTab = () => {
  return {
    type: actions.GET_TAB,
  };
};

export const changeTab = (data) => {
  return {
    type: actions.NEXT_TAB,
    payload: {
      tabName: data,
    },
  };
};
