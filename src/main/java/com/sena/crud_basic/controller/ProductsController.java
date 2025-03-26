package com.sena.crud_basic.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.sena.crud_basic.Dto.ProductsDto;
import com.sena.crud_basic.Dto.ResponseDto;
import com.sena.crud_basic.model.Products;

import com.sena.crud_basic.service.ProductService;

@RestController
@RequestMapping("/api/v1/products")
public class ProductsController {

    @Autowired
    private ProductService productsService;

    @GetMapping("/")
    public ResponseEntity<List<Products>> getAllProducts() {
        return new ResponseEntity<>(productsService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getProductById(@PathVariable int id) {
        Optional<Products> product = productsService.findById(id);
        return product.isPresent() ? new ResponseEntity<>(product, HttpStatus.OK)
                                   : new ResponseEntity<>("Producto no encontrado", HttpStatus.NOT_FOUND);
    }

    @GetMapping("/price-range")
    public ResponseEntity<List<Products>> getProductsByPriceRange(@RequestParam double minPrice, @RequestParam double maxPrice) {
        return new ResponseEntity<>(productsService.getProductsByPriceRange(minPrice, maxPrice), HttpStatus.OK);
    }

    @GetMapping("/type/{type}")
    public ResponseEntity<List<Products>> getProductsByType(@PathVariable String type) {
        return new ResponseEntity<>(productsService.getProductsByType(type), HttpStatus.OK);
    }

    @PostMapping("/anadir")
    public ResponseEntity<ResponseDto> addProduct(@RequestBody ProductsDto productsDto) {
        ResponseDto respuesta = productsService.save(productsDto);
        return new ResponseEntity<>(respuesta, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ResponseDto> deleteProduct(@PathVariable int id) {
        var message = productsService.deleteProduct(id);
        return new ResponseEntity<>(message, HttpStatus.OK);

    }
}
