import React from "react";
import { useEmployees } from "../hooks/useEmployees";

function EmployeeList() {
  const {
    employees,
    loading,
    error,
    newEmployee,
    isFormVisible,
    filter,
    handleInputChange,
    handleSubmitEmployee,
    resetEmployeeForm,
    handleDeleteEmployee,
    setIsFormVisible,
    handleFilterChange,
    applyFilter
  } = useEmployees();

  if (loading) {
    return <div className="loading">Cargando empleados...</div>;
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
    <div className="employees-section">
      <div className="section-header">
        <h2>Lista de Empleados</h2>
        <div className="filter-container">
          <input
            type="text"
            placeholder="Filtrar empleados..."
            value={filter}
            onChange={handleFilterChange}
          />
          <button onClick={applyFilter}>Buscar</button>
        </div>
        <button
          className="add-btn"
          onClick={() => {
            if (isFormVisible) {
              resetEmployeeForm();
            } else {
              setIsFormVisible(!isFormVisible);
            }
          }}
        >
          {isFormVisible ? "Cancelar" : "Añadir Empleado"}
        </button>
      </div>

      {isFormVisible && (
        <div className="form-container">
          <h3>Añadir Nuevo Empleado</h3>
          <form onSubmit={handleSubmitEmployee} className="employee-form">
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={newEmployee.name || ""}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="rol">Rol</label>
              <input
                type="text"
                id="rol"
                name="rol"
                value={newEmployee.rol || ""}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group checkbox">
              <label htmlFor="status">
                <input
                  type="checkbox"
                  id="status"
                  name="status"
                  checked={newEmployee.status}
                  onChange={handleInputChange}
                />
                Activo
              </label>
            </div>

            <div className="form-actions">
              <button type="submit" className="submit-btn">
                Añadir Empleado
              </button>
              <button 
                type="button" 
                className="cancel-btn" 
                onClick={(e) => {
                  e.preventDefault();
                  resetEmployeeForm();
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
              <th>Rol</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {employees && employees.length > 0 ? (
              employees.map((employee) => (
                <tr key={employee.employee_id}>
                  <td>{employee.employee_id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.rol}</td>
                  <td>{employee.status ? "Activo" : "Inactivo"}</td>
                  <td>
                    <div className="action-buttons">
                      <button 
                        className="delete-btn" 
                        onClick={() => {
                          if (window.confirm(`¿Estás seguro de eliminar a "${employee.name}"?`)) {
                            handleDeleteEmployee(employee.employee_id);
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
                <td colSpan="5" style={{ textAlign: 'center' }}>
                  No hay empleados disponibles
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeList;