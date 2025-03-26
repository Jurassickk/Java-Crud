package com.sena.crud_basic.Dto;

public class CategoriesDto {

    private String name;


    public CategoriesDto(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
