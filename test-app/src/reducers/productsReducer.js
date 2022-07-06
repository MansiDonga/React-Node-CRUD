import * as actions from "../constants/productsConstant";

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case actions.GET_PRODUCTS:
      return { ...state, data: action.payload };
      
    case actions.ADD_PRODUCTS:
      return {
        ...state,
        data: {
          productName: action.payload.productName,
          description: action.payload.description,
          rate: action.payload.rate,
        },
      };

    default:
      return state;
  }
};
export default productsReducer;
