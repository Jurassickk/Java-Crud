package com.sena.crud_basic.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sena.crud_basic.Dto.SaleDetailDto;
import com.sena.crud_basic.model.SaleDetail;
import com.sena.crud_basic.repository.ISaleDetail;

@Service
public class SaleDetailService {

    @Autowired
    private ISaleDetail saleDetailRepository;

    public void save(SaleDetailDto saleDetailDto) {
        SaleDetail saleDetail = convertToModel(saleDetailDto);
        saleDetailRepository.save(saleDetail);
    }

    public List<SaleDetail> findAll() {
        return saleDetailRepository.findAll();
    }

    public Optional<SaleDetail> findById(int id) {
        return saleDetailRepository.findById(id);
    }

    public void delete(int id) {
        saleDetailRepository.deleteById(id);
    }

    public SaleDetailDto convertToDto(SaleDetail saleDetail) {
        return new SaleDetailDto(saleDetail.getSale(), saleDetail.getProduct(), saleDetail.getQuantity(), saleDetail.getUnitPrice());
    }

    public SaleDetail convertToModel(SaleDetailDto saleDetailDto) {
        return new SaleDetail(0, saleDetailDto.getSale(), saleDetailDto.getProduct(), saleDetailDto.getQuantity(), saleDetailDto.getUnitPrice());
    }
}
