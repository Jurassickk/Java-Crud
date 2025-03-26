package com.sena.crud_basic.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sena.crud_basic.model.Customers;

public interface ICustomer extends JpaRepository<Customers, Integer> {

}
