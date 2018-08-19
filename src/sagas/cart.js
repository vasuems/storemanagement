import { call, put } from "redux-saga/effects";
import {
  fetchNewProductsSuccess,
  fetchNewProductsFailed,
  fetchFeaturedProductsSuccess,
  fetchFeaturedProductsFailed,
  fetchProductDetailSuccess,
  fetchProductDetailFailed,
  fetchCartSuccess,
  fetchCartFailed
} from "../actions";
import { cart } from "../apis/mocks/responses";

export function* fetchCart(action) {
  try {
    yield put(fetchCartSuccess(cart));
  } catch (error) {
    yield put(fetchCartFailed());
  }
}
