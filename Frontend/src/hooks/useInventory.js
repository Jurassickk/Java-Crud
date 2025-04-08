import { useState, useEffect } from 'react';
import { inventoryService } from '../services/inventoryService';
import { productService } from '../services/productService';

export const useInventory = () => {
  const [inventory, setInventory] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newInventory, setNewInventory] = useState({
    inventory_id: null,
    product_id: "",
    stock: 0
  });
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Cargar inventario
  const fetchInventory = async () => {
    try {
      setLoading(true);
      const data = await inventoryService.getAllInventory();
      setInventory(data);
      setError(null);
    } catch (err) {
      setError("Error al cargar el inventario");
      console.error("Error fetching inventory:", err);
    } finally {
      setLoading(false);
    }
  };

  // Cargar productos para el selector
  const fetchProducts = async () => {
    try {
      const data = await productService.getAllProducts();
      setProducts(data);
    } catch (err) {
      console.error("Error fetching products for inventory:", err);
    }
  };

  // Cargar al inicio
  useEffect(() => {
    fetchInventory();
    fetchProducts();
  }, []);

  // Manejar cambios en el formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewInventory({
      ...newInventory,
      [name]: name === 'stock' ? parseInt(value) : value,
    });
  };

  // Resetear formulario
  const resetInventoryForm = () => {
    setNewInventory({
      inventory_id: null,
      product_id: "",
      stock: 0
    });
    setIsFormVisible(false);
  };

  // Enviar formulario (agregar)
  const handleSubmitInventory = async (e) => {
    e.preventDefault();
    try {
      const inventoryData = {
        product: { product_id: parseInt(newInventory.product_id) },
        stock: newInventory.stock
      };
      
      await inventoryService.addInventory(inventoryData);
      await fetchInventory();
      resetInventoryForm();
      return true;
    } catch (err) {
      console.error("Error saving inventory:", err);
      setError("Error al crear el registro de inventario");
      return false;
    }
  };

  // Eliminar registro de inventario
  const handleDeleteInventory = async (id) => {
    if (!id) {
      setError("ID de inventario inválido");
      return;
    }
    
    try {
      await inventoryService.deleteInventory(id);
      await fetchInventory();
    } catch (err) {
      console.error("Error deleting inventory:", err);
      setError("Error al eliminar el registro de inventario");
    }
  };

  return {
    inventory,
    products,
    loading,
    error,
    newInventory,
    isFormVisible,
    fetchInventory,
    handleInputChange,
    handleSubmitInventory,
    resetInventoryForm,
    handleDeleteInventory,
    setIsFormVisible
  };
};