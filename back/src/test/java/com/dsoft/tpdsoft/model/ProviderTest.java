package com.dsoft.tpdsoft.model;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.assertEquals;

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

public class ProviderTest {
	
	private Validator validator;

	@Mock
	private AttentionSchedule attentionSchedule;

	@Mock
	private File logo;

	@Rule public MockitoRule mockitoRule = MockitoJUnit.rule(); // instance mock objects
	
	private Provider provider;
	
	@Before
	public void setUp() {
		this.provider = new Provider(attentionSchedule,
									"bar de cholo",
									logo,
									"kilmes",
								   	"gmap Api",
								   	"Lo de cholo vende las mejores birras artesanales",
								   	"cholo.com",
								   	500,
								   	"5441565853218",
								   	"juajua@jiji.com"
								   	);
		
		// create bean validator
		ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
		validator = factory.getValidator();
	}
	
	// getters
	@Test
	public void testGetters() {
		this.provider.setId(1);
		assertEquals((Integer) 1, provider.getId());
		//assertEquals(attentionSchedule, this.provider.getAttentionSchedule());
		assertEquals("bar de cholo", provider.getName() );
		assertEquals("kilmes",this.provider.getLocality());
		assertEquals("gmap Api", provider.getGmapLocation());
		assertEquals("Lo de cholo vende las mejores birras artesanales", provider.getServiceDescription() );
		assertEquals("cholo.com", provider.getUrlSite());
		assertEquals((Integer) 500, provider.getMetersRadioDelivery());
		assertEquals("5441565853218", provider.getPhoneNumber());
		assertEquals("juajua@jiji.com", provider.getEmail());
	}
	
	@Test
	public void addMenuDeleteMenuTest() {
		Menu menu = Mockito.mock(Menu.class);
		
		this.provider.addMenu(menu);
		assertEquals(this.provider.getMenuList().get(0), menu);
		
		this.provider.deleteMenu(menu);
		assertTrue(this.provider.getMenuList().isEmpty());
	}
	
	// setters
	@Test
	public void testSetters() {
		// test each one in order as in the constructor
				
		this.provider.setLocality("bernal");
		assertEquals(this.provider.getLocality(), "bernal");
		
		this.provider.setGmapLocation("lugar");
		assertEquals(this.provider.getGmapLocation(), "lugar");
		
		this.provider.setServiceDescription("Lo de cholo vende las mejores papas con queso");
		assertEquals("Lo de cholo vende las mejores papas con queso", this.provider.getServiceDescription());
		
		this.provider.setUrlSite("pocho.com");
		assertEquals(this.provider.getUrlSite(), "pocho.com");

		this.provider.setMetersRadioDelivery(800);
		assertEquals((Integer) 800, this.provider.getMetersRadioDelivery());
		
		this.provider.setPhoneNumber("5481565321854");
		assertEquals("5481565321854", this.provider.getPhoneNumber());
	}
	
	@Test
	public void givenAServiceWithTwentyMenusAddOneMoreShouldGiveAnErrorMessage() {
		
		Menu menu = Mockito.mock(Menu.class);
		for(int i=1; i<=20;i++) {this.provider.addMenu(menu);}
		
		this.provider.addMenu(menu);
		// test if there is a violation constraint
		Set<ConstraintViolation<Provider>> violations = validator.validate(provider);
		assertFalse(violations.isEmpty());
		
		// test message obtained is correct
		String violationConstraintMessage = "20 menus admitted";
		ConstraintViolation<Provider> violation = violations.iterator().next();
		assertEquals(violationConstraintMessage,violation.getMessage());
	}
	
	@Test
	public void givenAServiceWithABlankNameWhenSettingItShouldBreakTheNotEmptyConstraint() {
	
		this.provider.setName("");
		
		Set<ConstraintViolation<Provider>> violations = validator.validate(provider);
		assertFalse( violations.isEmpty());
	
	}
	
	@Test
	public void givenAServiceWithABlankLocalityWhenSettingItShouldBreakTheNotEmptyConstraint() {
		// same as above but with locality

		this.provider.setLocality("");
		Set<ConstraintViolation<Provider>> violations = validator.validate(provider);
		
		assertFalse( violations.isEmpty());
		
		ConstraintViolation<Provider> violation = violations.iterator().next();
		String blankLocalityViolationMessage = "Locality cant be blank";
		
		assertEquals(blankLocalityViolationMessage,violation.getMessage());
			
	}
	
	@Test
	public void givenAServiceWithDescriptionLessThan30WhenSettingItShouldBreakMinSizeConstraint() {
		
		this.provider.setServiceDescription("less than 30 :( ");
		Set<ConstraintViolation<Provider>> violations = validator.validate(provider);
		
		assertFalse( violations.isEmpty() );
		
		ConstraintViolation<Provider> violation = violations.iterator().next();
		String minDescriptionViolationMessage = "Type at least 30 chatacters";
		
		assertEquals(minDescriptionViolationMessage, violation.getMessage());
	}
	
	@Test
	public void givenAServiceWithDescriptionMoreThan200WhenSettingItShouldBreakMaxSizeConstraint() {
		
		this.provider.setServiceDescription("lorem ipsum sit amet ca lorem ipsum sit amet ca lorem ipsum sit amet ca lorem ipsum sit amet ca lorem ipsum sit amet ca lorem ipsum sit amet ca lorem ipsum sit amet ca lorem ipsum sit amet ca lorem ipsum sit amet ca lorem ipsum sit amet ca lorem ipsum sit amet ca lorem ipsum sit amet ca lorem ipsum sit amet ca lorem ipsum sit amet ca lorem ipsum sit amet ca lorem ipsum sit amet ca lorem ipsum sit amet ca lorem ipsum sit amet ca lorem ipsum sit amet ca lorem ipsum sit amet ca lorem ipsum sit amet ca lorem ipsum sit amet ca lorem ipsum sit amet ca ");
		Set<ConstraintViolation<Provider>> violations = validator.validate(provider);
		
		assertFalse( violations.isEmpty());
		
		ConstraintViolation<Provider> violation = violations.iterator().next();
		String maxDescriptionViolationMessage = "Too long description";
		
		assertEquals(maxDescriptionViolationMessage, violation.getMessage());
	}
	
	@Test
	public void givenAServiceWithValidEmailShoulntBreakEmailConstraint() {
		String validEmail = "coolemailisay@gmail.com";
		this.provider.setEmail(validEmail);
		Set<ConstraintViolation<Provider>> violations = validator.validate(provider);
		
		assertTrue(violations.isEmpty());
	}
	
	@Test
	public void givenAServiceWithInvalidEmailShouldtBreakEmailConstraint() {
		String invalidEmail = "coolemailisay@";
		this.provider.setEmail(invalidEmail);
		Set<ConstraintViolation<Provider>> violations = validator.validate(provider);
		
		assertFalse( violations.isEmpty() );
		
		String invalidEmailMessage = "Invalid mail format";
		ConstraintViolation<Provider> violation = violations.iterator().next();
		
		assertEquals(invalidEmailMessage, violation.getMessage());
	}
	
	//TODO telephone number validation

}
