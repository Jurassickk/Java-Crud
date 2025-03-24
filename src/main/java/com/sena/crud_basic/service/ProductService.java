package com.sena.crud_basic.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.sena.crud_basic.Dto.ProductsDto;
import com.sena.crud_basic.Dto.ResponseDto;
import com.sena.crud_basic.model.Products;
import com.sena.crud_basic.repository.IProducts;

@Service
public class ProductService {

    @Autowired
    private IProducts productRepository;

    public ResponseDto save(ProductsDto productsDto) {
        if (productsDto.getName().length() < 1 || productsDto.getName().length() > 100) {
            return new ResponseDto(HttpStatus.BAD_REQUEST.toString(), "El nombre debe estar entre 1 y 100 caracteres");
        }

        Products productRegister = convertToModel(productsDto);
        productRepository.save(productRegister);
        return new ResponseDto(HttpStatus.OK.toString(), "Producto agregado correctamente");
    }

    public List<Products> findAll() {
        return productRepository.findAll();
    }

    public List<Products> getProductsByPriceRange(double minPrice, double maxPrice) {
        return productRepository.getProductsByPriceRange(minPrice, maxPrice);
    }

    public List<Products> getProductsByType(String type) {
        return productRepository.getProductsByType(type);
    }

    public Optional<Products> findById(int id) {
        return productRepository.findById(id);
    }

    public ResponseDto deleteProduct(int id) {
        if (!findById(id).isPresent()) {
            return new ResponseDto(HttpStatus.NOT_FOUND.toString(), "Producto no existe");
        }
        productRepository.deleteById(id);
        return new ResponseDto(HttpStatus.OK.toString(), "Producto eliminado correctamente");
    }

    public ProductsDto convertToDto(Products product) {
        return new ProductsDto(product.getName(), product.getType(), product.getPrice());
    }

    public Products convertToModel(ProductsDto productDto) {
        return new Products(0, productDto.getName(), productDto.getType(), productDto.getPrice());
    }
}
