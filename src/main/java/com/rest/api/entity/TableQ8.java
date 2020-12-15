package com.rest.api.entity;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Builder
@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "tableq8")
public class TableQ8 {
    @Id
    @Column(nullable = false, length = 6)
    private String market;
    private double per;
    private double pbr;
}
