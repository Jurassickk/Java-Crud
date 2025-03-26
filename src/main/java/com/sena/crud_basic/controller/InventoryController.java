package com.sena.crud_basic.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sena.crud_basic.Dto.InventoryDto;
import com.sena.crud_basic.service.InventoryService;
@RestController
@RequestMapping("/api/v1/inventory")
public class InventoryController {

    /*  
        GET
        POST (REGISTER)
        PUT
        DELETE
    */

    @Autowired
    private InventoryService inventoryService;

    @PostMapping("/")
    public ResponseEntity<Object> registerInventory(@RequestBody InventoryDto inventory) {
        inventoryService.save(inventory);
        return new ResponseEntity<>("Okay", HttpStatus.OK);
    }
}
