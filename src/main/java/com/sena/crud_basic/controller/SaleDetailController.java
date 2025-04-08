    package com.sena.crud_basic.controller;

    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.http.HttpStatus;
    import org.springframework.http.ResponseEntity;
    import org.springframework.web.bind.annotation.PostMapping;
    import org.springframework.web.bind.annotation.RequestBody;
    import org.springframework.web.bind.annotation.RequestMapping;
    import org.springframework.web.bind.annotation.RestController;

    import com.sena.crud_basic.Dto.SaleDetailDto;
    import com.sena.crud_basic.service.SaleDetailService;

    @RestController
    @RequestMapping("/api/v1/sale-details")
    public class SaleDetailController {
        /*  
            GET
            POST (REGISTER)
            PUT
            DELETE
        */

        @Autowired
        private SaleDetailService saleDetailService;

        @PostMapping("/")
        public ResponseEntity<Object> registerSaleDetail(@RequestBody SaleDetailDto saleDetail) {
            saleDetailService.save(saleDetail);
            return new ResponseEntity<>("Detalle de venta registrado correctamente", HttpStatus.OK);
        }
    }
