package com.rest.api.controller.v1;

import com.rest.api.entity.TableQ1;
import com.rest.api.entity.TableQtrend;
import com.rest.api.model.response.ListResult;
import com.rest.api.repo.TableQtrendJpaRepo;
import com.rest.api.service.ResponseService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/v1")
public class TableQtrendController {
    private final ResponseService responseService; // 결과를 처리할 Service
    private final TableQtrendJpaRepo tableQtrendJpaRepo;

    @GetMapping(path = "/qtrend")
    public ListResult<TableQtrend> get_Trend(@RequestParam("cdate") String cdate) {
        SimpleDateFormat format1 = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
        String today1 = format1.format(new Date());
        List<TableQtrend> resultlist = tableQtrendJpaRepo.get_Trend(cdate);
        System.out.println(today1 + " [REQ] TREND cdate : " + cdate);
        return responseService.getListResult(resultlist);
    }

}