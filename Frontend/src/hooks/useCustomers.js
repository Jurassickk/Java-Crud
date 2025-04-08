import { useState, useEffect } from 'react';
import { customerService } from '../services/customerService';

export const useCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newCustomer, setNewCustomer] = useState({
    customer_id: null,
    name: "",
    email: ""
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Cargar clientes
  const fetchCustomers = async () => {
    try {
      setLoading(true);
      const data = await customerService.getAllCustomers();
      setCustomers(data);
      setError(null);
    } catch (err) {
      setError("Error al cargar los clientes");
      console.error("Error fetching customers:", err);
    } finally {
      setLoading(false);
    }
  };

  // Cargar al inicio
  useEffect(() => {
    fetchCustomers();
  }, []);

  // Manejar cambios en el formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer({
      ...newCustomer,
      [name]: value,
    });
  };

  // Resetear formulario
  const resetCustomerForm = () => {
    setNewCustomer({
      customer_id: null,
      name: "",
      email: ""
    });
    setIsFormVisible(false);
    setIsEditing(false);
  };

  // Enviar formulario (agregar)
  const handleSubmitCustomer = async (e) => {
    e.preventDefault();
    try {
      const customerData = {
        name: newCustomer.name,
        email: newCustomer.email
      };
      
      await customerService.addCustomer(customerData);
      await fetchCustomers();
      resetCustomerForm();
      return true;
    } catch (err) {
      console.error("Error saving customer:", err);
      setError("Error al crear el cliente");
      return false;
    }
  };

  // Eliminar cliente
  const handleDeleteCustomer = async (id) => {
    if (!id) {
      setError("ID de cliente inválido");
      return;
    }
    
    try {
      await customerService.deleteCustomer(id);
      await fetchCustomers();
    } catch (err) {
      console.error("Error deleting customer:", err);
      setError("Error al eliminar el cliente");
    }
  };

  return {
    customers,
    loading,
    error,
    newCustomer,
    isFormVisible,
    fetchCustomers,
    handleInputChange,
    handleSubmitCustomer,
    resetCustomerForm,
    handleDeleteCustomer,
    setIsFormVisible
  };
};