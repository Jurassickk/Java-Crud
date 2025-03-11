package com.sena.crud_basic.Dto;

public class EmployeesDto {
    
    private String name;

    private String rol;

    public EmployeesDto(String name, String rol) {
        this.name = name;
        this.rol = rol;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRol() {
        return rol;
    }

    public void setRol(String rol) {
        this.rol = rol;
    }
}
