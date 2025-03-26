package com.sena.crud_basic.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sena.crud_basic.model.SaleDetail;

public interface ISaleDetail extends JpaRepository<SaleDetail, Integer> {

}
