import { useState, useEffect } from 'react';
import { supplierService } from '../services/supplierService';

export const useSuppliers = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newSupplier, setNewSupplier] = useState("");
  const [isSupplierFormVisible, setIsSupplierFormVisible] = useState(false);

  // Cargar proveedores (aunque no haya endpoint GET, preparamos la función)
  const fetchSuppliers = async () => {
    // Esta función sería implementada cuando exista el endpoint GET
    setLoading(false);
  };

  // Cargar al inicio
  useEffect(() => {
    fetchSuppliers();
  }, []);

  // Agregar proveedor
  const handleAddSupplier = async (e) => {
    e.preventDefault();

    if (newSupplier) {
      try {
        await supplierService.save({ name: newSupplier });
        setNewSupplier("");
        setIsSupplierFormVisible(false);
        // En un caso real, aquí recargaríamos la lista de proveedores
      } catch (err) {
        console.error("Error adding supplier:", err);
        setError("Error al agregar el proveedor");
      }
    }
  };

  return {
    suppliers,
    loading,
    error,
    newSupplier,
    isSupplierFormVisible,
    handleAddSupplier,
    setNewSupplier,
    setIsSupplierFormVisible
  };
};