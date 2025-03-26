package com.sena.crud_basic.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sena.crud_basic.Dto.SuppliersDto;
import com.sena.crud_basic.model.Suppliers;
import com.sena.crud_basic.repository.ISuppliers;

@Service
public class SupplierService {

    @Autowired
    private ISuppliers suppliersRepository;

    public void save(SuppliersDto supplierDto) {
        Suppliers supplier = convertToModel(supplierDto);
        suppliersRepository.save(supplier);
    }

    public List<Suppliers> findAll() {
        return suppliersRepository.findAll();
    }

    public Optional<SuppliersDto> findById(int id) {
        return suppliersRepository.findById(id).map(this::convertToDto);
    }

    public void delete(int id) {
        suppliersRepository.deleteById(id);
    }

    public SuppliersDto convertToDto(Suppliers suppliers) {
        return new SuppliersDto(suppliers.getName());
    }

    public Suppliers convertToModel(SuppliersDto supplierDto) {
        return new Suppliers(0, supplierDto.getName());
    }
}
