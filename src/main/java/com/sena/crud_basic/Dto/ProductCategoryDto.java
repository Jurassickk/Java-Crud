package com.sena.crud_basic.Dto;

public class ProductCategoryDto {

    private String product;
    private String category;

    public ProductCategoryDto(String product, String category) {
        this.product = product;
        this.category = category;
    }
    
    public String getProduct() {
        return product;
    }
    public void setProduct(String product) {
        this.product = product;
    }
    public String getCategory() {
        return category;
    }
    public void setCategory(String category) {
        this.category = category;
    }
}
