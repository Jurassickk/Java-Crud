package com.sena.crud_basic.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sena.crud_basic.Dto.ProductsDto;
import com.sena.crud_basic.model.Products;
import com.sena.crud_basic.repository.IProducts;

@Service
public class ProductService {

    @Autowired
    private IProducts productRepository;

    public void save(ProductsDto productsDto) {
        Products product = convertToModel(productsDto);
        productRepository.save(product);
    }

    public List<Products> getAllProducts() {
        return productRepository.findAll();
    }

    public Optional<Products> getProductById(int id) {
        return productRepository.findById(id);
    }

    public void saveProduct(Products product) {
        productRepository.save(product);
    }

    public void deleteProduct(int id) {
        productRepository.deleteById(id);
    }

    public ProductsDto convertToDto(Products product) {
        return new ProductsDto(product.getName(), product.getType(), product.getPrice());
    }
    public Products convertToModel(ProductsDto productDto) {
        return new Products(0, productDto.getName(), productDto.getType(), productDto.getPrice());
    }
}
