package com.rest.api.repo;

import com.rest.api.entity.TableQJisu;
import com.rest.api.entity.TableQPerftrend;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TableQPerftrendJpaRepo extends JpaRepository<TableQPerftrend, Long> {
    public List<TableQPerftrend> findAllByOrderByDaysAsc();
}

