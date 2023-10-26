import api from "./api";

export const apiClient = {
  post: async (endpoint, data) => {
    try {
      const response = await api.post(endpoint, data);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  get: async (endpoint) => {
    try {
      const response = await api.get(endpoint);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
};
