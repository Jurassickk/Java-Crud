import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api/v1";

export const inventoryService = {
  // Obtener todo el inventario
  getAllInventory: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/inventory/`);
      return response.data;
    } catch (error) {   
      console.error("Error fetching inventory:", error);
      throw error;
    }
  },

  // Obtener inventario por ID de producto
  getInventoryByProductId: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/inventory/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching inventory for product ${id}:`, error);
      throw error;
    }
  },
  
  // Añadir nuevo registro de inventario
  addInventory: async (inventoryData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/inventory/anadir`, inventoryData);
      return response.data;
    } catch (error) {
      console.error("Error creating inventory record:", error);
      throw error;
    }
  },

  // Eliminar registro de inventario
  deleteInventory: async (id) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/inventory/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting inventory record ${id}:`, error);
      throw error;
    }
  }
};