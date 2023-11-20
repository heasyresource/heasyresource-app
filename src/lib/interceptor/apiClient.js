import api from "./api";

export const apiClient = {
  post: async (endpoint, data, config) => {
    try {
      const response = await api.post(endpoint, data, config);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  put: async (endpoint, data, config) => {
    try {
      const response = await api.put(endpoint, data, config);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  get: async (endpoint, config) => {
    try {
      const response = await api.get(endpoint, config);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  delete: async (endpoint, config) => {
    try {
      const response = await api.delete(endpoint, config);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
};
