import { call, put } from 'redux-saga/effects';
import {
  fetchSuppliersSuccess,
  fetchSuppliersFailed,
  fetchSupplierDetailsSuccess,
  fetchSupplierDetailsFailed,
} from '../actions';
import { suppliers, supplierDetails } from '../apis/mocks/responses';

export function* fetchSuppliers(action) {
  try {
    yield put(fetchSuppliersSuccess(suppliers));
  } catch (error) {
    yield put(fetchSuppliersFailed());
  }
}

export function* fetchSupplierDetails(action) {
  try {
    yield put(fetchSupplierDetailsSuccess(supplierDetails));
  } catch (error) {
    yield put(fetchSupplierDetailsFailed());
  }
}
