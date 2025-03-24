package com.sena.crud_basic.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sena.crud_basic.Dto.CustomersDTO;
import com.sena.crud_basic.service.CustomerService;

@RestController
@RequestMapping("/api/v1/customers")
public class CustomersController {

    /*  
        GET
        POST (REGISTER)
        PUT
        DELETE
    */

    @Autowired
    private CustomerService customerService;

    @PostMapping("/")
    public ResponseEntity<Object> registerCustomer(@RequestBody CustomersDTO customer) {
        customerService.save(customer);
        return new ResponseEntity<>("Okay", HttpStatus.OK);
    }
}
