package com.dsoft.tpdsoft.model;

import java.util.List;

import javax.validation.constraints.Email;
import javax.validation.constraints.Size;

import org.joda.time.LocalTime;

public class Service extends AttentionSchedule{
	
	@Size(min=4, max=20)
	private String name;
	
	private String logoPath; // is it ok??
	
	private String locality;
	
	private String gmapLocation; // TODO pass gmpap service
	
	@Size(min=30, max=200)
	private String serviceDesciption;
	
	private String urlSite;
	
	private Float kmRatioDelivery;
	
	private PhoneNumber phoneNumber; // TODO validate characteristic and number per se
	
	@Email(message= "Ïnvalid mail format")
	private String email;
	
	public Service(LocalTime from, LocalTime to, List<Integer> ableDays,
			String name, String locality, String gmapLocation, String serviceDescription,
			String urlSite, Float kmRatioDelivery, PhoneNumber phoneNumber) {
		super(from, to, ableDays);
		this.name = name;
		this.logoPath = logoPath;
		this.locality = locality;
		this.gmapLocation = gmapLocation;
		this.urlSite = urlSite;
		this.kmRatioDelivery = kmRatioDelivery;
		this.phoneNumber = phoneNumber;
	}
	
	

}
