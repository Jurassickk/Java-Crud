package com.sena.crud_basic.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity (name = "customers")
public class Customers {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "customer_id", nullable = false)
    private int customer_id;

    @Column(name = "name", length = 50, nullable = false)
    private String name;

    @Column(name = "email", length = 100, nullable = false)
    private String email;

    public Customers() {
    }

    public Customers(int customer_id, String name, String email) {
        this.customer_id = customer_id;
        this.name = name;
        this.email = email;
    }

    public int getCustomer_id() {
        return customer_id;
    }

    public void setCustomer_id(int customer_id) {
        this.customer_id = customer_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail(){
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}

