package com.sena.crud_basic.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.sena.crud_basic.Dto.EmployeesDto;
import com.sena.crud_basic.Dto.ResponseDto;
import com.sena.crud_basic.model.Employees;
import com.sena.crud_basic.repository.IEmployees;

@Service
public class EmployeesService {

    @Autowired
    private IEmployees employeesRepository;

    // Guardar o actualizar un empleado
    public ResponseDto save(EmployeesDto employeesDto) {
        if (employeesDto.getName().length() < 1 || employeesDto.getName().length() > 50) {
            ResponseDto respuesta = new ResponseDto(HttpStatus.BAD_REQUEST.toString(), "El nombre debe estar entre 1 y 50 caracteres");
            return respuesta;
        }

        Employees employeeRegister = convertToModel(employeesDto);
        employeesRepository.save(employeeRegister);
        ResponseDto respuesta = new ResponseDto(HttpStatus.OK.toString(), "Empleado agregado correctamente");
        return respuesta;
    }

    // Obtener todos los empleados
    public List<Employees> findAll() {
        return employeesRepository.getListEmployeesActive();
    }

    public List<Employees> getListEmployees(String filter) {
        return employeesRepository.getListEmployees(filter);
    }

    // Buscar empleado por ID
    public Optional<Employees> findById(int id) {
        return employeesRepository.findById(id);
    }

    // Eliminar un empleado por ID
    public ResponseDto deleteEmployee(int id) {
        Optional<Employees> empleado = findById(id);
        if (!empleado.isPresent()) {
            ResponseDto respuesta = new ResponseDto(HttpStatus.OK.toString(), "Empleado no Existe");
            return respuesta;
        }   
        empleado.get().setStatus(false); 
        employeesRepository.save(empleado.get());
        //employeesRepository.deleteById(id);
        ResponseDto respuesta = new ResponseDto(HttpStatus.OK.toString(), "Empleado Eliminado");
        return respuesta;
    }

    // Convertir de modelo a DTO
    public EmployeesDto convertToDto(Employees employee) {
        return new EmployeesDto(employee.getName(), employee.getRol());
    }

    // Convertir de DTO a modelo
    public Employees convertToModel(EmployeesDto employeesDto) {
        return new Employees(0, employeesDto.getName(), employeesDto.getRol(), true); // ID generado por BD
    }
}
