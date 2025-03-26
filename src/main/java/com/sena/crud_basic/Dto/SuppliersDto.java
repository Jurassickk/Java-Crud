package com.sena.crud_basic.Dto;

public class SuppliersDto {

    private String name;

    public SuppliersDto(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
