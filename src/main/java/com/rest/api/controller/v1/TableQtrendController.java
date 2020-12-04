package com.rest.api.controller.v1;

import com.rest.api.entity.TableQ1;
import com.rest.api.entity.TableQtrend;
import com.rest.api.model.response.ListResult;
import com.rest.api.repo.TableQtrendJpaRepo;
import com.rest.api.service.ResponseService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/v1")
public class TableQtrendController {
    private final ResponseService responseService; // 결과를 처리할 Service
    private final TableQtrendJpaRepo tableQtrendJpaRepo;

    @GetMapping(path = "/qtrend")
    public ListResult<TableQtrend> get_Trend(@RequestParam("cdate") String cdate) {
        List<TableQtrend> resultlist = tableQtrendJpaRepo.get_Trend(cdate);
        return responseService.getListResult(resultlist);
    }

}