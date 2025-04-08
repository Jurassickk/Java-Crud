import React, { useState, useEffect } from "react";
import { productService } from "../services/productService";
import { categoryService } from "../services/categoryService";

function DashboardStats() {
  const [stats, setStats] = useState({
    products: 0,
    categories: 0,
    loading: true,
    error: null
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [products, categories] = await Promise.all([
          productService.getAllProducts(),
          categoryService.getAllCategories(),
        ]);

        setStats({
          products: products.length,
          categories: categories.length,
          loading: false,
          error: null
        });
      } catch (error) {
        console.error("Error fetching dashboard stats:", error);
        setStats(prevStats => ({
          ...prevStats,
          loading: false,
          error: "Error cargando estadísticas del dashboard"
        }));
      }
    };

    fetchStats();
  }, []);

  if (stats.loading) {
    return <div className="loading">Cargando estadísticas...</div>;
  }

  if (stats.error) {
    return (
      <div className="error-container">
        <h2>Error</h2>
        <p>{stats.error}</p>
        <button onClick={() => window.location.reload()}>Reintentar</button>
      </div>
    );
  }

  return (
    <div className="dashboard-section">
      <h2>Welcome to Comic Universe Management System</h2>
      <p className="dashboard-intro">Here's an overview of your store data:</p>
      
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Products</h3>
          <p className="stat-value">{stats.products}</p>
          <p className="stat-label">Products in catalog</p>
        </div>
        <div className="stat-card">
          <h3>Categories</h3>
          <p className="stat-value">{stats.categories}</p>
          <p className="stat-label">Active categories</p>
        </div>
        {/* Se eliminaron las tarjetas relacionadas con inventario */}
      </div>
    </div>
  );
}

export default DashboardStats;