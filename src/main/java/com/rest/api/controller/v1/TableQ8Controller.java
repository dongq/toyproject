package com.rest.api.controller.v1;

import com.rest.api.entity.TableQ8;
import com.rest.api.model.response.ListResult;
import com.rest.api.repo.TableQ8JpaRepo;
import com.rest.api.service.ResponseService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/v1")
public class TableQ8Controller {
    private final ResponseService responseService; // 결과를 처리할 Service
    private final TableQ8JpaRepo tableQ8JpaRepo;

    @GetMapping(value = "/q8")
    public ListResult<TableQ8> findAllTableQ8() {
        System.out.println("[REQ] MAIN MARKET PBR PER");

        return responseService.getListResult(tableQ8JpaRepo.findAll());
    }
}