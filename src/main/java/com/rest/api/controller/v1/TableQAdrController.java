package com.rest.api.controller.v1;

import com.rest.api.entity.TableQAdr;
import com.rest.api.model.response.ListResult;
import com.rest.api.repo.TableQAdrJpaRepo;
import com.rest.api.service.ResponseService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/v1")
public class TableQAdrController {
    private final ResponseService responseService; // 결과를 처리할 Service
    private final TableQAdrJpaRepo tableQAdrJpaRepo;

    @GetMapping(path = "/qadrcurrent")
    public ListResult<TableQAdr> get_Adr_current() {
        List<TableQAdr> resultlist = tableQAdrJpaRepo.get_adr_current();
//        System.out.println("[REQ] MAIN ADR CURRENT");

        return responseService.getListResult(resultlist);
    }
    @GetMapping(path = "/qadrhist")
    public ListResult<TableQAdr> get_Adr_hist() {
        List<TableQAdr> resultlist = tableQAdrJpaRepo.get_adr_hist();
//        System.out.println("[REQ] MAIN ADR HIST");
        return responseService.getListResult(resultlist);
    }
}