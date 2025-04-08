import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api/v1";

export const saleDetailService = {
  // Registrar nuevo detalle de venta
  addSaleDetail: async (saleDetailData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/sale-details/`, saleDetailData);
      return response.data;
    } catch (error) {
      console.error("Error creating sale detail:", error);
      throw error;
    }
  }
};