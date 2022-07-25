import * as actions from "../constants/productsConstant";

export const getAllProducts = (data) => {
  return {
    type: actions.GET_PRODUCTS,
    payload: data
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

export const editProduct = (data) => {
  return {
    type: actions.EDIT_PRODUCTS,
    payload: {
      productName: data.productName,
      description: data.description,
      rate: data.rate,
    },
  };
};
