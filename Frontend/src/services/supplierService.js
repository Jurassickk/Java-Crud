import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api/v1";

export const supplierService = {
  // Registrar nuevo proveedor
  addSupplier: async (supplierData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/suppliers/`, supplierData);
      return response.data;
    } catch (error) {
      console.error("Error creating supplier:", error);
      throw error;
    }
  }
};