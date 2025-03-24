package com.sena.crud_basic.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sena.crud_basic.Dto.ProductCategoryDto;
import com.sena.crud_basic.model.ProductCategory;
import com.sena.crud_basic.repository.IProductCategory;

@Service
public class ProductCategoryService {

    @Autowired
    private IProductCategory productCategoryRepository;

    public void save(ProductCategoryDto productCategoryDto) {
        ProductCategory productCategory = convertToModel(productCategoryDto);
        productCategoryRepository.save(productCategory);
    }

    public List<ProductCategory> findAll() {
        return productCategoryRepository.findAll();
    }

    public Optional<ProductCategory> findById(int id) {
        return productCategoryRepository.findById(id);
    }

    public void saveProduct(ProductCategory productCategory) {
        productCategoryRepository.save(productCategory);
    }

    public void deleteProduct(int id) {
        productCategoryRepository.deleteById(id);
    }

    public ProductCategoryDto convertToDto(ProductCategory productCategory) {
        return new ProductCategoryDto(productCategory.getProduct(), productCategory.getCategory());
    }
    public ProductCategory convertToModel(ProductCategoryDto productCategoryDto) {
        return new ProductCategory(0, productCategoryDto.getProduct(), productCategoryDto.getCategory());

    }

}
