package com.rest.api.controller.v1;

import com.rest.api.entity.TableQ6new;
import com.rest.api.model.response.ListResult;
import com.rest.api.repo.TableQ6newJpaRepo;
import com.rest.api.service.ResponseService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/v1")
public class TableQ6newController {
    private final ResponseService responseService; // 결과를 처리할 Service
    private final TableQ6newJpaRepo tableQ6newJpaRepo;

    @GetMapping(value = "/q6new")
    public ListResult<TableQ6new> findAllTableQ6new() {
        System.out.println("[REQ] CONSENSUS NEW");

        return responseService.getListResult(tableQ6newJpaRepo.findAll());
    }
}