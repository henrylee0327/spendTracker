import axios from "axios";

const axiosCreator = axios.create({
  baseURL: "http://localhost:8000",
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
