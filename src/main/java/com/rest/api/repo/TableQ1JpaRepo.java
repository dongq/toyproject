package com.rest.api.repo;

import com.rest.api.entity.TableQ1;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TableQ1JpaRepo extends JpaRepository<TableQ1, Long> {
    List<TableQ1> findAllByClasssmallOrderByRanking(String sector);

}

