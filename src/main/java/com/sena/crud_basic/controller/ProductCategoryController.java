package com.sena.crud_basic.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sena.crud_basic.Dto.ProductCategoryDto;
import com.sena.crud_basic.service.ProductCategoryService;

@RestController
@RequestMapping("/api/v1/product-category")
public class ProductCategoryController {

    /*  
        GET
        POST (REGISTER)
        PUT
        DELETE
    */

    @Autowired
    private ProductCategoryService productCategoryService;

    @PostMapping("/")
    public ResponseEntity<Object> registerProductCategory(@RequestBody ProductCategoryDto productCategory) {
        productCategoryService.save(productCategory);
        return new ResponseEntity<>("Okay", HttpStatus.OK);
    }
}
