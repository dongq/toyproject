package com.rest.api.controller.v1;

import com.rest.api.entity.TableQ3;
import com.rest.api.entity.TableQJisu;
import com.rest.api.model.response.ListResult;
import com.rest.api.repo.TableQ3JpaRepo;
import com.rest.api.repo.TableQJisuJpaRepo;
import com.rest.api.service.ResponseService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/v1")
public class TableQJisuController {
    private final ResponseService responseService; // 결과를 처리할 Service
    private final TableQJisuJpaRepo tableQJisuJpaRepo;

    @GetMapping(value = "/qjisu")
    public ListResult<TableQJisu> findAllTableQJisu() {
        return responseService.getListResult(tableQJisuJpaRepo.findAllByOrderByIdAsc());
    }
}