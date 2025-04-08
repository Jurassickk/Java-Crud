import React from "react";
import { useSales } from "../hooks/useSales";

function SaleForm() {
  const {
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
  } = useSales();

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

  return (
    <div className="sales-section">
      <div className="section-header">
        <h2>Sales</h2>
        <button 
          className="add-btn" 
          onClick={() => setIsSaleFormVisible(!isSaleFormVisible)}
        >
          {isSaleFormVisible ? "Cancel" : "New Sale"}
        </button>
      </div>

      {isSaleFormVisible && (
        <div className="form-container">
          <h3>Register New Sale</h3>
          <form onSubmit={handleRegisterSale} className="sale-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="customerId">Customer ID</label>
                <input
                  type="number"
                  id="customerId"
                  value={newSale.customerId}
                  onChange={(e) => setNewSale({...newSale, customerId: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="employeeId">Employee ID</label>
                <input
                  type="number"
                  id="employeeId"
                  value={newSale.employeeId}
                  onChange={(e) => setNewSale({...newSale, employeeId: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className="sale-items-section">
              <h4>Sale Items</h4>
              {newSale.items.map((item, index) => (
                <div key={index} className="sale-item">
                  <div className="form-row">
                    <div className="form-group">
                      <label>Product</label>
                      <select
                        value={item.productId}
                        onChange={(e) => handleUpdateSaleItem(index, 'productId', e.target.value)}
                        required
                      >
                        <option value="">Select a product</option>
                        {products.map((product) => (
                          <option key={product.productId} value={product.productId}>
                            {product.name} - ${product.price}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Quantity</label>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => handleUpdateSaleItem(index, 'quantity', e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Unit Price</label>
                      <input
                        type="number"
                        step="0.01"
                        value={item.unitPrice}
                        onChange={(e) => handleUpdateSaleItem(index, 'unitPrice', e.target.value)}
                        required
                        readOnly
                      />
                    </div>
                    <div className="form-group">
                      <label>Subtotal</label>
                      <input
                        type="number"
                        value={(item.quantity * item.unitPrice).toFixed(2)}
                        readOnly
                      />
                    </div>
                    <button 
                      type="button" 
                      className="remove-btn" 
                      onClick={() => handleRemoveSaleItem(index)}
                      disabled={newSale.items.length === 1}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <button 
                type="button" 
                className="add-item-btn" 
                onClick={handleAddSaleItem}
              >
                Add Item
              </button>
            </div>

            <div className="sale-total">
              <h4>Total: ${newSale.total.toFixed(2)}</h4>
            </div>

            <div className="form-actions">
              <button type="submit" className="submit-btn">
                Register Sale
              </button>
              <button 
                type="button" 
                className="cancel-btn" 
                onClick={() => setIsSaleFormVisible(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="note-card">
        <p>Note: This page only allows registering new sales. View and management functionality will be implemented in future updates when the corresponding API endpoints are available.</p>
      </div>
    </div>
  );
}

export default SaleForm;