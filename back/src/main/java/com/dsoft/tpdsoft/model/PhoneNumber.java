package com.dsoft.tpdsoft.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class PhoneNumber {
	// TODO Validation
	
	@Id @GeneratedValue
	private Integer id;
	
	private Integer characteristic;
	private Integer number;
	
	public PhoneNumber(Integer characteristic,Integer number) {
		this.characteristic = characteristic;
		this.number = number;
	}
	
	public PhoneNumber() {}
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getCharacteristic() {
		return characteristic;
	}
	
	public void setCharacteristic(Integer characteristic) {
		this.characteristic = characteristic;
	}

	public Integer getNumber() {
		return number;
	}

	public void setNumber(Integer number) {
		this.number = number;
	}
	
	
}
