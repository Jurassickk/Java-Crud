package com.sena.crud_basic.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity (name = "inventory")
public class Inventory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "inventory_id")
    private int inventoryId;

    @OneToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Products product;

    @Column(name = "stock", nullable = false)
    private int stock;

    public Inventory() {
    }

    public Inventory(int inventoryId, Products product, int stock) {
        this.inventoryId = inventoryId;
        this.product = product;
        this.stock = stock;
    }

    public int getInventoryId() {
        return inventoryId;
    }

    public void setInventoryId(int inventoryId) {
        this.inventoryId = inventoryId;
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
