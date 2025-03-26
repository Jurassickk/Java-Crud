package com.sena.crud_basic.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.sena.crud_basic.Dto.ProductCategoryDto;
import com.sena.crud_basic.Dto.ResponseDto;
import com.sena.crud_basic.model.ProductCategory;
import com.sena.crud_basic.repository.IProductCategory;

@Service
public class ProductCategoryService {

    @Autowired
    private IProductCategory productCategoryRepository;

    public ResponseDto save(ProductCategoryDto productCategoryDto) {
        if (productCategoryDto.getProduct() == null) {
            return new ResponseDto(HttpStatus.BAD_REQUEST.toString(), "El producto no puede ser nulo");
        }
    
        // Validación para getCategory
        if (productCategoryDto.getCategory() == null) {
            return new ResponseDto(HttpStatus.BAD_REQUEST.toString(), "La categoría no puede ser nula");
        }
    
        ProductCategory productCategory = convertToModel(productCategoryDto);
        productCategoryRepository.save(productCategory);
        return new ResponseDto(HttpStatus.OK.toString(), "Categoria del Producto agregado correctamente");
    }

    public List<ProductCategory> findAll() {
        return productCategoryRepository.findAll();
    }

    public Optional<ProductCategory> findById(int id) {
        return productCategoryRepository.findById(id);
    }

    public ResponseDto deleteProductCategory(int id) {
        if (!findById(id).isPresent()) {
            ResponseDto respuesta = new ResponseDto(HttpStatus.OK.toString(), "Categoria del Producto no Existe");
            return respuesta;
        }   
        productCategoryRepository.deleteById(id);
        ResponseDto respuesta = new ResponseDto(HttpStatus.OK.toString(), "Categoria del Producto Eliminado");
        return respuesta;
    }

    public ProductCategoryDto convertToDto(ProductCategory productCategory) {
        return new ProductCategoryDto(productCategory.getProduct(), productCategory.getCategory());
    }
    public ProductCategory convertToModel(ProductCategoryDto productCategoryDto) {
        return new ProductCategory(0, productCategoryDto.getProduct(), productCategoryDto.getCategory());

    }

}
