import React from "react";
import { useInventory } from "../hooks/useInventory";

function InventoryList() {
  const {
    inventory,
    loading,
    error,
    products,
    newInventory,
    editingInventory,
    isInventoryFormVisible,
    handleAddInventory,
    handleEditInventoryStart,
    handleEditInventorySave,
    handleDeleteInventory,
    setNewInventory,
    setEditingInventory,
    setIsInventoryFormVisible
  } = useInventory();

  if (loading) {
    return <div className="loading">Cargando inventario...</div>;
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
    <div className="inventory-section">
      <div className="section-header">
        <h2>Inventory</h2>
        <button 
          className="add-btn" 
          onClick={() => setIsInventoryFormVisible(!isInventoryFormVisible)}
        >
          {isInventoryFormVisible ? "Cancel" : "Add Inventory"}
        </button>
      </div>

      {isInventoryFormVisible && (
        <div className="form-container">
          <h3>Add New Inventory</h3>
          <form onSubmit={handleAddInventory} className="inventory-form">
            <div className="form-group">
              <label htmlFor="productSelect">Product</label>
              <select
                id="productSelect"
                value={newInventory.product || ""}
                onChange={(e) => setNewInventory({
                  ...newInventory,
                  product: e.target.value ? parseInt(e.target.value) : null
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
              <label htmlFor="stockInput">Stock</label>
              <input
                type="number"
                id="stockInput"
                min="0"
                value={newInventory.stock}
                onChange={(e) => setNewInventory({
                  ...newInventory,
                  stock: parseInt(e.target.value)
                })}
                required
              />
            </div>
            <div className="form-actions">
              <button type="submit" className="submit-btn">
                Add Inventory
              </button>
              <button 
                type="button" 
                className="cancel-btn" 
                onClick={() => setIsInventoryFormVisible(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="inventory-list">
        <table className="inventory-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item, index) => (
              <tr key={item.inventoryId} className="inventory-item">
                <td>{item.inventoryId}</td>
                <td>
                  {editingInventory.index === index ? (
                    <select
                      value={editingInventory.product || ""}
                      onChange={(e) => setEditingInventory({
                        ...editingInventory,
                        product: e.target.value ? parseInt(e.target.value) : null
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
                  ) : (
                    item.product.name
                  )}
                </td>
                <td>
                  {editingInventory.index === index ? (
                    <input
                      type="number"
                      min="0"
                      value={editingInventory.stock}
                      onChange={(e) => setEditingInventory({
                        ...editingInventory,
                        stock: parseInt(e.target.value)
                      })}
                      required
                    />
                  ) : (
                    item.stock
                  )}
                </td>
                <td>
                  {editingInventory.index === index ? (
                    <div className="inventory-actions">
                      <button 
                        className="save-btn" 
                        onClick={() => handleEditInventorySave(item.inventoryId, index)}
                      >
                        Save
                      </button>
                      <button 
                        className="cancel-btn" 
                        onClick={() => setEditingInventory({ index: -1, id: null, product: null, stock: 0 })}
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div className="inventory-actions">
                      <button 
                        className="edit-btn" 
                        onClick={() => handleEditInventoryStart(index, item)}
                      >
                        Edit
                      </button>
                      <button 
                        className="delete-btn" 
                        onClick={() => handleDeleteInventory(item.inventoryId)}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InventoryList;