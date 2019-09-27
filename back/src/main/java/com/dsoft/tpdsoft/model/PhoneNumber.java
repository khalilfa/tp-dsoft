package com.dsoft.tpdsoft.model;

public class PhoneNumber {
	// TODO
	
	private Integer characteristic;
	private Integer number;
	
	public PhoneNumber(Integer characteristic,Integer number) {
		this.characteristic = characteristic;
		this.number = number;
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
