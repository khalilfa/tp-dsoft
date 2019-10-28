package com.dsoft.tpdsoft.model;

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
		 return canDepositMessage();
		}
		return cantDepositMessage();
	}

	public String canDepositMessage() {
		return "Mount deposit correctly";
	}

	public String cantDepositMessage() {
		return "Cant deposit, mount passed overcome max permitted";
	}
	
	private boolean canDeposit(Float mount) {
		return mount + this.balance <= this.maxPermitted();
	}

	private float maxPermitted() {
		return 10000;
	}

	public String extract(Float mount) {
		
		if( this.canExtract(mount) ) {
			this.balance = this.balance - mount;
			return canExtractMessage();
		}
		
		return cantExtractMessage();
	}

	public String canExtractMessage() {
		return "Mount extracted correctly";
	}

	public String cantExtractMessage() {
		return "Can't extract this mount";
	}

	private boolean canExtract(Float mount) {
		
		return mount <= this.balance;
	}
	
}
