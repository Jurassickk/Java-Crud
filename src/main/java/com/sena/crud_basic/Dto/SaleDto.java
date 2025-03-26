package com.sena.crud_basic.Dto;

import com.sena.crud_basic.model.Customers;
import com.sena.crud_basic.model.Employees;

public class SaleDto {

    private Customers customerId;
    private Employees employeeId;
    private double total;


    public SaleDto(Customers customerId, Employees employeeId, double total) {
        this.customerId = customerId;
        this.employeeId = employeeId;
        this.total = total;
    }

    public Customers getCustomer() {
        return customerId;
    }

    public void setCustomer(Customers customerId) {
        this.customerId = customerId;
    }

    public Employees getEmployee() {
        return employeeId;
    }

    public void setEmployee(Employees employeeId) {
        this.employeeId = employeeId;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }
}
