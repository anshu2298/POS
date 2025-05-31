// const BASE_URL = "http://localhost:3000/api";
const BASE_URL = "https://forknflamesbackend.vercel.app";
export const API_PATHS = {
  TABLES: {
    GET: `${BASE_URL}/table`,
    UPDATE: (id) => `${BASE_URL}/table/${id}/reserved`,
    ADD: `${BASE_URL}/table/add`,
    DELETE: (id) => `${BASE_URL}/table/${id}`,
  },
  MENU: `${BASE_URL}/menu`,
  ORDERS: {
    ADD: `${BASE_URL}/order/create`,
    GET: `${BASE_URL}/order/get`,
    GET_PREP_TIME: `${BASE_URL}/order/getPrepTime`,
    UPDATE_STATUS: (id) =>
      `${BASE_URL}/order/${id}/updateStatus`,
  },
  CUSTOMERS: {
    GET: `${BASE_URL}/customer/get`,
    ADD: `${BASE_URL}/customer/add`,
  },
};
