import React from "react";
import { useSuppliers } from "../hooks/useSuppliers";

function SuppliersList() {
  const {
    suppliers,
    loading,
    error,
    newSupplier,
    isSupplierFormVisible,
    handleAddSupplier,
    setNewSupplier,
    setIsSupplierFormVisible
  } = useSuppliers();

  if (loading) {
    return <div className="loading">Cargando proveedores...</div>;
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
    <div className="suppliers-section">
      <div className="section-header">
        <h2>Suppliers</h2>
        <button 
          className="add-btn" 
          onClick={() => setIsSupplierFormVisible(!isSupplierFormVisible)}
        >
          {isSupplierFormVisible ? "Cancel" : "Add New Supplier"}
        </button>
      </div>

      {isSupplierFormVisible && (
        <div className="form-container">
          <h3>Add New Supplier</h3>
          <form onSubmit={handleAddSupplier} className="supplier-form">
            <div className="form-group">
              <label htmlFor="supplierName">Supplier Name</label>
              <input
                type="text"
                id="supplierName"
                value={newSupplier}
                onChange={(e) => setNewSupplier(e.target.value)}
                required
              />
            </div>
            <div className="form-actions">
              <button type="submit" className="submit-btn">
                Add Supplier
              </button>
              <button 
                type="button" 
                className="cancel-btn" 
                onClick={() => setIsSupplierFormVisible(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="note-card">
        <p>Note: This page only allows adding new suppliers. View and management functionality will be implemented in future updates when the corresponding API endpoints are available.</p>
      </div>
    </div>
  );
}

export default SuppliersList;