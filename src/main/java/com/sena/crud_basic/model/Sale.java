package com.sena.crud_basic.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity (name = "sales")
public class Sale {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "sale_id")
    private int saleId;

    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private Customers customerId;

    @ManyToOne
    @JoinColumn(name = "employee_id", nullable = false)
    private Employees employeeId;


    @Column(name = "total", nullable = false)
    private double total;

    public Sale() {
    }

    public Sale(int saleId, Customers customerId, Employees employeeId, double total) {
        this.saleId = saleId;
        this.customerId = customerId;
        this.employeeId = employeeId;
        this.total = total;
    }

    public int getSaleId() {
        return saleId;
    }

    public void setSaleId(int saleId) {
        this.saleId = saleId;
    }

    public Customers getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Customers customer) {
        this.customerId = customer;
    }

    public Employees getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(Employees employee) {
        this.employeeId = employee;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }
}
