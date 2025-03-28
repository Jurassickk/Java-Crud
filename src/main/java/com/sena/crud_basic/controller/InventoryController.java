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

import com.sena.crud_basic.Dto.InventoryDto;
import com.sena.crud_basic.Dto.ResponseDto;
import com.sena.crud_basic.service.InventoryService;
@RestController
@RequestMapping("/api/v1/inventory")
public class InventoryController {

    @Autowired
    private InventoryService inventoryService;

    @GetMapping("/")
    public ResponseEntity<Object> getAllInventory() {
        var listaInventory = inventoryService.getAllProductsInventories();
        return new ResponseEntity<>(listaInventory, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getInventoryByProductId(@PathVariable int id) {
        var inventory = inventoryService.findById(id);
        return new ResponseEntity<>(inventory, HttpStatus.OK);
    }

    @PostMapping("/anadir")
    public ResponseEntity<Object> registerInventory(@RequestBody InventoryDto inventory) {
        ResponseDto respuesta = inventoryService.save(inventory);
        return new ResponseEntity<>(respuesta, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteInventory(@PathVariable int id) {
        var message = inventoryService.deleteInventory(id);
        return new ResponseEntity<>(message, HttpStatus.OK);
    }
}
