import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductList from "./ProductList";
import CategoryList from "./CategoryList";
import InventoryList from "./InventoryList";
import SuppliersList from "./SuppliersList";
import EmployeeList from "./EmployeeList";
import SaleForm from "./SalesList";
import DashboardStats from "./DashboardStats";

function Dashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="logo">
            <span className="icon">🗿</span>
            <h1>Comic Universe</h1>
          </div>
        </div>  
        <nav className="sidebar-nav">
          <ul>
            <li className={activeTab === "dashboard" ? "active" : ""}>
              <button onClick={() => setActiveTab("dashboard")}>
                <span className="icon">📊</span>
                Dashboard
              </button>
            </li>
            <li className={activeTab === "products" ? "active" : ""}>
              <button onClick={() => setActiveTab("products")}>
                <span className="icon">📦</span>
                Products
              </button>
            </li>
            <li className={activeTab === "categories" ? "active" : ""}>
              <button onClick={() => setActiveTab("categories")}>
                <span className="icon">🏷️</span>
                Categories
              </button>
            </li>
            <li className={activeTab === "inventory" ? "active" : ""}>
              <button onClick={() => setActiveTab("inventory")}>
                <span className="icon">📈</span>
                Inventory
              </button>
            </li>
            <li className={activeTab === "suppliers" ? "active" : ""}>
              <button onClick={() => setActiveTab("suppliers")}>
                <span className="icon">🚚</span>
                Suppliers
              </button>
            </li>
            <li className={activeTab === "sales" ? "active" : ""}>
              <button onClick={() => setActiveTab("sales")}>
                <span className="icon">💰</span>
                Sales
              </button>
            </li>
            <li className={activeTab === "employees" ? "active" : ""}>
              <button onClick={() => setActiveTab("employees")}>
                <span className="icon">👥</span>
                Employees
              </button>
            </li>
          </ul>
        </nav>
        <div className="sidebar-footer">
          <button onClick={() => navigate("/")} className="back-to-site">
            <span className="icon">🏠</span>
            Back to Site
          </button>
        </div>
      </aside>

      <main className="content">
        <header className="content-header">
          <h1>
            {activeTab === "dashboard" && "Dashboard"}
            {activeTab === "products" && "Products Management"}
            {activeTab === "categories" && "Categories Management"}
            {activeTab === "inventory" && "Inventory Management"}
            {activeTab === "suppliers" && "Suppliers Management"}
            {activeTab === "sales" && "Sales Management"}
            {activeTab === "employees" && "Employees Management"}
          </h1>
        </header>

        <div className="content-body">
          {activeTab === "dashboard" && <DashboardStats />}
          {activeTab === "products" && <ProductList />}
          {activeTab === "categories" && <CategoryList />}
          {activeTab === "inventory" && <InventoryList />}
          {activeTab === "suppliers" && <SuppliersList />}
          {activeTab === "sales" && <SaleForm />}
          {activeTab === "employees" && (
            <EmployeeList />)}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;