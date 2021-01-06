package com.rest.api.controller.v1;

import com.rest.api.entity.TableQ3;
import com.rest.api.entity.TableQtrend;
import com.rest.api.model.response.ListResult;
import com.rest.api.repo.TableQ3JpaRepo;
import com.rest.api.repo.TableQtrendJpaRepo;
import com.rest.api.service.ResponseService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/v1")
public class TableQ3Controller {
    private final ResponseService responseService; // 결과를 처리할 Service
    private final TableQ3JpaRepo tableQ3JpaRepo;

    @GetMapping(path = "/q3")
    public ListResult<TableQ3> get_whobuy(@RequestParam("cdate") String cdate, @RequestParam("gubun") String gubun) {
        System.out.println("[REQ] WHOBUY cdate : " + cdate + " gubun : " + gubun);

        List<TableQ3> resultlist = tableQ3JpaRepo.get_whobuy(cdate, gubun);
        return responseService.getListResult(resultlist);
    }



}