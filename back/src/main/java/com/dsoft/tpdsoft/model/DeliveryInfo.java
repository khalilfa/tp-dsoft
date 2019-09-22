package com.dsoft.tpdsoft.model;


import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.joda.time.DateTime;
import org.joda.time.DateTime.Property;
import org.joda.time.LocalTime;

@Entity
public class DeliveryInfo {

	@Id @GeneratedValue
	private Integer id; // TODO do we want it to be saved??
	
	private Float price;
	
	private Integer averageTime;
	
	private LocalTime from; // int cause LocalDateTime work with this ??
	
	private LocalTime to;
	
	private List<Integer> ableDays; // mon = 1, tues = 2, wed=....
	
	public DeliveryInfo() {}
	
	public DeliveryInfo(Float price, Integer averageTime, LocalTime from, LocalTime to, List<Integer> ableDays) {
		this.price = price;
		this.averageTime = averageTime;
		this.from = from;
		this.to = to;
		this.ableDays = ableDays;
	}
	
	public Integer getId() {return id;}

	public void setId(Integer id) { this.id = id; }

	public Float getPrice() {return price;}

	public void setPrice(Float price) { this.price = price; }

	public Integer getAverageTime() { return averageTime; }

	public void setAverageTime(Integer averageTime) { this.averageTime = averageTime; }

	public LocalTime getFrom() { return from; }

	public void setFrom(LocalTime from) { this.from = from; }

	public LocalTime getTo() { return to; }

	public void setTo(LocalTime to) { this.to = to; }

	public List<Integer> getAbleDays() { return ableDays; }

	public void setAbleDays(List<Integer> ableDays) { this.ableDays = ableDays; }
	
	
	public Boolean canDeliverOrder(org.joda.time.LocalDateTime timeOrderDone) {
		return this.isValidDay(timeOrderDone) && this.isValidHour(timeOrderDone);
	}

	public boolean isValidHour(org.joda.time.LocalDateTime timeOrderDone) {
		LocalTime castedTimeOrderDone = new LocalTime(timeOrderDone.getHourOfDay(),timeOrderDone.getMinuteOfHour());
		return this.from.isBefore(castedTimeOrderDone) && this.to.isAfter(castedTimeOrderDone);
	}

	public boolean isValidDay(org.joda.time.LocalDateTime timeOrderDone) {
		return this.getAbleDays().contains( this.dayOfTimeOrderDone(timeOrderDone) );
	}

	private Integer dayOfTimeOrderDone(org.joda.time.LocalDateTime timeOrderDone) {
		return timeOrderDone.getDayOfWeek();
	}
	
	
}
