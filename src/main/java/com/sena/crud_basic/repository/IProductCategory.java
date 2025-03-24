package com.sena.crud_basic.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sena.crud_basic.model.ProductCategory;

public interface IProductCategory extends JpaRepository<ProductCategory, Integer> {

}
