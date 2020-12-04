package com.rest.api.controller.v1;

import com.rest.api.advice.exception.CUserNotFoundException;
import com.rest.api.entity.TableQ2;
import com.rest.api.model.response.CommonResult;
import com.rest.api.model.response.ListResult;
import com.rest.api.model.response.SingleResult;
import com.rest.api.service.ResponseService;
import com.rest.api.service.TableQ2Service;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/v1")
public class TableQ2Controller {
    private final ResponseService responseService; // 결과를 처리할 Service
    private final TableQ2Service tableQ2Service;

    @GetMapping(value = "/q2")
    public ListResult<TableQ2> findAllTableQ2(@PageableDefault Pageable pageable) {
        Page<TableQ2> result =   tableQ2Service.getList(pageable);
        System.out.println("PAGE SIZE : " + result.getSize());
        System.out.println("TOTAL PAGES : " + result.getTotalPages());
        System.out.println("TOTAL COUNT : " + result.getTotalElements());
        System.out.println("NEXT : " + result.nextPageable());

        List<TableQ2> resultlist = result.getContent();
        return responseService.getListResult(resultlist);
    }
}