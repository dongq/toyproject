package com.rest.api.entity;
import lombok.*;
import javax.persistence.*;

@Builder
@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "t_jisu")
public class TableQJisu {
    @Id
    private int id;
    @Column(nullable = false, length = 10)
    private String gubun;
    @Column(nullable = false, length = 10)
    private String cdate;
    @Column(nullable = false, length = 12)
    private String close;
    private double change;
    @Column(nullable = false, length = 10)
    private String rate;
}
