package com.sena.crud_basic.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.sena.crud_basic.model.Sale;

public interface ISale extends JpaRepository<Sale, Integer> {

    @Query("SELECT s FROM sales s WHERE s.customer.id = ?1")
    List<Sale> getSalesByCustomer(int customerId);

    @Query("SELECT s FROM sales s WHERE s.employee.id = ?1")
    List<Sale> getSalesByEmployee(int employeeId);

    @Query("SELECT s FROM sales s WHERE s.total >= ?1")
    List<Sale> getSalesAboveAmount(double total);

}
