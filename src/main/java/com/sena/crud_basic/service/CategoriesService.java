package com.sena.crud_basic.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.sena.crud_basic.Dto.CategoriesDto;

import org.springframework.http.HttpStatus;

import com.sena.crud_basic.Dto.ResponseDto;
import com.sena.crud_basic.model.Categories;
import com.sena.crud_basic.repository.ICategories;

@Service
public class CategoriesService {

    @Autowired
    private ICategories categoriesRepository;
    public ResponseDto save(CategoriesDto categoriesDto) {
        if (categoriesDto.getName().length() < 1 || categoriesDto.getName().length() > 100) {
            return new ResponseDto(HttpStatus.BAD_REQUEST.toString(), "El nombre debe estar entre 1 y 100 caracteres");
        }

        Categories categoriesRegister = convertToModel(categoriesDto);
        categoriesRepository.save(categoriesRegister);
        return new ResponseDto(HttpStatus.OK.toString(), "Producto agregado correctamente");
    }

    public List<Categories> getAllcategories() {
        return categoriesRepository.findAll();
    }

    public Optional<Categories> findById(int id) {
        return categoriesRepository.findById(id);
    }

    public ResponseDto deleteCategories(int id) {
        if (!findById(id).isPresent()) {
            ResponseDto respuesta = new ResponseDto(HttpStatus.OK.toString(), "Empleado no Existe");
            return respuesta;
        }   
        categoriesRepository.deleteById(id);
        ResponseDto respuesta = new ResponseDto(HttpStatus.OK.toString(), "Empleado Eliminado");
        return respuesta;
    }

    public CategoriesDto convertToDto(Categories categorie) {
        return new CategoriesDto(categorie.getName());
    }
    public Categories convertToModel(CategoriesDto categoriesDto) {
        return new Categories(0, categoriesDto.getName());
    }
}
