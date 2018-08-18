import { call, put } from 'redux-saga/effects';
import { fetchNewProductsSuccess, fetchNewProductsFailed } from '../actions';
import { newProducts } from '../apis/mocks/responses';

export function* fetchNewProducts(action) {
   try {
      console.log(newProducts);  
      yield put(fetchNewProductsSuccess(newProducts))
   } catch (error) {
      yield put(fetchNewProductsFailed)
   }
}