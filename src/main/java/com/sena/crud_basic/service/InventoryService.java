package com.sena.crud_basic.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sena.crud_basic.model.Inventory;
import com.sena.crud_basic.repository.IInventory;

@Service
public class InventoryService {
    
    @Autowired
    private IInventory inventoryRepository;

    public List<Inventory> getAllProducts() {
        return inventoryRepository.findAll();
    }

    public Optional<Inventory> getProductById(int id) {
        return inventoryRepository.findById(id);
    }

    public void saveProduct(Inventory inventory) {
        inventoryRepository.save(inventory);
    }

    public void deleteProduct(int id) {
        inventoryRepository.deleteById(id);
    }
}
