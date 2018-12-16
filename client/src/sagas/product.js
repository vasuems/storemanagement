import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchProductCategoriesSuccess,
  fetchProductCategoriesFailed,
  fetchProductsSuccess,
  fetchProductsFailed,
  submitProductSuccess,
  submitProductFailed,
  fetchProductDetailsSuccess,
  fetchProductDetailsFailed,
  fetchProductCategoryDetailsSuccess,
  fetchProductCategoryDetailsFailed,
  authFailed,
} from '../actions';
import config from '../config';

export function* fetchProductCategories(action) {
  try {
    const { storeCode, pageNo, pageSize } = action.value;
    const res = yield axios({
      method: 'get',
      url: `${config.apiDomain}/stores/${storeCode}/categories?page=${pageNo}&size=${pageSize}`,
      headers: {
        authorization: localStorage.getItem(config.accessTokenKey),
      },
    });

    yield put(fetchProductCategoriesSuccess(res.data));
  } catch (error) {
    if (error.response.status === 401) {
      yield put(authFailed());
    } else {
      yield put(fetchProductCategoriesFailed());
    }
  }
}

export function* fetchProducts(action) {
  try {
    const { storeCode, pageNo, pageSize } = action.value;
    const res = yield axios({
      method: 'get',
      url: `${config.apiDomain}/stores/${storeCode}/products?page=${pageNo}&size=${pageSize}`,
      headers: {
        authorization: localStorage.getItem(config.accessTokenKey),
      },
    });

    yield put(fetchProductsSuccess(res.data));
  } catch (error) {
    if (error.response.status === 401) {
      yield put(authFailed());
    } else {
      yield put(fetchProductsFailed());
    }
  }
}

export function* fetchProductDetails(action) {
  try {
    const res = yield axios({
      method: 'get',
      url: `${config.apiDomain}/stores/${action.value.storeCode}/products/${
        action.value.productCode
      }`,
      headers: {
        authorization: localStorage.getItem(config.accessTokenKey),
      },
    });

    yield put(fetchProductDetailsSuccess(res.data));
  } catch (error) {
    if (error.response.status === 401) {
      yield put(authFailed());
    } else {
      yield put(fetchProductDetailsFailed());
    }
  }
}

export function* addProduct(action){
  try{
    console.log(action)
    // const res = yield axios({
    //   method: 'post',
    //   url: `${config.apiDomain}/stores/${action.value.storeCode}/products`,
    //   headers: {
    //     authorization: localStorage.getItem(config.accessTokenKey),
    //   },
    //   data: {
    //     name: "Product 2",
    //     categoryId: "cat123",
    //     storeId: "asdfasdfasdfasd",
    //     sku: "afdsafsd2342asdfasd",
    //     description: "Test product 2",
    //     quantity: 100,
    //     allowQuantity: true,
    //     unitPrice: 100.00,
    //     cost: 87.00,
    //     coverImage: "https://www.sandisk.com/content/dam/sandisk-main/en_us/assets/about/media/product/retail/usb/cruzer_blade_usb_flash_drive/SDCZ50_angle_Large.jpg"
    //   },
    // });

    // yield put(submitProductSuccess(res.data));
  }catch(error){
    if (error.response.status === 401) {
      yield put(authFailed());
    } else {
      yield put(submitProductFailed());
    }
  }
}

export function* fetchProductCategoryDetails(action) {
  try {
    const res = yield axios({
      method: 'get',
      url: `${config.apiDomain}/stores/${action.value.storeCode}/categories/${
        action.value.categoryCode
      }`,
      headers: {
        authorization: localStorage.getItem(config.accessTokenKey),
      },
    });

    yield put(fetchProductCategoryDetailsSuccess(res.data));
  } catch (error) {
    if (error.response.status === 401) {
      yield put(authFailed());
    } else {
      yield put(fetchProductCategoryDetailsFailed());
    }
  }
}
