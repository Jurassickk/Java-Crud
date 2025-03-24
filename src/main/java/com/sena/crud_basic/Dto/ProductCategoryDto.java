package com.sena.crud_basic.Dto;

import com.sena.crud_basic.model.Categories;
import com.sena.crud_basic.model.Products;

public class ProductCategoryDto {

    private Products product;
    private Categories category;

    public ProductCategoryDto(Products product, Categories category) {
        this.product = product;
        this.category = category;
    }
    
    public Products getProduct() {
        return product;
    }
    public void setProduct(Products product) {
        this.product = product;
    }
    public Categories getCategory() {
        return category;
    }
    public void setCategory(Categories category) {
        this.category = category;
    }
}
