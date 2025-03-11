package com.sena.crud_basic.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sena.crud_basic.model.Sale;

public interface ISale extends JpaRepository<Sale, Integer> {

}
