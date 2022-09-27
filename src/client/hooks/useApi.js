import endpoints from "../constants/api_endpoints";
import axiosApi from "../utils/axiosApi";

const useApi = () => {
  return {
    endpoints,
    api: axiosApi,
  };
};

export default useApi;
