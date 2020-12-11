package com.rest.api.repo;

import com.rest.api.entity.TableQ3;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TableQ3JpaRepo extends JpaRepository<TableQ3, Long> {
    @Query(value = "CALL GET_WHOBUY(:date_in, :gubun_in);", nativeQuery = true)
    List<TableQ3> get_whobuy(@Param("date_in") String cdate, @Param("gubun_in") String gubun);
}

