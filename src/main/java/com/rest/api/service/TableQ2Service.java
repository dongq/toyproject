package com.rest.api.service;

import com.rest.api.entity.TableQ2;
import com.rest.api.repo.TableQ2JpaRepo;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class TableQ2Service {
    private TableQ2JpaRepo tableQ2JpaRepo;

    public TableQ2Service(TableQ2JpaRepo tableQ2JpaRepo) {
        this.tableQ2JpaRepo = tableQ2JpaRepo;
    }

    public Page<TableQ2> getList(Pageable pageable) {
//        int page = (pageable.getPageNumber() == 0) ? 0 : (pageable.getPageNumber() - 1); // page는 index 처럼 0부터 시작
//        pageable = PageRequest.of(page, 10, Sort.Direction.ASC, "ranking");
        return tableQ2JpaRepo.findAll(pageable);
    }
}