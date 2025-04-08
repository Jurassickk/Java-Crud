import React from "react";
import { useCategories } from "../hooks/useCategories";

function CategoryList() {
  const {
    categories,
    loading,
    error,
    newCategory,
    editingCategory,
    isCategoryFormVisible,
    handleAddCategory,
    handleEditCategoryStart,
    handleEditCategorySave,
    handleDeleteCategory,
    setNewCategory,
    setEditingCategory,
    setIsCategoryFormVisible
  } = useCategories();

  if (loading) {
    return <div className="loading">Cargando categorías...</div>;
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
    <div className="categories-section">
      <div className="section-header">
        <h2>Categories</h2>
        <button 
          className="add-btn" 
          onClick={() => setIsCategoryFormVisible(!isCategoryFormVisible)}
        >
          {isCategoryFormVisible ? "Cancel" : "Add New Category"}
        </button>
      </div>

      {isCategoryFormVisible && (
        <div className="form-container">
          <h3>Add New Category</h3>
          <form onSubmit={handleAddCategory} className="category-form">
            <div className="form-group">
              <label htmlFor="categoryName">Category Name</label>
              <input
                type="text"
                id="categoryName"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                required
              />
            </div>
            <div className="form-actions">
              <button type="submit" className="submit-btn">
                Add Category
              </button>
              <button 
                type="button" 
                className="cancel-btn" 
                onClick={() => setIsCategoryFormVisible(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="categories-list">
        {categories.map((category, index) => (
          <div key={category.id} className="category-item">
            {editingCategory.index === index ? (
              <div className="category-edit">
                <input
                  type="text"
                  value={editingCategory.name}
                  onChange={(e) => setEditingCategory({ ...editingCategory, name: e.target.value })}
                  autoFocus
                />
                <div className="edit-actions">
                  <button 
                    className="save-btn" 
                    onClick={() => handleEditCategorySave(category.id, index)}
                  >
                    Save
                  </button>
                  <button 
                    className="cancel-btn" 
                    onClick={() => setEditingCategory({ index: -1, name: "" })}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                <span>{category.name}</span>
                <div className="category-actions">
                  <button 
                    className="edit-btn" 
                    onClick={() => handleEditCategoryStart(index, category.name)}
                  >
                    Edit
                  </button>
                  <button 
                    className="delete-btn" 
                    onClick={() => handleDeleteCategory(category.id)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;