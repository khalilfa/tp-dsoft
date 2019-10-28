package com.dsoft.tpdsoft.model;

import static org.junit.Assert.assertEquals;

import org.junit.Before;
import org.junit.Test;

public class BillTest {

	private Bill bill;
	
	
	@Before
	public void setUp() {
		this.bill = new Bill(0f);
	}
	// Extract tests
	@Test
	public void ifExtractAnAmountGreaterThanBalanceGivesCantExtractErrorMessage() {
		
		this.bill.deposit(100f);
		assertEquals(this.bill.cantExtractMessage(), this.bill.extract(100.1f));
	}
	
	@Test
	public void ifExtractAnAmountLessThanTheGivenInTheBalanceReturnsCorretExtractMessage() {
		this.bill.deposit(100f);
		assertEquals(bill.canExtractMessage(), this.bill.extract(50f));
	}
	
	// Deposit
	@Test
	public void ifDepositAnAmountLessThanPermittedItGivesCanDepositMessage() {
		assertEquals(this.bill.canDepositMessage(), this.bill.deposit(9999.99f));
	}
	
	@Test
	public void ifDepositAnAmountGreaterThanPermittedItGivesCanDepositMessage() {
		assertEquals(this.bill.cantDepositMessage(), this.bill.deposit(10000.01f));
	}
	
}
