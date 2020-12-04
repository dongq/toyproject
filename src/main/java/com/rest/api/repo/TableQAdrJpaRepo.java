package com.rest.api.repo;

import com.rest.api.entity.TableQAdr;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TableQAdrJpaRepo extends JpaRepository<TableQAdr, Long> {
//    @Procedure(name = "TableQtrend.get_Trend")
//    TableQtrend get_Trend(@Param("date_in") String cdate);

    @Query(value = "CALL GET_ADR_CURRENT();", nativeQuery = true)
    List<TableQAdr> get_adr_current();

    @Query(value = "CALL GET_ADR_HIST();", nativeQuery = true)
    List<TableQAdr> get_adr_hist();
}

