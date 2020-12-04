package com.rest.api.service;

import com.rest.api.entity.TableQ1;
import com.rest.api.repo.TableQ1JpaRepo;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class TableQ1Service {
    private TableQ1JpaRepo tableQ1JpaRepo;

    public TableQ1Service(TableQ1JpaRepo tableQ1JpaRepo) {
        this.tableQ1JpaRepo = tableQ1JpaRepo;
    }

    public Page<TableQ1> getList(Pageable pageable) {
//        int page = (pageable.getPageNumber() == 0) ? 0 : (pageable.getPageNumber() - 1); // page는 index 처럼 0부터 시작
//        pageable = PageRequest.of(page, 10, Sort.Direction.ASC, "ranking");
        return tableQ1JpaRepo.findAll(pageable);
    }
}