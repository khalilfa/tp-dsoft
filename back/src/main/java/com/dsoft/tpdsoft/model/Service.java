package com.dsoft.tpdsoft.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.joda.time.LocalTime;

@Entity
public class Service extends AttentionSchedule{
	
	@NotBlank
	private String name;
	
	@NotBlank
	private String locality;
	
	private String gmapLocation; // TODO pass gmpap service or similar
	
	@Size(min=30, max=200)
	private String serviceDesciption;
	
	private String urlSite;
	
	private Float kmRatioDelivery;
	
	private PhoneNumber phoneNumber; // TODO validate characteristic and number per se
	
	private List<Menu> menus;
	
	@Email(message= "Ïnvalid mail format")
	private String email;
	
	public Service(LocalTime from, LocalTime to, List<Integer> ableDays,
			String name, String locality, String gmapLocation, String serviceDescription,
			String urlSite, Float kmRatioDelivery, PhoneNumber phoneNumber, String email) {
		super(from, to, ableDays);
		this.name = name;
		this.locality = locality;
		this.gmapLocation = gmapLocation;
		this.serviceDesciption = serviceDescription;
		this.urlSite = urlSite;
		this.kmRatioDelivery = kmRatioDelivery;
		this.phoneNumber = phoneNumber;
		this.email = email;
		this.menus = new ArrayList<Menu>();
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLocality() {
		return locality;
	}

	public void setLocality(String locality) {
		this.locality = locality;
	}

	public String getGmapLocation() {
		return gmapLocation;
	}

	public void setGmapLocation(String gmapLocation) {
		this.gmapLocation = gmapLocation;
	}

	public String getServiceDesciption() {
		return serviceDesciption;
	}

	public void setServiceDesciption(String serviceDesciption) {
		this.serviceDesciption = serviceDesciption;
	}

	public String getUrlSite() {
		return urlSite;
	}

	public void setUrlSite(String urlSite) {
		this.urlSite = urlSite;
	}

	public Float getKmRatioDelivery() {
		return kmRatioDelivery;
	}

	public void setKmRatioDelivery(Float kmRatioDelivery) {
		this.kmRatioDelivery = kmRatioDelivery;
	}

	public PhoneNumber getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(PhoneNumber phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public List<Menu> getMenus() {
		return menus;
	}

	public void setMenus(List<Menu> menus) {
		this.menus = menus;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	public void addMenu(Menu menu) {
		this.menus.add(menu);
	}
	
	public void deleteMenu(Menu menu) {
		this.menus.remove(menu);
	}
	
	public void updateMenu() {} // TODO update with the specifics fields given

}
