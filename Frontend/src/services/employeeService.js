import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api/v1";

export const employeeService = {
  // Obtener todos los empleados
  getAllEmployees: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/employees/`);
      return response.data;
    } catch (error) {   
      console.error("Error fetching employees:", error);
      throw error;
    }
  },

  // Obtener empleado por ID  
  getEmployeeById: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/employees/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching employee ${id}:`, error);
      throw error;
    }
  },
  
  // Filtrar empleados
  getEmployeesByFilter: async (filter) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/employees/filter/${filter}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching employees by filter ${filter}:`, error);
      throw error;
    }
  },

  // Añadir nuevo empleado
  addEmployee: async (employeeData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/employees/anadir`, employeeData);
      return response.data;
    } catch (error) {
      console.error("Error creating employee:", error);
      throw error;
    }
  },

  // Eliminar empleado
  deleteEmployee: async (id) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/employees/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting employee ${id}:`, error);
      throw error;
    }
  }
};