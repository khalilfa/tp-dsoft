package com.dsoft.tpdsoft.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.ArrayList;
import java.util.List;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.Column;
import javax.persistence.OneToOne;
import javax.persistence.CascadeType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.FetchType;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.validation.constraints.Email;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.NotEmpty;


@Entity
public class Provider {
	@Id
	@GeneratedValue
	@Column(name = "id")
	private Integer id;
	
	@NotBlank(message="Name cant be blank")
	@Column(name = "name")
	private String name;

	// @NotNull(message="Logo cant be blank")
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn
	@JsonIgnore
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

	@NotNull(message = "Enter a attention schedule")
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn
	private AttentionSchedule schedule;

	@NotNull(message = "Enter a meter radio delivery")
	@Column(name = "radio")
	private Integer metersRadioDelivery;
	
	@Size(max=20, message = "20 menus admitted")
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "provider")
	private List<Menu> menuList = new ArrayList<>();

	@Column(name = "credit")
	private Double credit = 0.0;

	public Provider() {
		this.logo = new File();
	}

	public Provider(
			AttentionSchedule attentionSchedule,
			String name,
			File logo,
			String locality,
			String gmapLocation,
			String serviceDescription,
			String urlSite,
			Integer metersRadioDelivery,
			String phoneNumber,
			String email) {
		this.schedule = attentionSchedule;
		this.name = name;
		this.logo = logo;
		this.locality = locality;
		this.gmapLocation = gmapLocation;
		this.serviceDescription = serviceDescription;
		this.urlSite = urlSite;
		this.metersRadioDelivery = metersRadioDelivery;
		this.phoneNumber = phoneNumber;
		this.email = email;
		this.menuList = new ArrayList<>();
	}

	public void addCredit(Double credit) {
		this.credit += credit;
	}

	public void addMenu(Menu menu) {
		this.menuList.add(menu);
	}

	public void deleteMenu(Menu menu) {
		this.menuList.remove(menu);
	}

	public void substractCredit(Double credit) {
		this.credit -= credit;
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

	public void setServiceDescription(String serviceDescription) {
		this.serviceDescription = serviceDescription;
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

	public AttentionSchedule getSchedule() {
		return schedule;
	}

	public void setSchedule(AttentionSchedule schedule) {
		this.schedule = schedule;
	}

	public Integer getMetersRadioDelivery() {
		return metersRadioDelivery;
	}

	public void setMetersRadioDelivery(Integer metersRadioDelivery) {
		this.metersRadioDelivery = metersRadioDelivery;
	}

	public List<Menu> getMenuList() {
		return menuList;
	}

	public void setMenuList(List<Menu> menuList) {
		this.menuList = menuList;
	}

	public Double getCredit() {
		return credit;
	}

	public void setCredit(Double credit) {
		this.credit = credit;
	}
}
