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
@NamedStoredProcedureQuery(name = "tableqtrend.get_Trend",
        procedureName = "GET_TREND", parameters = {
        @StoredProcedureParameter(mode = ParameterMode.IN, name = "date_in", type = String.class)})
@Table(name = "tableqtrend")
public class TableQtrend {
    @Id
    private int ranking;
    @Column(nullable = false, unique = true, length = 6)
    private String code;
    @Column(nullable = false, length = 100)
    private String name;
    private int start_price;
    private int end_price;

    @Column(nullable = false, precision = 17, scale = 2)
    private BigDecimal gain_rate;
    @Column(nullable = false, precision = 17, scale = 2)
    private BigDecimal max_gain;
    @Column(nullable = false, precision = 17, scale = 2)
    private BigDecimal min_gain;

    private BigDecimal high;
    @Column(nullable = false, precision = 38, scale = 2)
    private BigDecimal mid;
    @Column(nullable = false, precision = 38, scale = 2)
    private BigDecimal low;
    @Column(nullable = false, precision = 38, scale = 2)
    private BigDecimal roe;
    @Column(nullable = false, precision = 17, scale = 0)
    private BigDecimal total;
    private int current_ranking;
}

