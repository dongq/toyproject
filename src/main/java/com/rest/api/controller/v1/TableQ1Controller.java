package com.rest.api.controller.v1;

import com.rest.api.advice.exception.CUserNotFoundException;
import com.rest.api.entity.TableQ1;
import com.rest.api.model.response.CommonResult;
import com.rest.api.model.response.ListResult;
import com.rest.api.model.response.SingleResult;
import com.rest.api.repo.TableQ1JpaRepo;
import com.rest.api.service.ResponseService;
import com.rest.api.service.TableQ1Service;
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
public class TableQ1Controller {
    private final ResponseService responseService; // 결과를 처리할 Service
    private final TableQ1Service tableQ1Service;

    @GetMapping(value = "/q1")
    public ListResult<TableQ1> findAllTableQ1(@PageableDefault Pageable pageable) {
        Page<TableQ1> result =   tableQ1Service.getList(pageable);
        System.out.println("PAGE SIZE : " + result.getSize());
        System.out.println("TOTAL PAGES : " + result.getTotalPages());
        System.out.println("TOTAL COUNT : " + result.getTotalElements());
        System.out.println("NEXT : " + result.nextPageable());

        List<TableQ1> resultlist = result.getContent();
        return responseService.getListResult(resultlist);
    }
}