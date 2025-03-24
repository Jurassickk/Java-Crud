package com.sena.crud_basic.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sena.crud_basic.Dto.CategoriesDto;
import com.sena.crud_basic.model.Categories;
import com.sena.crud_basic.repository.ICategories;

@Service
public class CategoriesService {

    @Autowired
    private ICategories categoriesRepository;

    public void save(CategoriesDto categoriesDto) {
        Categories categorie = convertToModel(categoriesDto);
        categoriesRepository.save(categorie);
    }

    public List<Categories> getAllProducts() {
        return categoriesRepository.findAll();
    }

    public Optional<Categories> getProductById(int id) {
        return categoriesRepository.findById(id);
    }

    public void saveProduct(Categories categorie) {
        categoriesRepository.save(categorie);
    }

    public void deleteProduct(int id) {
        categoriesRepository.deleteById(id);
    }

    public CategoriesDto convertToDto(Categories categorie) {
        return new CategoriesDto(categorie.getName());
    }
    public Categories convertToModel(CategoriesDto categoriesDto) {
        return new Categories(0, categoriesDto.getName());
    }
}
