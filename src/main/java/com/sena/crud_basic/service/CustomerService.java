package com.sena.crud_basic.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sena.crud_basic.Dto.CustomersDTO;
import com.sena.crud_basic.model.Customers;
import com.sena.crud_basic.repository.ICustomer;

@Service
public class CustomerService {
     @Autowired
    private ICustomer customerRepository;

    public void save(CustomersDTO CustomersDTO) {
        Customers customer = convertToModel(CustomersDTO);
        customerRepository.save(customer);
    }

    public List<Customers> getAllCustomers() {
        return customerRepository.findAll();
    }

    public Optional<Customers> getCustomerById(int id) {
        return customerRepository.findById(id);
    }

    public void saveCustomer(Customers customer) {
        customerRepository.save(customer);
    }

    public void deleteCustomer(int id) {
        customerRepository.deleteById(id);
    }

    public CustomersDTO convertToDto(Customers customer) {
        return new CustomersDTO(customer.getName(), customer.getEmail());
    }

    public Customers convertToModel(CustomersDTO customerDto) {
        return new Customers(0, customerDto.getName(), customerDto.getEmail());
    }
}
