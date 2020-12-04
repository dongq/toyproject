package com.rest.api.entity;
import lombok.*;
import javax.persistence.*;
import java.sql.Date;

@Builder
@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "t_perf_trend")
public class TableQPerftrend {
    @Id
    private int days;
    @Column(nullable = false, length = 10)
    private String cdate;
    private double kospi;
    private double kosdaq;
    private double dow;
    private double us500;
    private double nasdaq;
    private double chi;
    private double dax;
}
