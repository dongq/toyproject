package com.rest.api.repo;

import com.rest.api.entity.TableQtrend;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TableQtrendJpaRepo extends JpaRepository<TableQtrend, Long> {
//    @Procedure(name = "TableQtrend.get_Trend")
//    TableQtrend get_Trend(@Param("date_in") String cdate);

    @Query(value = "CALL GET_TREND(:date_in);", nativeQuery = true)
    List<TableQtrend> get_Trend(@Param("date_in") String cdate);
}

