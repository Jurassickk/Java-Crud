package com.sena.crud_basic.Dto;

public class SaleDto {

    private String customer;
    private String employee;
    private double total;


    public SaleDto(String customer, String employee, double total) {
        this.customer = customer;
        this.employee = employee;
        this.total = total;
    }

    public String getCustomer() {
        return customer;
    }

    public void setCustomer(String customer) {
        this.customer = customer;
    }

    public String getEmployee() {
        return employee;
    }

    public void setEmployee(String employee) {
        this.employee = employee;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }
}
