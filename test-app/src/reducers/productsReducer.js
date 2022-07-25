import * as actions from "../constants/productsConstant";

const initialState = [];

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.GET_PRODUCTS:
      return payload;

    case actions.ADD_PRODUCTS:
      return {
        ...state,
        data: {
          productName: payload.productName,
          description: payload.description,
          rate: payload.rate,
        },
      };

    case actions.EDIT_PRODUCTS:
      return {
        ...state,
        data: {
          productName: payload.productName,
          description: payload.description,
          rate: payload.rate,
        },
      };

    case actions.DELETE_PRODUCTS:
      return {
        ...state,
        data: {
          id: payload.id,
        },
      };

    default:
      return state;
  }
};
