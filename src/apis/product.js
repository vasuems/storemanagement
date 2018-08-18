import axios from "axios";

const prefix = "http://localhost:3000/api/v1";

export function fetchNewArrivals(pageNo, pageSize) {
  return axios.get(`${prefix}/products?pageNo=${pageNo}&pageSize=${pageSize}`);
}
