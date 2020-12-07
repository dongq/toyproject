package com.rest.api.entity;
import lombok.*;
import javax.persistence.*;

@Builder
@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
//@NamedStoredProcedureQuery(name = "TableQCredit.get_credit",procedureName = "GET_CREDIT")

@Table(name = "t_credit")
public class TableQCredit {
    @Id
    private String cdate;
    private double 고객예탁금;
    private double 고객예탁금_증감;
    private double 신용잔고;
    private double 신용잔고_증감;
    private double 펀드주식형;
    private double 펀드주식형_증감;
    private double 펀드혼합형;
    private double 펀드혼합형_증감;
    private double 펀드채권형;
    private double 펀드채권형_증감;
}
