import { takeEvery, takeLatest, all } from "redux-saga/effects";
import {
  FETCH_NEW_PRODUCTS,
  FETCH_FEATURED_PRODUCTS,
  FETCH_PRODUCT_DETAIL,
  FETCH_CART
} from "../actions";
import {
  fetchNewProducts,
  fetchFeaturedProducts,
  fetchProductDetail
} from "./product";
import { fetchCart } from "./cart";

export default function* rootSaga() {
  yield all([
    takeLatest(FETCH_NEW_PRODUCTS, fetchNewProducts),
    takeLatest(FETCH_FEATURED_PRODUCTS, fetchFeaturedProducts),
    takeLatest(FETCH_PRODUCT_DETAIL, fetchProductDetail),
    takeLatest(FETCH_CART, fetchCart)
  ]);
}
