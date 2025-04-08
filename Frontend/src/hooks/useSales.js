import { useState, useEffect } from 'react';
import { saleService } from '../services/saleService';
import { saleDetailService } from '../services/saleDetailService';
import { productService } from '../services/productService';

export const useSales = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [newSale, setNewSale] = useState({
    customerId: "",
    employeeId: "",
    total: 0,
    items: [{ productId: "", quantity: 1, unitPrice: 0 }]
  });
  
  const [isSaleFormVisible, setIsSaleFormVisible] = useState(false);

  // Cargar productos para la venta
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

  // Agregar item a la venta
  const handleAddSaleItem = () => {
    setNewSale({
      ...newSale,
      items: [
        ...newSale.items,
        { productId: "", quantity: 1, unitPrice: 0 }
      ]
    });
  };

  // Eliminar item de la venta
  const handleRemoveSaleItem = (index) => {
    const updatedItems = [...newSale.items];
    updatedItems.splice(index, 1);
    
    setNewSale({
      ...newSale,
      items: updatedItems
    });
    
    calculateTotal(updatedItems);
  };

  // Actualizar item de la venta
  const handleUpdateSaleItem = (index, field, value) => {
    const updatedItems = [...newSale.items];
    
    // Si el campo es productId, actualizar también el precio unitario
    if (field === 'productId') {
      const selectedProduct = products.find(p => p.productId === parseInt(value));
      updatedItems[index] = {
        ...updatedItems[index],
        [field]: parseInt(value),
        unitPrice: selectedProduct ? selectedProduct.price : 0
      };
    } else {
      updatedItems[index] = {
        ...updatedItems[index],
        [field]: field === 'quantity' ? parseInt(value) : parseFloat(value)
      };
    }
    
    setNewSale({
      ...newSale,
      items: updatedItems
    });
    
    calculateTotal(updatedItems);
  };

  // Calcular total de la venta
  const calculateTotal = (items) => {
    const total = items.reduce((sum, item) => {
      return sum + (item.quantity * item.unitPrice);
    }, 0);
    
    setNewSale(prevSale => ({
      ...prevSale,
      total: total
    }));
  };

  // Registrar venta
  const handleRegisterSale = async (e) => {
    e.preventDefault();

    if (newSale.customerId && newSale.employeeId && newSale.items.length > 0) {
      try {
        // Registrar la venta principal
        const saleData = {
          customerId: { customerId: parseInt(newSale.customerId) },
          employeeId: { employeeId: parseInt(newSale.employeeId) },
          total: newSale.total
        };
        
        const saleResponse = await saleService.save(saleData);
        
        // Registrar los detalles de la venta
        for (const item of newSale.items) {
          const detailData = {
            sale: { saleId: saleResponse.saleId },
            product: { productId: item.productId },
            quantity: item.quantity,
            unitPrice: item.unitPrice
          };
          
          await saleDetailService.save(detailData);
        }
        
        // Resetear el formulario
        setNewSale({
          customerId: "",
          employeeId: "",
          total: 0,
          items: [{ productId: "", quantity: 1, unitPrice: 0 }]
        });
        
        setIsSaleFormVisible(false);
      } catch (err) {
        console.error("Error registering sale:", err);
        setError("Error al registrar la venta");
      }
    }
  };

  return {
    products,
    loading,
    error,
    newSale,
    isSaleFormVisible,
    handleAddSaleItem,
    handleRemoveSaleItem,
    handleUpdateSaleItem,
    handleRegisterSale,
    setNewSale,
    setIsSaleFormVisible
  };
};