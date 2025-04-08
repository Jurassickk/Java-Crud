import { useState } from 'react';
import { productCategoryService } from '../services/productCategoryService';
import { productService } from '../services/productService';
import { categoryService } from '../services/categoryService';

export const useProductCategory = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newAssociation, setNewAssociation] = useState({
    productId: "",
    categoryId: ""
  });
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Cargar productos y categorías
  const fetchData = async () => {
    try {
      setLoading(true);
      const [productsData, categoriesData] = await Promise.all([
        productService.getAllProducts(),
        categoryService.getAllCategories()
      ]);
      
      setProducts(productsData);
      setCategories(categoriesData);
      setError(null);
    } catch (err) {
      setError("Error al cargar los datos");
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  // Crear asociación entre producto y categoría
  const handleCreateAssociation = async (e) => {
    e.preventDefault();

    if (newAssociation.productId && newAssociation.categoryId) {
      try {
        const associationData = {
          product: { productId: parseInt(newAssociation.productId) },
          category: { categoryId: parseInt(newAssociation.categoryId) }
        };
        
        await productCategoryService.save(associationData);
        
        // Reiniciar el formulario
        setNewAssociation({
          productId: "",
          categoryId: ""
        });
        
        setIsFormVisible(false);
        // Aquí no podemos recargar las asociaciones porque no hay endpoint GET
      } catch (err) {
        console.error("Error creating product-category association:", err);
        setError("Error al crear la asociación entre producto y categoría");
      }
    }
  };

  return {
    products,
    categories,
    loading,
    error,
    newAssociation,
    isFormVisible,
    fetchData,
    handleCreateAssociation,
    setNewAssociation,
    setIsFormVisible
  };
};