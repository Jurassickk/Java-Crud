import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api/v1";

export const saleService = {
  // Registrar nueva venta
  addSale: async (saleData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/sales/`, saleData);
      return response.data;
    } catch (error) {
      console.error("Error creating sale:", error);
      throw error;
    }
  }
};