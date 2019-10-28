package com.dsoft.tpdsoft.model;

import java.math.BigDecimal;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Bill {
	
	private Float balance;
	
	public Bill() {}
	
	public Bill(Float balance) {
		this.balance = balance;
	}
	
	public String deposit(Float mount){
		if( this.canDeposit(mount)) {
		 this.balance = this.balance + mount;
		 return "Mount deposit correctly";
		}
		return "Cant deposit, mount passed overcome maxi permitted";
	}
	
	private boolean canDeposit(Float mount) {
		return mount + this.balance > this.maxPermitted();
	}

	private float maxPermitted() {
		return 10000;
	}

	public String extract(Float mount) {
		
		if( this.canExtract(mount) ) {
			this.balance = this.balance - mount;
			return "Mount extracted correctly";
		}
		
		return "Can't extract this mount";
	}

	private boolean canExtract(Float mount) {
		
		return mount <= this.balance;
	}
	
}
