package com.sena.crud_basic.model;

import java.math.BigDecimal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity (name = "sales")
public class Sale {

    @Id
    @Column(name = "sale_id")
    private int saleId;

    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private Customers customer;

    @ManyToOne
    @JoinColumn(name = "employee_id", nullable = false)
    private Employees employee;


    @Column(name = "total", nullable = false)
    private BigDecimal total;

    public Sale() {
    }

    public Sale(int saleId, Customers customer, Employees employee, BigDecimal total) {
        this.saleId = saleId;
        this.customer = customer;
        this.employee = employee;
        this.total = total;
    }

    public int getSaleId() {
        return saleId;
    }

    public void setSaleId(int saleId) {
        this.saleId = saleId;
    }

    public Customers getCustomer() {
        return customer;
    }

    public void setCustomer(Customers customer) {
        this.customer = customer;
    }

    public Employees getEmployee() {
        return employee;
    }

    public void setEmployee(Employees employee) {
        this.employee = employee;
    }

    public BigDecimal getTotal() {
        return total;
    }

    public void setTotal(BigDecimal total) {
        this.total = total;
    }
}
