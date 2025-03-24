package com.sena.crud_basic.Dto;

import com.sena.crud_basic.model.Products;

public class InventoryDto {

    private Products product;

    private int stock;


    public InventoryDto(Products product, int stock) {
        this.product = product;
        this.stock = stock;
    }

    public Products getProduct() {
        return product;
    }

    public void setProduct(Products product) {
        this.product = product;
    }

    public int getStock() {
        return stock;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }
}
