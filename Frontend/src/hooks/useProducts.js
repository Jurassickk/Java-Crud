import { useState, useEffect } from 'react';
import { productService } from '../services/productService';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newProduct, setNewProduct] = useState({
    product_id: null,
    name: "",
    category: "",
    price: "",
    type: "",
    image: "https://placehold.co/300x450/333333/ffffff?text=New",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [imagePreview, setImagePreview] = useState("");

  // Cargar productos
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await productService.getAllProducts();
      setProducts(data);
      setError(null);
    } catch (err) {
      setError("Error al cargar los productos");
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  // Cargar al inicio
  useEffect(() => {
    fetchProducts();
  }, []);

  // Manejar cambios en el formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });

    // Actualizar vista previa de imagen si cambia la URL
    if (name === "image") {
      setImagePreview(value);
    }
  };

  // Resetear formulario
  const resetProductForm = () => {
    setNewProduct({
      product_id: null,
      name: "",
      category: "",
      price: "",  
      type: "",
      image: "https://placehold.co/300x450/333333/ffffff?text=New",
    });
    setImagePreview("");
    setIsFormVisible(false);
    setIsEditing(false);
  };

  // Enviar formulario (agregar o actualizar)
  const handleSubmitProduct = async (e) => {
    e.preventDefault();
    try {
      const productData = {
        name: newProduct.name,
        category: newProduct.category,
        price: Number.parseFloat(newProduct.price),
        type: newProduct.type || newProduct.category,
        image: newProduct.image || "https://placehold.co/300x450/333333/ffffff?text=New",
      };
      
      if (isEditing && newProduct.product_id) {
        await productService.updateProduct(newProduct.product_id, productData);
      } else {
        await productService.addProduct(productData);
      }
      
      await fetchProducts();
      resetProductForm();
      return true;
    } catch (err) {
      console.error("Error saving product:", err);
      setError(isEditing ? "Error al actualizar el producto" : "Error al crear el producto");
      return false;
    }
  };

  // Editar producto
  const handleEditProduct = (product) => {
    if (!product) {
      setError("El producto no existe");
      return;
    }
    
    setNewProduct({
      product_id: product.product_id,
      name: product.name,
      category: product.category,
      price: product.price.toString(),
      type: product.type || product.category,
      image: product.image || "https://placehold.co/300x450/333333/ffffff?text=No+Image",
    });
    
    setImagePreview(product.image);
    setIsFormVisible(true);
    setIsEditing(true);
  };

  // Eliminar producto
  const handleDeleteProduct = async (id) => {
    if (!id) {
      setError("ID de producto inválido");
      return;
    }
    
    try {
      await productService.deleteProduct(id);
      await fetchProducts();
    } catch (err) {
      console.error("Error deleting product:", err);
      setError("Error al eliminar el producto");
    }
  };

  return {
    products,
    loading,
    error,
    newProduct,
    isEditing,
    isFormVisible,
    imagePreview,
    fetchProducts,
    handleInputChange,
    handleSubmitProduct,
    resetProductForm,
    handleEditProduct,
    handleDeleteProduct,
    setIsFormVisible,
    setIsEditing,
  };
};