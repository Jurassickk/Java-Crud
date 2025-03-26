package com.sena.crud_basic.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sena.crud_basic.Dto.CategoriesDto;
import com.sena.crud_basic.service.CategoriesService;

@RestController
@RequestMapping("/api/v1/categories")
public class CategoriesController {
    /*  
        GET
        POST (REGISTER)
        PUT
        DELETE
    */
    
    @Autowired
    private CategoriesService categoriesService;

    @PostMapping("/")
    public ResponseEntity<Object> registerCategory(@RequestBody CategoriesDto category) {
        categoriesService.save(category);
        return new ResponseEntity<>("Okay", HttpStatus.OK);
    }
}
