package com.sena.crud_basic.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sena.crud_basic.Dto.CustomersDTO;
import com.sena.crud_basic.Dto.ResponseDto;
import com.sena.crud_basic.service.CustomerService;

@RestController
@RequestMapping("/api/v1/customers")
public class CustomersController {

    @Autowired
    private CustomerService customerService;

    @GetMapping("/")
    public ResponseEntity<Object> getAllCustomer() {
        var listaCustomers = customerService.getAllCustomers();
        return new ResponseEntity<>(listaCustomers, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getCustomer(@PathVariable int id) {
        var customer = customerService.findById(id);
        if (!customer.isPresent())
            return new ResponseEntity<>("", HttpStatus.NOT_FOUND);
        return new ResponseEntity<>(customer, HttpStatus.OK);
    }

    @PostMapping("/anadir")
    public ResponseEntity<Object> addCustomer(@RequestBody CustomersDTO customerDto) {
        ResponseDto respuesta = customerService.save(customerDto);
        return new ResponseEntity<>(respuesta, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteCustomer(@PathVariable int id) {
        var message = customerService.deleteCustomer(id);
        return new ResponseEntity<>(message, HttpStatus.OK);
    }


}
