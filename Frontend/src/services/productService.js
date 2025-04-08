import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api/v1";

export const productService = {
  // Obtener todos los productos
  getAllProducts: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/products/`);
      return response.data;
    } catch (error) {   
      console.error("Error fetching products:", error);
      throw error;
    }
  },

  // Obtener producto por ID  
  getProductById: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/products/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching product ${id}:`, error);
      throw error;
    }
  },
  
  // Añadir nuevo producto
  addProduct: async (productData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/products/anadir`, productData);
      return response.data;
    } catch (error) {
      console.error("Error creating product:", error);
      throw error;
    }
  },

  // Actualizar producto existente
  updateProduct: async (id, productData) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/products/${id}`, productData);
      return response.data;
    } catch (error) {
      console.error(`Error updating product ${id}:`, error);
      throw error;
    }
  },

  // Eliminar producto
  deleteProduct: async (id) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/products/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting product ${id}:`, error);
      throw error;
    }
  },

  // Buscar por rango de precios
  getProductsByPriceRange: async (minPrice, maxPrice) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/products/price-range?minPrice=${minPrice}&maxPrice=${maxPrice}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching products by price range:", error);
      throw error;
    }
  },

  // Buscar por tipo
  getProductsByType: async (type) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/products/type/${type}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching products of type ${type}:`, error);
      throw error;
    }
  }
};