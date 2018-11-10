import { call, put } from 'redux-saga/effects';
import {
  fetchSuppliersSuccess,
  fetchSuppliersFailed,
} from '../actions';
import { suppliers } from '../apis/mocks/responses';

export function* fetchSuppliers(action) {
  try {
    yield put(fetchSuppliersSuccess(suppliers));
  } catch (error) {
    yield put(fetchSuppliersFailed());
  }
}