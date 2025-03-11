package com.sena.crud_basic.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.sena.crud_basic.Dto.EmployeesDto;
import com.sena.crud_basic.model.Employees;
import com.sena.crud_basic.service.EmployeesService;

public class EmployeesController {

    @Autowired
    private EmployeesService employeesService;

    @GetMapping
    public List<Employees> getAllEmployees() {
        return employeesService.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Employees> getEmployee(@PathVariable int id) {
        return employeesService.findById(id);
    }

    @PostMapping
    public String addEmployee(@RequestBody EmployeesDto employeesDto) {
        employeesService.save(employeesDto);
        return "Empleado agregado correctamente";
    }

    @PutMapping("/{id}")
    public String updateEmployee(@PathVariable int id, @RequestBody EmployeesDto employeesDto) {
        employeesService.save(employeesDto);
        return "Empleado actualizado correctamente";
    }

    @DeleteMapping("/{id}")
    public String deleteEmployee(@PathVariable int id) {
        employeesService.delete(id);
        return "Empleado eliminado correctamente";
    }
}
