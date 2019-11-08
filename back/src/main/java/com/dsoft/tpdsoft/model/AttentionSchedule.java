package com.dsoft.tpdsoft.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.Column;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.ElementCollection;
import javax.validation.constraints.NotNull;


@Entity
@Table(name = "schedules")
public class AttentionSchedule {
	
	@Id
    @GeneratedValue
	@Column(name = "id")
	private Integer id;

	@NotNull
	@Column(name = "time_from")
	private LocalTime from;

	@NotNull
	@Column(name = "time_to")
	private LocalTime to;

	@OneToOne(mappedBy = "schedule")
	@JsonIgnore
	private Provider provider;
	
	@ElementCollection
	private List<Integer> ableDays; // mon=1, tues=2, ...

	public AttentionSchedule() {}

	public AttentionSchedule(LocalTime from, LocalTime to) {
		this.from = from;
		this.to = to;
		this.ableDays = new ArrayList<>();
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public LocalTime getFrom() {
		return from;
	}

	public void setFrom(LocalTime from) {
		this.from = from;
	}

	public LocalTime getTo() {
		return to;
	}

	public void setTo(LocalTime to) {
		this.to = to;
	}

	public List<Integer> getAbleDays() {
		return ableDays;
	}

	public void setAbleDays(List<Integer> ableDays) {
		this.ableDays = ableDays;
	}

	public Provider getProvider() {
		return provider;
	}

	public void setProvider(Provider provider) {
		this.provider = provider;
	}
}