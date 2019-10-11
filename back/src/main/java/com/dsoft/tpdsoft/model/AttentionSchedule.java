package com.dsoft.tpdsoft.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import org.joda.time.LocalTime;

@Entity
@Table(name = "schedules")
public class AttentionSchedule {
	
	@Id
    @GeneratedValue
	@Column(name = "id")
	private Integer id;

	@NotNull
	@Column(name = "time_from")
	private Integer from;

	@NotNull
	@Column(name = "time_to")
	private Integer to;

	//@OneToOne(mappedBy = "schedule", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	//private Provider provider;
	
	//@ElementCollection
	//private List<Integer> ableDays = new ArrayList<>(); // mon=1, tues=2, ...

	public AttentionSchedule() {}

	public AttentionSchedule(Integer from, Integer to, List<Integer> ableDays) {
		this.from = from;
		this.to = to;
		//this.ableDays = ableDays;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getFrom() {
		return from;
	}

	public void setFrom(Integer from) {
		this.from = from;
	}

	public Integer getTo() {
		return to;
	}

	public void setTo(Integer to) {
		this.to = to;
	}
/*
	public List<Integer> getAbleDays() {
		return ableDays;
	}

	public void setAbleDays(List<Integer> ableDays) {
		this.ableDays = ableDays;
	}*/
}