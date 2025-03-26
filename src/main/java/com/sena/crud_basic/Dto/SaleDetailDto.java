package com.sena.crud_basic.Dto;

import com.sena.crud_basic.model.Products;
import com.sena.crud_basic.model.Sale;

public class SaleDetailDto {

    private Sale sale;
    private Products product;
    private int quantity;
    private double unitPrice;

    public SaleDetailDto(Sale sale, Products product, int quantity, double unitPrice) {
        this.sale = sale;
        this.product = product;
        this.quantity = quantity;
        this.unitPrice = unitPrice;
    }

    public Sale getSale() {
        return sale;
    }

    public void setSale(Sale sale) {
        this.sale = sale;
    }

    public Products getProduct() {
        return product;
    }

    public void setProduct(Products product) {
        this.product = product;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(double unitPrice) {
        this.unitPrice = unitPrice;
    }
}
