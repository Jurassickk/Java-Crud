package com.sena.crud_basic.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.sena.crud_basic.Dto.ResponseDto;
import com.sena.crud_basic.Dto.SaleDto;
import com.sena.crud_basic.model.Sale;
import com.sena.crud_basic.repository.ISale;

@Service
public class SaleService {

    @Autowired
    private ISale saleRepository;

    public ResponseDto save(SaleDto saleDto) {
        Sale saleRegister = convertToModel(saleDto);
        saleRepository.save(saleRegister);
        return new ResponseDto(HttpStatus.OK.toString(), "Venta registrada correctamente");
    }

    public List<Sale> findAll() {
        return saleRepository.findAll();
    }

    /*  public List<Sale> getSalesByCustomer(int customerId) {
        return saleRepository.getSalesByCustomer(customerId);
    }

    public List<Sale> getSalesByEmployee(int employeeId) {
        return saleRepository.getSalesByEmployee(employeeId);
    }

    public List<Sale> getSalesAboveAmount(double total) {
        return saleRepository.getSalesAboveAmount(total);
    } */

    public Optional<Sale> findById(int id) {
        return saleRepository.findById(id);
    }

    public ResponseDto deleteSale(int id) {
        if (!findById(id).isPresent()) {
            return new ResponseDto(HttpStatus.NOT_FOUND.toString(), "Venta no existe");
        }
        saleRepository.deleteById(id);
        return new ResponseDto(HttpStatus.OK.toString(), "Venta eliminada correctamente");
    }

    public SaleDto convertToDto(Sale sale) {
        return new SaleDto(sale.getCustomerId(), sale.getEmployeeId(), sale.getTotal());
    }

    public Sale convertToModel(SaleDto saleDto) {
        return new Sale(0, saleDto.getCustomer(), saleDto.getEmployee(), saleDto.getTotal());
    }
}
