import { api } from "../config/axiosConfig";

export const DOCTOR = {
  Post: async (data) => {
    try {
      const response = await api.request({
        url: "/doctors",
        method: "POST",
        data: {
          name: data.name,
          specialization: data.specialization,
          phone: data.phone,
          availability: data.availability,
          hospitalId: data.hospitalId,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error posting doctor:", error);
      throw error.response?.data || { message: "Unknown error occurred" };
    }
  },
  Get: async () => {
    try {
      const response = await api.request({
        url: "/doctors",
        method: "GET",
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching doctors:", error);
      throw error.response?.data || { message: "Unknown error occurred" };
    }
  },
  GetById: async (id) => {
    try {
      const response = await api.request({
        url: `/doctors/${id}`,
        method: "GET",
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching doctor:", error);
      throw error.response?.data || { message: "Unknown error occurred" };
    }
  },
  Delete: async (id) => {
    try {
      const response = await api.request({
        url: `/doctors/${id}`,
        method: "DELETE",
      });
      return response.data;
    } catch (error) {
      console.error("Error deleting doctor:", error);
      throw error.response?.data || { message: "Unknown error occurred" };
    }
  },
};
