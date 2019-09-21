package com.dsoft.tpdsoft.model;


import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class DeliveryInfo {

	@Id @GeneratedValue
	private Integer id; // TODO do we want it to be saved??
	
	private Float price;
	
	private Integer averageTime;
	
	private int from; // int cause LocalDateTime work with this ??
	
	private int to;
	
	private List<DayOfWeek> ableDays;
	
	public DeliveryInfo(Float price, Integer averageTime, int from, int to, List<DayOfWeek> ableDays) {
		this.price = price;
		this.averageTime = averageTime;
		this.from = from;
		this.to = to;
		this.ableDays = ableDays;
	}

	public Float getPrice() {return price;}

	public void setPrice(Float price) { this.price = price; }

	public Integer getAverageTime() { return averageTime; }

	public void setAverageTime(Integer averageTime) { this.averageTime = averageTime; }

	public int getFrom() { return from; }

	public void setFrom(int from) { this.from = from; }

	public int getTo() { return to; }

	public void setTo(int to) { this.to = to; }

	public List<DayOfWeek> getAbleDays() { return ableDays; }

	public void setAbleDays(List<DayOfWeek> ableDays) { this.ableDays = ableDays; }
	
}
