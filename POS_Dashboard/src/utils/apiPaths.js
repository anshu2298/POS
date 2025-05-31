// const BASE_URL = "http://localhost:3000";
const BASE_URL = "https://forknflamesbackend.vercel.app";
export const API_PATHS = {
  TABLES: {
    GET: `${BASE_URL}/api/table`,
    UPDATE: (id) => `${BASE_URL}/api/table/${id}/reserved`,
    ADD: `${BASE_URL}/api/table/add`,
    DELETE: (id) => `${BASE_URL}/api/table/${id}`,
  },
  MENU: `${BASE_URL}/api/menu`,
  ORDERS: {
    ADD: `${BASE_URL}/api/order/create`,
    GET: `${BASE_URL}/api/order/get`,
    GET_PREP_TIME: `${BASE_URL}/api/order/getPrepTime`,
    UPDATE_STATUS: (id) =>
      `${BASE_URL}/api/order/${id}/updateStatus`,
  },
  CUSTOMERS: {
    GET: `${BASE_URL}/api/customer/get`,
    ADD: `${BASE_URL}/api/customer/add`,
  },
};
