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
@Table(name = "TableQ2")
public class TableQ2 {
    @Id
    private int ranking;
    @Column(nullable = false, unique = true, length = 6)
    private String code;
    @Column(nullable = false, length = 100)
    private String name;
    @Column(nullable = false, precision = 19, scale = 2)
    private BigDecimal expected;
    @Column(nullable = false, precision = 17, scale = 0)
    private BigDecimal totalvalue;
    @Column(nullable = false, precision = 19, scale = 2)
    private BigDecimal e_PER;
    @Column(nullable = false, length = 20)
    private String class_small;
    @Column(nullable = false, precision = 39, scale = 2)
    private BigDecimal avg_per;
}
