package com.rest.api.controller.v1;

import com.rest.api.entity.TableQ4;
import com.rest.api.model.response.ListResult;
import com.rest.api.repo.TableQ4JpaRepo;
import com.rest.api.service.ResponseService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/v1")
public class TableQ4Controller {
    private final ResponseService responseService; // 결과를 처리할 Service
    private final TableQ4JpaRepo tableQ4JpaRepo;

    @GetMapping(value = "/q4")
    public ListResult<TableQ4> findAllTableQ4() {
        return responseService.getListResult(tableQ4JpaRepo.findAll());
    }
}