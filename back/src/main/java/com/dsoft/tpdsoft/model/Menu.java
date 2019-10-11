package com.dsoft.tpdsoft.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.List;
import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
public class Menu {
	@Id
	@GeneratedValue
	@Column(name = "id")
	private Integer id;
	
	@Size(min=4, max=30)
	@NotBlank(message = "Name cant be blank")
	@Column(name = "name")
	private String name;
	
	@Size(min=20, max=40)
	@NotBlank(message = "Description cant be blank")
	@Column(name = "description")
	private String description;

	@ManyToOne
	@JoinColumn
	@JsonIgnore
	private Provider provider;

	@ElementCollection
	@Enumerated
	private List<Category> categories; // TODO validate at least one category

	// @OneToOne(cascade = CascadeType.ALL)
	// private DeliveryInfo deliveryInfo;

	@Column(name = "price")
	private float price;
	
	@Max(20)
	@Column(name = "perday")
	private Integer maxSalesPerDay;

	@Column(name = "effective")
	private String effectiveDate; // obviously is a todo

	public Menu() {}

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

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Provider getProvider() {
		return provider;
	}

	public void setProvider(Provider provider) {
		this.provider = provider;
	}

	public List<Category> getCategories() {
		return categories;
	}

	public void setCategories(List<Category> categories) {
		this.categories = categories;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public Integer getMaxSalesPerDay() {
		return maxSalesPerDay;
	}

	public void setMaxSalesPerDay(Integer maxSalesPerDay) {
		this.maxSalesPerDay = maxSalesPerDay;
	}

	public String getEffectiveDate() {
		return effectiveDate;
	}

	public void setEffectiveDate(String effectiveDate) {
		this.effectiveDate = effectiveDate;
	}
}
