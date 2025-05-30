const BASE_URL = "http://localhost:3000/api";

export const API_PATHS = {
  TABLES: {
    GET: `${BASE_URL}/table`,
    UPDATE: (id) => `${BASE_URL}/table/${id}/reserved`,
  },
  MENU: `${BASE_URL}/menu`,
  ORDERS: {
    ADD: `${BASE_URL}/order/create`,
  },
  CUSTOMERS: {
    GET: `${BASE_URL}/customer/get`,
    ADD: `${BASE_URL}/customer/add`,
  },
};
