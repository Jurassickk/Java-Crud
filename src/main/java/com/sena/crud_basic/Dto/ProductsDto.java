package com.sena.crud_basic.Dto;

public class ProductsDto {

    private String name;
    private String type;
    private double price;
    private String image;

    public ProductsDto(String name, String type, double price, String image) {
        this.name = name;
        this.type = type;
        this.price = price;
        this.image = image;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
