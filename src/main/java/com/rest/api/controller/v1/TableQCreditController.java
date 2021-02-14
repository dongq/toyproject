package com.rest.api.controller.v1;

import com.rest.api.entity.TableQCredit;
import com.rest.api.entity.TableQJisu;
import com.rest.api.model.response.ListResult;
import com.rest.api.repo.TableQCreditJpaRepo;
import com.rest.api.service.ResponseService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/v1")
public class TableQCreditController {
    private final ResponseService responseService; // 결과를 처리할 Service
    private final TableQCreditJpaRepo tableQCreditJpaRepo;

   @GetMapping(path = "/qcredit5")   // 최근 5일
   public ListResult<TableQCredit> get_credit() {
       List<TableQCredit> resultlist = tableQCreditJpaRepo.get_credit();
 //      System.out.println("[REQ] MAIN CREDIT RECENT 5 DAY");
       return responseService.getListResult(resultlist);
   }
    @GetMapping(path = "/qcredit")
    public ListResult<TableQCredit> findAllTableQCredit() {
   //     System.out.println("[REQ] MAIN CREDIT RECENT 500 DAY");
        return responseService.getListResult(tableQCreditJpaRepo.findTop500ByOrderByCdateDesc());
    }

}