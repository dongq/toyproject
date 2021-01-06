package com.rest.api.controller.v1;

import com.rest.api.entity.TableQ6;
import com.rest.api.model.response.ListResult;
import com.rest.api.repo.TableQ6JpaRepo;
import com.rest.api.service.ResponseService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/v1")
public class TableQ6Controller {
    private final ResponseService responseService; // 결과를 처리할 Service
    private final TableQ6JpaRepo tableQ6JpaRepo;

    @GetMapping(value = "/q6")
    public ListResult<TableQ6> findAllTableQ6() {
        System.out.println("[REQ] CONSENSUS UP");

        return responseService.getListResult(tableQ6JpaRepo.findAll());
    }
}