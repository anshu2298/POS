// const BASE_URL = "http://localhost:3000/api";
const BASE_URL = "https://forknflamesbackend.vercel.app/";
export const API_PATHS = {
  TABLES: {
    GET: `${BASE_URL}/api/table`,
    UPDATE: (id) => `${BASE_URL}/api/table/${id}/reserved`,
  },
  MENU: `${BASE_URL}/api/menu`,
  ORDERS: {
    ADD: `${BASE_URL}/api/order/create`,
  },
  CUSTOMERS: {
    GET: `${BASE_URL}/api/customer/get`,
    ADD: `${BASE_URL}/api/customer/add`,
  },
};
