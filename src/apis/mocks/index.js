import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { newArrivals } from './responses';

const prefix = 'http://localhost:3000/api/v1';
const mock = new MockAdapter(axios);

mock.onGet(`${prefix}/products`, { params: { pageNo, pageSize } }).reply(200, {
  newArrivals
});
