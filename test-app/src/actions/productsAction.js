import * as actions from "../constants/productsConstant";

export const getAllProducts = () => {
  return {
    type: actions.GET_PRODUCTS,
  };
};

export const addProduct = (data) => {
  return {
    type: actions.ADD_PRODUCTS,
    payload: {
      productName: data.productName,
      description: data.description,
      rate: data.rate,
    },
  };
};
