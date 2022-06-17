import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT_BY_ID,
  ADD_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
} from "../constants/constants";

const initialState = [];

function productReducer(products = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_PRODUCTS:
      return payload;

    case GET_PRODUCT_BY_ID:
      return payload;

    case ADD_PRODUCT:
      return [...products, payload];

    case EDIT_PRODUCT:
      return products.map((product) => {
        if (product.id === payload.id) {
          return {
            ...product,
            ...payload,
          };
        } else {
          return product;
        }
      });

    case DELETE_PRODUCT:
      return products.filter(({ id }) => id !== payload.id);

    default:
      return products;
  }
}

export default productReducer;
