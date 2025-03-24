package com.sena.crud_basic.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sena.crud_basic.Dto.SuppliersDto;
import com.sena.crud_basic.service.SupplierService;

@RestController
@RequestMapping("/api/v1/suppliers")
public class SuppliersController {

    @Autowired
    private SupplierService suppliersService;

    @PostMapping("/")
    public ResponseEntity<Object> registerSupplier(@RequestBody SuppliersDto supplier) {
        suppliersService.save(supplier);
        return new ResponseEntity<>("Proveedor registrado correctamente", HttpStatus.OK);
    }
}
