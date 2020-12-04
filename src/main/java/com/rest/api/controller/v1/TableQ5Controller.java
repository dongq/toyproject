package com.rest.api.controller.v1;

import com.rest.api.entity.TableQ5;
import com.rest.api.model.response.ListResult;
import com.rest.api.repo.TableQ5JpaRepo;
import com.rest.api.service.ResponseService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/v1")
public class TableQ5Controller {
    private final ResponseService responseService; // 결과를 처리할 Service
    private final TableQ5JpaRepo tableQ5JpaRepo;

    @GetMapping(value = "/q5")
    public ListResult<TableQ5> findAllTableQ5() {
        return responseService.getListResult(tableQ5JpaRepo.findAll());
    }
}