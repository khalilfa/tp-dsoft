package com.dsoft.tpdsoft.model;

import java.math.BigDecimal;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Bill {
	
	@Min(0)
	@Max(100000)
	private Float balance;
	
	public Bill() {}
	
	public Bill(Float balance) {
		this.balance = balance;
	}
	
	public void deposit(Float mount) {
		this.balance = this.balance + mount; 
	}
	
	public void extract(Float mount) {
		this.balance = this.balance - mount;
	}
}
