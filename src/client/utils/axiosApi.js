import axios from "axios";
import { DEV_DOMAIN } from '../../config/default'

const axiosCreator = axios.create({
  baseURL: DEV_DOMAIN,
});
const axiosApi = async (method, url, data = {}) => {
  try {
    const response = await axiosCreator({
      method,
      url,
      data,
    });
    return response;
  } catch (err) {
    throw err;
  }
};

export default axiosApi;
