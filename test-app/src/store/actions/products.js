import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT_BY_ID,
  ADD_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
} from "../constants/constants";

import {
  getAll,
  update,
  deleteProduct,
  create,
  get,
} from "../../services/product.service";

export const getAllProducts = () => async (dispatch) => {
  try {
    const res = await getAll();
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getProductsByID = (id) => async (dispatch) => {
  try {
    const res = await get(id);
    dispatch({
      type: GET_PRODUCT_BY_ID,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addProduct = (data) => async (dispatch) => {
  try {
    const res = await create(data);
    dispatch({
      type: ADD_PRODUCT,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};

export const removeProduct = (id) => async (dispatch) => {
  try {
    const res = await deleteProduct(id);
    dispatch({
      type: DELETE_PRODUCT,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const editProduct = (id, data) => async (dispatch) => {
  try {
    const res = await update(id, data);
    dispatch({
      type: EDIT_PRODUCT,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};
