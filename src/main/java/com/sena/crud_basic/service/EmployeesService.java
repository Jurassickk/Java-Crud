package com.sena.crud_basic.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sena.crud_basic.Dto.EmployeesDto;
import com.sena.crud_basic.model.Employees;
import com.sena.crud_basic.repository.IEmployees;

@Service
public class EmployeesService {

    @Autowired
    private IEmployees employeesRepository;

    // Guardar o actualizar un empleado
    public void save(EmployeesDto employeesDto) {
        Employees employee = convertToModel(employeesDto);
        employeesRepository.save(employee);
    }

    // Obtener todos los empleados
    public List<Employees> findAll() {
        return employeesRepository.findAll();
    }

    // Buscar empleado por ID
    public Optional<Employees> findById(int id) {
        return employeesRepository.findById(id);
    }

    // Eliminar un empleado por ID
    public void delete(int id) {
        employeesRepository.deleteById(id);
    }

    // Convertir de modelo a DTO
    public EmployeesDto convertToDto(Employees employee) {
        return new EmployeesDto(employee.getName(), employee.getRol());
    }

    // Convertir de DTO a modelo
    public Employees convertToModel(EmployeesDto employeesDto) {
        return new Employees(0, employeesDto.getName(), employeesDto.getRol()); // ID generado por BD
    }
}
