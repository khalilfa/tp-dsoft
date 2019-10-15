package com.dsoft.tpdsoft.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;
import javax.validation.constraints.*;

@Entity
public class Provider {
	@Id
	@GeneratedValue
	@Column(name = "id")
	private Integer id;
	
	@NotBlank(message="Name cant be blank")
	@Column(name = "name")
	private String name;

	@NotNull(message="Logo cant be blank")
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn
	private File logo;

	@NotBlank(message="Locality cant be blank")
	@Column(name = "locality")
	private String locality;

	@NotBlank(message="Address cant be blank")
	@Column(name = "gmap")
	private String gmapLocation;

	@Size(min=30, message="Type at least 30 chatacters")
	@Size(max=200, message="Too long description")
	@Column(name = "description")
	private String serviceDescription;

	@Column(name = "url")
	private String urlSite;

	@Email(message= "Invalid mail format")
	@Column(name = "email")
	private String email;

	@Pattern(regexp = "\\d{13}", message = "The number must have 13 characters")
	@NotEmpty(message = "Enter a phone number")
	@Column(name = "phone")
	private String phoneNumber;

	/*@NotNull(message = "Enter a attention schedule")
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "id")
	private AttentionSchedule schedule;*/

	@NotNull(message = "Enter a meter radio delivery")
	@Column(name = "radio")
	private Integer metersRadioDelivery;
	
	@Size(max=20, message = "20 menus admitted")
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "provider")
	private List<Menu> menuList = new ArrayList<>();

	public Provider() { }

	public Provider(AttentionSchedule attentionSchedule,
					String name, File logo, String locality, String gmapLocation, String serviceDescription,
					String urlSite, Integer metersRadioDelivery, String phoneNumber, String email) {
		//this.schedule = attentionSchedule;
		this.name = name;
		this.logo = logo;
		this.locality = locality;
		this.gmapLocation = gmapLocation;
		this.serviceDescription = serviceDescription;
		this.urlSite = urlSite;
		this.metersRadioDelivery = metersRadioDelivery;
		this.phoneNumber = phoneNumber;
		this.email = email;
		this.menuList = new ArrayList<Menu>();
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public File getLogo() {
		return logo;
	}

	public void setLogo(File logo) {
		this.logo = logo;
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

	public String getServiceDescription() {
		return serviceDescription;
	}

	public void setServiceDescription(String serviceDesciption) {
		this.serviceDescription = serviceDesciption;
	}

	public String getUrlSite() {
		return urlSite;
	}

	public void setUrlSite(String urlSite) {
		this.urlSite = urlSite;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
/*
	public AttentionSchedule getAttentionSchedule() {
		return this.schedule;
	}

	public void setAttentionSchedule(AttentionSchedule attentionSchedule) {
		this.schedule = attentionSchedule;
	}
*/
	public Integer getMetersRadioDelivery() {
		return metersRadioDelivery;
	}

	public void setMetersRadioDelivery(Integer metersRadioDelivery) {
		this.metersRadioDelivery = metersRadioDelivery;
	}

	public List<Menu> getMenus() {
		return menuList;
	}

	public void setMenus(List<Menu> menus) {
		this.menuList = menus;
	}

	public void addMenu(Menu menu) {
		this.menuList.add(menu);
	}

	public void deleteMenu(Menu menu) {
		this.menuList.remove(menu);
	}
}
