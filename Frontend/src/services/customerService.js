import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api/v1";

export const customerService = {
  // Obtener todos los clientes
  getAllCustomers: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/customers/`);
      return response.data;
    } catch (error) {   
      console.error("Error fetching customers:", error);
      throw error;
    }
  },

  // Obtener cliente por ID  
  getCustomerById: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/customers/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching customer ${id}:`, error);
      throw error;
    }
  },
  
  // Añadir nuevo cliente
  addCustomer: async (customerData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/customers/anadir`, customerData);
      return response.data;
    } catch (error) {
      console.error("Error creating customer:", error);
      throw error;
    }
  },

  // Eliminar cliente
  deleteCustomer: async (id) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/customers/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting customer ${id}:`, error);
      throw error;
    }
  }
};