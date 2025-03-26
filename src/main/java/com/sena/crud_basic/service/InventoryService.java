package com.sena.crud_basic.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.sena.crud_basic.Dto.ResponseDto;
import com.sena.crud_basic.Dto.InventoryDto;
import com.sena.crud_basic.model.Inventory;
import com.sena.crud_basic.repository.IInventory;

@Service
public class InventoryService {
    
    @Autowired
    private IInventory inventoryRepository;

    public ResponseDto save(InventoryDto inventoryDto) {
        if (inventoryDto.getProduct() == null) {
            return new ResponseDto(HttpStatus.BAD_REQUEST.toString(), "El producto no puede ser nulo");
        }
    
        // Validación para getStock
        if (inventoryDto.getStock() < 0) {
            return new ResponseDto(HttpStatus.BAD_REQUEST.toString(), "El stock no puede ser negativo");
        }
                                                                                                           
        Inventory inventoryResgister = convertToModel(inventoryDto);
        inventoryRepository.save(inventoryResgister);
        return new ResponseDto(HttpStatus.OK.toString(), "Producto agregado correctamente");
    }

    public List<Inventory> getAllProducts() {
        return inventoryRepository.findAll();
    }

    public Optional<Inventory> findById(int id) {
        return inventoryRepository.findById(id);
    }

    public ResponseDto deleteInventory(int id) {
        if (!findById(id).isPresent()) {
            ResponseDto respuesta = new ResponseDto(HttpStatus.OK.toString(), "Empleado no Existe");
            return respuesta;
        }   
        inventoryRepository.deleteById(id);
        ResponseDto respuesta = new ResponseDto(HttpStatus.OK.toString(), "Empleado Eliminado");
        return respuesta;
    }

    public InventoryDto convertToDto(Inventory inventory) {
        return new InventoryDto(inventory.getProduct(), inventory.getStock());
    }

    public Inventory convertToModel(InventoryDto inventoryDto) {
        return new Inventory(0, inventoryDto.getProduct(), inventoryDto.getStock());
    }
}
