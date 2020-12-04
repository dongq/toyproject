package com.rest.api.entity;
import lombok.*;
import javax.persistence.*;
import java.math.BigDecimal;

@Builder
@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@NamedStoredProcedureQuery(name = "TableQAdr.get_Adr_current",procedureName = "GET_ADR_CURRENT")
@NamedStoredProcedureQuery(name = "TableQAdr.get_Adr_hist",procedureName = "GET_ADR_HIST")
@Table(name = "TableQAdr")
public class TableQAdr {
    @Id
    private int id;
    @Column(nullable = false, length = 10)
    private String cdate;
    @Column(nullable = false, length = 5)
    private String ctime;
    @Column(nullable = false, length = 6)
    private String kospi_value;
    @Column(nullable = false, length = 6)
    private String kosdak_value;
    @Column(nullable = false, precision = 17, scale = 2)
    private BigDecimal kospi_updown;
    @Column(nullable = false, precision = 17, scale = 2)
    private BigDecimal kosdak_updown;
}

