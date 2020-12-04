package com.rest.api.controller.v1;

import com.rest.api.entity.TableQ3;
import com.rest.api.model.response.ListResult;
import com.rest.api.repo.TableQ3JpaRepo;
import com.rest.api.service.ResponseService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/v1")
public class TableQ3Controller {
    private final ResponseService responseService; // 결과를 처리할 Service
    private final TableQ3JpaRepo tableQ3JpaRepo;

    @GetMapping(value = "/q3")
    public ListResult<TableQ3> findAllTableQ3() {
        return responseService.getListResult(tableQ3JpaRepo.findAll());
    }
}