package com.sena.crud_basic.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sena.crud_basic.Dto.ProductsDto;
import com.sena.crud_basic.service.ProductService;

@RestController
@RequestMapping("/api/v1/products")
public class ProductsController {

    /*  
        GET
        POST (REGISTER)
        PUT
        DELETE
    */

    @Autowired
    private ProductService productsService;

    @PostMapping("/")
    public ResponseEntity<Object> registerProduct(@RequestBody ProductsDto product) {
        productsService.save(product);
        return new ResponseEntity<>("Producto registrado correctamente", HttpStatus.OK);
    }
}
