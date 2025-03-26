package com.sena.crud_basic.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.sena.crud_basic.model.Products;

public interface IProducts extends JpaRepository<Products, Integer> {

    @Query("SELECT p FROM products p WHERE p.price BETWEEN ?1 AND ?2")
    List<Products> getProductsByPriceRange(double minPrice, double maxPrice);

    @Query("SELECT p FROM products p WHERE p.type = ?1")
    List<Products> getProductsByType(String type);

}
