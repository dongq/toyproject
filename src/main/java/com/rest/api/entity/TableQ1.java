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
@Table(name = "tableq1")
public class TableQ1 {
    @Id
    private int ranking;
    @Column(nullable = false, unique = true, length = 6)
    private String code;
    @Column(nullable = false, length = 100)
    private String name;
    private int current;
    @Column(nullable = false, length = 20)
    private String class_small;
    @Column(nullable = false, precision = 38, scale = 2)
    private BigDecimal PBR;
    @Column(nullable = false, precision = 38, scale = 2)
    private BigDecimal PER;
    @Column(nullable = false, precision = 38, scale = 2)
    private BigDecimal PSR;
    @Column(nullable = false, precision = 38, scale = 2)
    private BigDecimal PCR;
    @Column(nullable = false, precision = 38, scale = 2)
    private BigDecimal high;
    @Column(nullable = false, precision = 38, scale = 2)
    private BigDecimal mid;
    @Column(nullable = false, precision = 38, scale = 2)
    private BigDecimal low;
    @Column(nullable = false, precision = 38, scale = 2)
    private BigDecimal roe;
    @Column(nullable = false, precision = 17, scale = 0)
    private BigDecimal total;
    @Column(nullable = false, length = 1)
    private String direction;
    @Column(nullable = false, length = 1)
    private String buysell;
    @Column(nullable = false, precision = 38, scale = 2)
    private BigDecimal rate;
    @Column(nullable = false, length = 8)
    private String gubun;

}
