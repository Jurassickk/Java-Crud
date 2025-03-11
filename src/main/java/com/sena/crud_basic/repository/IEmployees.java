
package com.sena.crud_basic.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sena.crud_basic.model.Employees;

public interface IEmployees extends JpaRepository<Employees, Integer> {

    
}
