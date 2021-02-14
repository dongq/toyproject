package com.rest.api.controller.v1;

import com.rest.api.entity.TableQ3;
import com.rest.api.entity.TableQJisu;
import com.rest.api.entity.TableQPerftrend;
import com.rest.api.model.response.ListResult;
import com.rest.api.repo.TableQ3JpaRepo;
import com.rest.api.repo.TableQJisuJpaRepo;
import com.rest.api.repo.TableQPerftrendJpaRepo;
import com.rest.api.service.ResponseService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/v1")
public class TableQPerftrendController {
    private final ResponseService responseService; // 결과를 처리할 Service
    private final TableQPerftrendJpaRepo tableQPerftrendJpaRepo;

    @GetMapping(value = "/qperftrend")
    public ListResult<TableQPerftrend> findAllTableQPerftrend() {
//        System.out.println("[REQ] MAIN PERFORMANCE TREND");
        return responseService.getListResult(tableQPerftrendJpaRepo.findAllByOrderByDaysAsc());
    }
}