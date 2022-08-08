import {
    CREATE_PRODUCT,
    RETRIEVE_PRODUCTS,
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
    DELETE_ALL_PRODUCTS,
  } from "./types";
  import ProductDataService from "../services/ProductService";
  export const createProduct = (title, description) => async (dispatch) => {
    try {
      const res = await ProductDataService.create({ title, description });
      dispatch({
        type: CREATE_PRODUCT,
        payload: res.data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  export const retrieveProducts = () => async (dispatch) => {
    try {
      const res = await ProductDataService.getAll();
      dispatch({
        type: RETRIEVE_PRODUCTS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  export const updateProduct = (id, data) => async (dispatch) => {
    try {
      const res = await ProductDataService.update(id, data);
      dispatch({
        type: UPDATE_PRODUCT,
        payload: data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  export const deleteProduct = (id) => async (dispatch) => {
    try {
      await ProductDataService.remove(id);
      dispatch({
        type: DELETE_ALL_PRODUCTS,
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
  };
  export const deleteAllProducts = () => async (dispatch) => {
    try {
      const res = await ProductDataService.removeAll();
      dispatch({
        type: DELETE_ALL_PRODUCTS,
        payload: res.data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  export const findProductsByTitle = (title) => async (dispatch) => {
    try {
      const res = await ProductDataService.findByTitle(title);
      dispatch({
        type: RETRIEVE_PRODUCTS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };