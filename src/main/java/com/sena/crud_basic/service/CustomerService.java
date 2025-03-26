package com.sena.crud_basic.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.sena.crud_basic.Dto.CustomersDTO;
import com.sena.crud_basic.Dto.ResponseDto;
import com.sena.crud_basic.model.Customers;
import com.sena.crud_basic.repository.ICustomer;

@Service
public class CustomerService {
     @Autowired
    private ICustomer customerRepository;

    public ResponseDto save(CustomersDTO customerDto) {
        if (customerDto.getName().length() < 1 || customerDto.getName().length() > 50) {
            return new ResponseDto(HttpStatus.BAD_REQUEST.toString(), "El nombre debe estar entre 1 y 50 caracteres");
        }

        Customers customersRegister = convertToModel(customerDto);
        customerRepository.save(customersRegister);
        return new ResponseDto(HttpStatus.OK.toString(), "El cliente fue agregado correctamente");
    }

    public List<Customers> getAllCustomers() {
        return customerRepository.findAll();
    }

    public Optional<Customers> findById(int id) {
        return customerRepository.findById(id);
    }

    public ResponseDto deleteCustomer(int id) {
        if (!findById(id).isPresent()) {
            ResponseDto respuesta = new ResponseDto(HttpStatus.NOT_FOUND.toString(), "cliente no existe");
            return respuesta;
        }
        customerRepository.deleteById(id);
        ResponseDto respuesta = new ResponseDto(HttpStatus.OK.toString(), "cliente eliminado correctamente");
        return respuesta;
    }

    public CustomersDTO convertToDto(Customers customer) {
        return new CustomersDTO(customer.getName(), customer.getEmail());
    }

    public Customers convertToModel(CustomersDTO customerDto) {
        return new Customers(0, customerDto.getName(), customerDto.getEmail());
    }
}
