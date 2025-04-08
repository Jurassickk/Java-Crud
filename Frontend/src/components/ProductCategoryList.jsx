import React, { useEffect } from "react";
import { useProductCategory } from "../hooks/useProductCategory";

function ProductCategoryList() {
  const {
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
  } = useProductCategory();

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div className="loading">Cargando datos...</div>;
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Error</h2>
        <p>{error}</p>
        <button onClick={() => fetchData()}>Reintentar</button>
      </div>
    );
  }

  return (
    <div className="product-category-section">
      <div className="section-header">
        <h2>Product Category Association</h2>
        <button 
          className="add-btn" 
          onClick={() => setIsFormVisible(!isFormVisible)}
        >
          {isFormVisible ? "Cancel" : "Add Association"}
        </button>
      </div>

      {isFormVisible && (
        <div className="form-container">
          <h3>Associate Product with Category</h3>
          <form onSubmit={handleCreateAssociation} className="association-form">
            <div className="form-group">
              <label htmlFor="productSelect">Product</label>
              <select
                id="productSelect"
                value={newAssociation.productId}
                onChange={(e) => setNewAssociation({
                  ...newAssociation,
                  productId: e.target.value
                })}
                required
              >
                <option value="">Select a product</option>
                {products.map((product) => (
                  <option key={product.productId} value={product.productId}>
                    {product.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="categorySelect">Category</label>
              <select
                id="categorySelect"
                value={newAssociation.categoryId}
                onChange={(e) => setNewAssociation({
                  ...newAssociation,
                  categoryId: e.target.value
                })}
                required
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-actions">
              <button type="submit" className="submit-btn">
                Create Association
              </button>
              <button 
                type="button" 
                className="cancel-btn" 
                onClick={() => setIsFormVisible(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="note-card">
        <p>Note: This page only allows creating new associations between products and categories. View and management functionality will be implemented in future updates when the corresponding API endpoints are available.</p>
      </div>
    </div>
  );
}

export default ProductCategoryList;