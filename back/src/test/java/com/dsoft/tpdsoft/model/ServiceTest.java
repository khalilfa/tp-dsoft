package com.dsoft.tpdsoft.model;

import org.joda.time.LocalTime;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.assertEquals;


import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;

import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnit;
import org.mockito.junit.MockitoRule;

public class ServiceTest {
	
	private Validator validator;
	
	@Mock
	private PhoneNumber phoneNumber;
	
	private String description;
	
	private LocalTime from;
	
	private LocalTime to;
	
	private List<Integer> ableDays;
	
	private Float kmRatio = 10f; 
	
	@Rule public MockitoRule mockitoRule = MockitoJUnit.rule(); // instance mock objects
	
	private Service service;
	
	@Before
	public void setUp() {
		this.from = new LocalTime(16,00);
		this.to = new LocalTime(21,00);
		this.description = "lorem ipsum sit amet consecutor vladimificator ureds bla bla";
		this.ableDays = new ArrayList<Integer>();
		
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
		
		// create bean validator
		ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
		validator = factory.getValidator();
	}
	
	// getters
	@Test
	public void testGetters() {
		this.service.setId(1);
		assertEquals(service.getId(),new Integer(1));
		assertEquals(service.getFrom(),from);
		assertEquals(service.getTo(),to);
		assertEquals(service.getAbleDays(),ableDays);
		assertEquals(service.getName(),"bar de cholo" );
		assertEquals(service.getLocality(),"kilmes" );
		assertEquals(service.getGmapLocation(),"gmap Api");
		assertEquals(service.getServiceDesciption(), description);
		assertEquals(service.getUrlSite(),"cholo.com" );
		assertEquals(service.getKmRatioDelivery(),kmRatio );
		assertEquals(service.getPhoneNumber(),phoneNumber);
		assertEquals(service.getEmail(),"juajua@jiji.com");
	}
	
	@Test
	public void addMenuDeleteMenuTest() {
		
		
		Menu menu = Mockito.mock(Menu.class);
		
		this.service.addMenu(menu);
		assertEquals(this.service.getMenus().get(0), menu);
		
		this.service.deleteMenu(menu);
		assertTrue(this.service.getMenus().isEmpty());
	}
	
	// setters
	@Test
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
	
	@Test
	public void givenAServiceWithTwentyMenusAddOneMoreShouldGiveAnErrorMessage() {
		
		Menu menu = Mockito.mock(Menu.class);
		for(int i=1; i<=20;i++) {this.service.addMenu(menu);}
		
		this.service.addMenu(menu);
		// test if there is a violation constraint
		Set<ConstraintViolation<Service>> violations = validator.validate(service);
		assertFalse(violations.isEmpty());
		
		// test message obtained is correct
		String violationConstraintMessage = "20 menus admitted";
		ConstraintViolation<Service> violation = violations.iterator().next();
		assertEquals(violationConstraintMessage,violation.getMessage());
	}
	
	@Test
	public void givenAServiceWithABlankNameWhenSettingItShouldBreakTheNotEmptyConstraint() {
	
		this.service.setName("");
		
		Set<ConstraintViolation<Service>> violations = validator.validate(service);
		assertTrue(! violations.isEmpty());
	
	}
	
	@Test
	public void givenAServiceWithABlankLocalityWhenSettingItShouldBreakTheNotEmptyConstraint() {
		// same as above but with locality

		this.service.setLocality("");
		Set<ConstraintViolation<Service>> violations = validator.validate(service);
		
		assertTrue(! violations.isEmpty());
		
		ConstraintViolation<Service> violation = violations.iterator().next();
		String blankLocalityViolationMessage = "Locality cant be blank";
		
		assertEquals(blankLocalityViolationMessage,violation.getMessage());
			
	}
	
	@Test
	public void givenAServiceWithDescriptionLessThan30WhenSettingItShouldBreakMinSizeConstraint() {
		
		this.service.setServiceDesciption("less than 30 :( ");
		Set<ConstraintViolation<Service>> violations = validator.validate(service);
		
		assertTrue(! violations.isEmpty());
		
		ConstraintViolation<Service> violation = violations.iterator().next();
		String minDescriptionViolationMessage = "Type at least 30 chatacters";
		
		assertEquals(minDescriptionViolationMessage, violation.getMessage());
	}
	
	@Test
	public void givenAServiceWithDescriptionMoreThan200WhenSettingItShouldBreakMaxSizeConstraint() {
		
		this.service.setServiceDesciption("lorem ipsum sit amet ca lorem ipsum sit amet ca lorem ipsum sit amet ca lorem ipsum sit amet ca lorem ipsum sit amet ca lorem ipsum sit amet ca lorem ipsum sit amet ca lorem ipsum sit amet ca lorem ipsum sit amet ca lorem ipsum sit amet ca lorem ipsum sit amet ca lorem ipsum sit amet ca lorem ipsum sit amet ca lorem ipsum sit amet ca lorem ipsum sit amet ca lorem ipsum sit amet ca lorem ipsum sit amet ca lorem ipsum sit amet ca lorem ipsum sit amet ca lorem ipsum sit amet ca lorem ipsum sit amet ca lorem ipsum sit amet ca lorem ipsum sit amet ca ");
		Set<ConstraintViolation<Service>> violations = validator.validate(service);
		
		assertTrue(! violations.isEmpty());
		
		ConstraintViolation<Service> violation = violations.iterator().next();
		String maxDescriptionViolationMessage = "Too long description";
		
		assertEquals(maxDescriptionViolationMessage, violation.getMessage());
	}
	
	@Test
	public void givenAServiceWithValidEmailShoulntBreakEmailConstraint() {
		String validEmail = "coolemailisay@gmail.com";
		this.service.setEmail(validEmail);
		Set<ConstraintViolation<Service>> violations = validator.validate(service);
		
		assertTrue(violations.isEmpty());
	}
	
	@Test
	public void givenAServiceWithInvalidEmailShouldtBreakEmailConstraint() {
		String invalidEmail = "coolemailisay@";
		this.service.setEmail(invalidEmail);
		Set<ConstraintViolation<Service>> violations = validator.validate(service);
		
		assertFalse( violations.isEmpty() );
		
		String invalidEmailMessage = "Ïnvalid mail format";
		ConstraintViolation<Service> violation = violations.iterator().next();
		
		assertEquals(invalidEmailMessage, violation.getMessage());
	}
	
	//TODO telephone number validation

}
