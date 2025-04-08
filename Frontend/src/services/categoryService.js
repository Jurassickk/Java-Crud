import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api/v1";

export const categoryService = {
  // Obtener todas las categorías
  getAllCategories: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/categories/`);
      return response.data;
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error;
    }
  },

  // Obtener categoría por ID
  getCategoryById: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/categories/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching category ${id}:`, error);
      throw error;
    }
  },

  // Añadir nueva categoría
  addCategory: async (categoryData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/categories/anadir`, categoryData);
      return response.data;
    } catch (error) {
      console.error("Error creating category:", error);
      throw error;
    }
  },

  // Eliminar categoría
  deleteCategory: async (id) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/categories/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting category ${id}:`, error);
      throw error;
    }
  }
};