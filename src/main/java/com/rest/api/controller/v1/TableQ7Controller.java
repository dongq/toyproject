package com.rest.api.controller.v1;

import com.rest.api.entity.TableQ7;
import com.rest.api.model.response.ListResult;
import com.rest.api.repo.TableQ7JpaRepo;
import com.rest.api.service.ResponseService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/v1")
public class TableQ7Controller {
    private final ResponseService responseService; // 결과를 처리할 Service
    private final TableQ7JpaRepo tableQ7JpaRepo;

    @GetMapping(value = "/q7")
    public ListResult<TableQ7> findAllTableQ7() {
        System.out.println("[REQ] CONSENSUS DOWN");

        return responseService.getListResult(tableQ7JpaRepo.findAll());
    }
}