package com.dsoft.tpdsoft.model;

import java.util.List;

import org.joda.time.LocalTime;

public class AttentionSchedule {
	private LocalTime from;
	private LocalTime to;
	private List<Integer> ableDays; // mon=1, tues=2, ...
	
	public AttentionSchedule(LocalTime from, LocalTime to, List<Integer> ableDays) {
		this.from = from;
		this.to   = to;
		this.ableDays = ableDays;
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
	
	
}
