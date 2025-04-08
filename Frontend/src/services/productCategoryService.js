import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api/v1";

export const productCategoryService = {
  // Añadir relación producto-categoría
  addProductCategory: async (productCategoryData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/product-category/`, productCategoryData);
      return response.data;
    } catch (error) {
      console.error("Error creating product-category relationship:", error);
      throw error;
    }
  }
};