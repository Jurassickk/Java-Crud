package com.sena.crud_basic.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sena.crud_basic.Dto.SaleDto;
import com.sena.crud_basic.service.SaleService;

@RestController
@RequestMapping("/api/v1/sales")
public class SaleController {
    /*  
        GET
        POST (REGISTER)
        PUT
        DELETE
    */

    @Autowired
    private SaleService saleService;

    @PostMapping("/")
    public ResponseEntity<Object> registerSale(@RequestBody SaleDto sale) {
        saleService.save(sale);
        return new ResponseEntity<>("Venta registrada correctamente", HttpStatus.OK);
    }
}
