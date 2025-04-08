import React from "react";
import { useProducts } from "../hooks/useProducts";

function ProductList({ categories }) {
  const {
    products,
    loading,
    error,
    newProduct,
    isEditing,
    isFormVisible,
    imagePreview, 
    handleInputChange,
    handleSubmitProduct,
    resetProductForm,
    handleEditProduct,
    handleDeleteProduct,
    setIsFormVisible,
    setIsEditing,
  } = useProducts();

  if (loading) {
    return <div className="loading">Cargando productos...</div>;
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Error</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Reintentar</button>
      </div>
    );
  }

  const handleSafeImageError = (e) => {
    e.target.src = "https://placehold.co/300x450/333333/ffffff?text=Error";
  };

  return (
    <div className="products-section">
      <div className="section-header">
        <h2>Product List</h2>
        <button
          className="add-btn"
          onClick={() => {
            if (isFormVisible && !isEditing) {
              resetProductForm();
            } else {
              setIsFormVisible(!isFormVisible);
              setIsEditing(false);
              // Reset the form when adding a new product
              if (!isFormVisible) resetProductForm();
            }
          }}
        >
          {isFormVisible && !isEditing ? "Cancel" : "Add New Product"}
        </button>
      </div>

      {isFormVisible && (
        <div className="form-container">
          <h3>{isEditing ? "Edit Product" : "Add New Product"}</h3>
          <form onSubmit={handleSubmitProduct} className="product-form">
            <div className="form-group">
              <label htmlFor="name">Product Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={newProduct.name || ""}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select id="category" name="category" value={newProduct.category || ""} onChange={handleInputChange}>
                <option value="">No Category</option>
                {categories && categories.map((category) => (
                  <option key={category.id || category} value={category.name || category}>
                    {category.name || category}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="type">Type</label>
              <input
                type="text"
                id="type"
                name="type"
                value={newProduct.type || ""}
                onChange={handleInputChange}
                placeholder="Product type"
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="price">Price ($)</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  min="0.01"
                  step="0.01"
                  value={newProduct.price || ""}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="image">Image URL</label>
              <input
                type="text"
                id="image"
                name="image"
                value={newProduct.image || ""}
                onChange={handleInputChange}
                placeholder="Enter image URL"
              />
            </div>

            {/* Image Preview */}
            {(newProduct.image || imagePreview) && (
              <div className="image-preview">
                <label>Image Preview:</label>
                <div className="preview-container">
                  <img
                    src={newProduct.image || imagePreview || "https://placehold.co/300x450/333333/ffffff?text=Preview"}
                    alt="Preview"
                    onError={handleSafeImageError}
                  />
                </div>
              </div>
            )}

            <div className="form-actions">
              <button type="submit" className="submit-btn">
                {isEditing ? "Update Product" : "Add Product"}
              </button>
              <button 
                type="button" 
                className="cancel-btn" 
                onClick={(e) => {
                  e.preventDefault();
                  resetProductForm();
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Type</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products && products.length > 0 ? (
              products.map((product) => (
                <tr key={product.product_id}>
                  <td>
                    <img
                      src={product.image || "https://placehold.co/300x450/333333/ffffff?text=No+Image"}
                      alt={product.name}
                      className="product-thumbnail"
                      onError={handleSafeImageError}
                    />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.category || "No Category"}</td>
                  <td>{product.type || "N/A"}</td>
                  <td>${parseFloat(product.price).toFixed(2)}</td>
                  <td>
                    <div className="action-buttons">
                      <button 
                        className="edit-btn" 
                        onClick={() => handleEditProduct(product)}
                      >
                        Edit
                      </button>
                      <button 
                        className="delete-btn" 
                        onClick={() => {
                          if (window.confirm(`¿Estás seguro de eliminar "${product.name}"?`)) {
                            handleDeleteProduct(product.product_id);
                          }
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: 'center' }}>
                  No hay productos disponibles
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductList;