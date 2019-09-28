package com.dsoft.tpdsoft.model;

import java.util.List;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.joda.time.LocalTime;

@Entity
public class AttentionSchedule {
	
	@Id @GeneratedValue
	private Integer id;
	
	private LocalTime from;
	
	private LocalTime to;
	
	@ElementCollection
	private List<Integer> ableDays; // mon=1, tues=2, ...
	
	public AttentionSchedule(LocalTime from, LocalTime to, List<Integer> ableDays) {
		this.from = from;
		this.to   = to;
		this.ableDays = ableDays;
	}
	
	public AttentionSchedule() { }
	
	public Integer getId(){
		return this.id;
	}
	
	public void setId(Integer id){
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
	
	
}
