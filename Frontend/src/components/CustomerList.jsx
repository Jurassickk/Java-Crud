import React from "react";
import { useCustomers } from "../hooks/useCustomers";

function CustomerList() {
  const {
    customers,
    loading,
    error,
    newCustomer,
    isFormVisible,
    handleInputChange,
    handleSubmitCustomer,
    resetCustomerForm,
    handleDeleteCustomer,
    setIsFormVisible
  } = useCustomers();

  if (loading) {
    return <div className="loading">Cargando clientes...</div>;
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
    <div className="customers-section">
      <div className="section-header">
        <h2>Lista de Clientes</h2>
        <button
          className="add-btn"
          onClick={() => {
            if (isFormVisible) {
              resetCustomerForm();
            } else {
              setIsFormVisible(!isFormVisible);
            }
          }}
        >
          {isFormVisible ? "Cancelar" : "Añadir Cliente"}
        </button>
      </div>

      {isFormVisible && (
        <div className="form-container">
          <h3>Añadir Nuevo Cliente</h3>
          <form onSubmit={handleSubmitCustomer} className="customer-form">
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={newCustomer.name || ""}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={newCustomer.email || ""}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="submit-btn">
                Añadir Cliente
              </button>
              <button 
                type="button" 
                className="cancel-btn" 
                onClick={(e) => {
                  e.preventDefault();
                  resetCustomerForm();
                }}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {customers && customers.length > 0 ? (
              customers.map((customer) => (
                <tr key={customer.customer_id}>
                  <td>{customer.customer_id}</td>
                  <td>{customer.name}</td>
                  <td>{customer.email || "N/A"}</td>
                  <td>
                    <div className="action-buttons">
                      <button 
                        className="delete-btn" 
                        onClick={() => {
                          if (window.confirm(`¿Estás seguro de eliminar a "${customer.name}"?`)) {
                            handleDeleteCustomer(customer.customer_id);
                          }
                        }}
                      >
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={{ textAlign: 'center' }}>
                  No hay clientes disponibles
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomerList;