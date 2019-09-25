package com.dsoft.tpdsoft.model;

import org.joda.time.LocalTime;

import static org.junit.Assert.assertTrue;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.junit.Before;
import org.junit.Rule;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnit;
import org.mockito.junit.MockitoRule;

public class ServiceTest {
	
	@Mock
	PhoneNumber phoneNumber;
	
	@Mock 
	String description;
	
	@Mock
	LocalTime from;
	
	@Mock
	LocalTime to;
	
	@Mock
	List<Integer> ableDays;
	
	@Mock
	Float kmRatio = 10f; 
	
	@Rule public MockitoRule mockitoRule = MockitoJUnit.rule(); // instance mock objects
	
	private Service service;
	
	@Before
	public void setUp() {
		this.service = new Service(from, to, ableDays,
									"bar de cholo",
								   "kilmes",
								   "gmap Api",
								   description,
								   "cholo.com",
								   10f,
								   phoneNumber,
								   "juajua@jiji.com"
								   );
	}
	
	
	// getters
	
	public void testGetters() {
		assertEquals(service.getFrom(),from);
		assertEquals(service.getTo(),to);
		assertEquals(service.getFrom(),ableDays);
		assertEquals(service.getName(),"bar de cholo" );
		assertEquals(service.getLocality(),"kilmes" );
		assertEquals(service.getGmapLocation(),"gmap api");
		assertEquals(service.getServiceDesciption(), description);
		assertEquals(service.getUrlSite(),"cholo.com" );
		assertEquals(service.getKmRatioDelivery(),kmRatio );
		assertEquals(service.getPhoneNumber(),phoneNumber);
		assertEquals(service.getEmail(),"juajua@jiji.com");
	}
	
	public void addMenuDeleteMenuTest() {
		
		
		Menu menu = Mockito.mock(Menu.class);
		
		this.service.addMenu(menu);
		assertEquals(this.service.getMenus().get(0), menu);
		
		this.service.deleteMenu(menu);
		assertTrue(this.service.getMenus().isEmpty());
	}
	
	// setters

	public void testSetters() {
		// test each one in order as in the constructor
		
		this.service.setFrom(from);
		assertEquals(this.service.getFrom(), from);
		
		this.service.setTo(to);
		assertEquals(this.service.getTo(), to);
		
		this.service.setAbleDays(ableDays);
		assertEquals(this.service.getAbleDays(), ableDays);
		
		this.service.setLocality("bernal");
		assertEquals(this.service.getLocality(), "bernal");
		
		this.service.setGmapLocation("lugar");
		assertEquals(this.service.getGmapLocation(), "lugar");
		
		this.service.setServiceDesciption(description);
		assertEquals(this.service.getServiceDesciption(), description);
		
		this.service.setUrlSite("pocho.com");
		assertEquals(this.service.getUrlSite(), "pocho.com");
		
		Float kmRatio = new Float(50);
		this.service.setKmRatioDelivery(kmRatio);
		assertEquals(this.service.getKmRatioDelivery(), kmRatio);
		
		this.service.setPhoneNumber(phoneNumber);
		assertEquals(this.service.getPhoneNumber(), phoneNumber);
	}
	
	//public void 
}
