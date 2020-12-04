package com.rest.api.repo;

import com.rest.api.entity.TableQJisu;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TableQJisuJpaRepo extends JpaRepository<TableQJisu, Long> {
    public List<TableQJisu> findAllByOrderByIdAsc();
}

