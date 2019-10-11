package com.dsoft.tpdsoft.model;

import static org.junit.Assert.*;

import org.joda.time.LocalDateTime;
import org.joda.time.LocalTime;
import java.time.DayOfWeek;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
/*
public class DeliveryInfoTest {
    private DeliveryInfo deliveryInfo;
    private List<Integer> ableDays;
    private LocalTime from;
    private LocalTime to;
    private Float price;
    
    @Before
    public void before() {
    	this.price = new Float(50);
    	this.ableDays = new ArrayList<Integer>(Arrays.asList(1,2,3,4,5));
    	this.from = new LocalTime(16,30);
    	this.to = new LocalTime(22,0);
        this.deliveryInfo = new DeliveryInfo(this.price,30,from, to, this.ableDays);
        this.deliveryInfo.setId(1);
    }

    // Getters and Setters
    @Test
    public void getters() {
        assertEquals(this.deliveryInfo.getId(), new Integer(1));
        assertEquals(this.deliveryInfo.getPrice(), price);
        assertEquals(this.deliveryInfo.getFrom(), from);
        assertEquals(this.deliveryInfo.getTo(), to);
        assertEquals(this.deliveryInfo.getAbleDays(), this.ableDays);
    }

    @Test
    public void setId(){
        this.deliveryInfo.setId(2);
        assertEquals(this.deliveryInfo.getId(), new Integer(2));
    }

    @Test
    public void setPrice() {
    	Float aPrice= new Float(40.5);
        this.deliveryInfo.setPrice(aPrice);
		assertEquals(this.deliveryInfo.getPrice(), aPrice);
    }

    @Test
    public void setFrom() {
    	
        LocalTime anHour = new LocalTime(9,30);
		this.deliveryInfo.setFrom(anHour );
        assertEquals(this.deliveryInfo.getFrom(), anHour);
    }

    @Test
    public void setTo() {
    	LocalTime anHour = new LocalTime(9,30);
        this.deliveryInfo.setTo(anHour);
        assertEquals(this.deliveryInfo.getTo(), anHour);
    }

    @Test
    public void setAbleDays() {
		List<Integer> someDays= new ArrayList<Integer>(Arrays.asList(1,2,3));
		this.deliveryInfo.setAbleDays(someDays);
        assertEquals(this.deliveryInfo.getAbleDays(), someDays);
    }
    
    @Test
    public void isValidDay() {
    	LocalDateTime localDateTime = new LocalDateTime(2019,9,19,18,0); // date 19/9/2019, 18hs
    	assertEquals(localDateTime.getDayOfWeek(),4);
    	assertTrue(this.deliveryInfo.isValidDay(localDateTime));
    }
    
    @Test
    public void isNotValidDay() {
    	LocalDateTime localDateTime = new LocalDateTime(2019,9,21,18,0); // date 19/9/2019, 18hs
    	assertEquals(localDateTime.getDayOfWeek(),6);
    	assertFalse(this.deliveryInfo.isValidDay(localDateTime));
    }
    
    @Test
    public void isValidHour() {
    	LocalDateTime localDateTime = new LocalDateTime(2019,9,19,18,0); // date 19/9/2019, 18hs
    	assertTrue(this.deliveryInfo.isValidHour(localDateTime));
    }
    
    @Test
    public void isNotValidHour() {
    	LocalDateTime localDateTime = new LocalDateTime(2019,9,19,18,0); // date 19/9/2019, 18hs
    }
    
    @Test
    public void givenDeliveryInfoFrom163to22AndLocalDateTimeAt18ItCanDeliverOrder() {
    	LocalDateTime localDateTime = new LocalDateTime(2019,9,19,18,0);
    	assertTrue(this.deliveryInfo.canDeliverOrder(localDateTime));
    }
}
*/