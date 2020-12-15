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
@Table(name = "tableq4")
public class TableQ4 {
    @Id
    private int ranking;
    @Column(nullable = false, unique = true, length = 6)
    private String code;
    @Column(nullable = false, length = 100)
    private String name;
    private int start_price;
    private int end_price;

    @Column(nullable = false, precision = 17, scale = 2)
    private BigDecimal changes;

    private double sum_gikwan;
    private double sum_foreign;
}

