export const HOSPITAL = {
    Post: async (data) => {
      try {
        const response = await api.request({
          url: "/hospital",
          method: "POST",
          data: {
            name: data.name,
            doctors: data.doctors,
          },
        });
        return response.data;
      } catch (error) {
        console.error("Error posting hospital:", error);
        throw error.response?.data || { message: "Unknown error occurred" };
      }
    },
    Get: async () => {
      try {
        const response = await api.request({
          url: "/hospital",
          method: "GET",
        });
        return response.data;
      } catch (error) {
        console.error("Error fetching hospitals:", error);
        throw error.response?.data || { message: "Unknown error occurred" };
      }
    },
  };
  