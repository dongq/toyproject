package com.rest.api.entity;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.math.BigDecimal;

@Builder
@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "TableQ6")
public class TableQ6 {
    @Id
    private int ranking;
    @Column(nullable = false, unique = true, length = 6)
    private String code;
    @Column(nullable = false, length = 100)
    private String name;
    @Column(nullable = false, length = 20)
    private String date;

    private double prev_revenue;
    private double prev_op;
    private double prev_net;
    private BigDecimal prev_per;
    private double revenue;
    private double opmargin;
    private double netmargin;
    private BigDecimal per;
}
