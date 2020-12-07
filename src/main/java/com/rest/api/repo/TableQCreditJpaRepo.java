package com.rest.api.repo;

import com.rest.api.entity.TableQAdr;
import com.rest.api.entity.TableQCredit;
import com.rest.api.entity.TableQJisu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TableQCreditJpaRepo extends JpaRepository<TableQCredit, Long> {
    @Query(value = "CALL GET_CREDIT();", nativeQuery = true)
    List<TableQCredit> get_credit();
    public List<TableQCredit> findTop500ByOrderByCdateDesc();

}

