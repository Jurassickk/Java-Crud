import { useState, useEffect } from 'react';
import { categoryService } from '../services/categoryService';

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newCategory, setNewCategory] = useState("");
  const [editingCategory, setEditingCategory] = useState({ index: -1, name: "" });
  const [isCategoryFormVisible, setIsCategoryFormVisible] = useState(false);

  // Cargar categorías
  const fetchCategories = async () => {
    try {
      setLoading(true);
      const data = await categoryService.getAllCategories();
      setCategories(data);
      setError(null);
    } catch (err) {
      setError("Error al cargar las categorías");
      console.error("Error fetching categories:", err);
    } finally {
      setLoading(false);
    }
  };

  // Cargar al inicio
  useEffect(() => {
    fetchCategories();
  }, []);

  // Agregar categoría
  const handleAddCategory = async (e) => {
    e.preventDefault();

    if (newCategory) {
      try {
        await categoryService.addCategory({ name: newCategory });
        await fetchCategories();
        setNewCategory("");
        setIsCategoryFormVisible(false);
      } catch (err) {
        console.error("Error adding category:", err);
        setError("Error al agregar la categoría");
      }
    }
  };

  // Iniciar edición de categoría
  const handleEditCategoryStart = (index, categoryName) => {
    setEditingCategory({ index, name: categoryName });
  };

  // Guardar categoría editada
  const handleEditCategorySave = async (categoryId, index) => {
    if (editingCategory.name) {
      try {
        // Como no tienes endpoint PUT para categorías,
        // borrar y crear nueva con el mismo ID
        await categoryService.deleteCategory(categoryId);
        await categoryService.addCategory({ 
          id: categoryId,
          name: editingCategory.name 
        });
        
        await fetchCategories();
      } catch (err) {
        console.error("Error updating category:", err);
        setError("Error al actualizar la categoría");
      }
    }
    setEditingCategory({ index: -1, name: "" });
  };

  // Eliminar categoría
  const handleDeleteCategory = async (categoryId) => {
    try {
      await categoryService.deleteCategory(categoryId);
      await fetchCategories();
    } catch (err) {
      console.error("Error deleting category:", err);
      setError("Error al eliminar la categoría");
    }
  };

  return {
    categories,
    loading,
    error,
    newCategory,
    editingCategory,
    isCategoryFormVisible,
    fetchCategories,
    handleAddCategory,
    handleEditCategoryStart,
    handleEditCategorySave,
    handleDeleteCategory,
    setNewCategory,
    setEditingCategory,
    setIsCategoryFormVisible
  };
};