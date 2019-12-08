package com.dsoft.tpdsoft.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.validation.constraints.Min;
import javax.validation.constraints.Max;

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

	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn
	@JsonIgnore
	private Provider provider;

	@ElementCollection
	@Enumerated
	private List<Category> categories; // TODO validate at least one category

	@Column(name = "delivery_price")
	@Min(10) @Max(40)
	private Double deliveryPrice;

	@NotNull
	@Column(name = "valid_from")
	private LocalDate validFrom;

	@NotNull
	@Column(name = "valid_to")
	private LocalDate validTo;

	@NotNull
	@Column(name = "delivery_from")
	private LocalTime deliveryFrom;

	@NotNull
	@Column(name = "delivery_to")
	private LocalTime deliveryTo;

	@NotNull
	@Column(name = "delivery_time")
	private Integer deliveryTime;

	@NotNull
	@Column(name = "price")
	private Double price;

	@NotNull
	@Min(10) @Max(70)
	@Column(name = "cant_min_1")
	private Integer cantMin1;

	@NotNull
	@Min(0) @Max(1000)
	@Column(name = "cant_min_1_price")
	private Double cantMin1Price;

	@Min(40) @Max(150)
	@Column(name = "cant_min_2")
	private Integer cantMin2;

	@Min(0) @Max(1000)
	@Column(name = "cant_min_2_price")
	private Double cantMin2Price;

	@NotNull
	@Column(name = "max_sales")
	private Integer maxSales;

	public Menu() {}

	public Menu(
			String name,
			String description,
			Double deliveryPrice,
			LocalDate validFrom,
			LocalDate validTo,
			LocalTime deliveryFrom,
			LocalTime deliveryTo,
			Integer deliveryTime,
			Double price,
			Integer cantMin1,
			Double cantMin1Price,
			Integer cantMin2,
			Double cantMin2Price,
			Integer maxSales) {
		this.name = name;
		this.description = description;
		this.deliveryPrice = deliveryPrice;
		this.validFrom = validFrom;
		this.validTo = validTo;
		this.deliveryFrom = deliveryFrom;
		this.deliveryTo = deliveryTo;
		this.deliveryTime = deliveryTime;
		this.price = price;
		this.cantMin1 = cantMin1;
		this.cantMin1Price = cantMin1Price;
		this.cantMin2 = cantMin2;
		this.cantMin2Price = cantMin2Price;
		this.maxSales = maxSales;
		this.categories = new ArrayList<>();
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

	public Double getDeliveryPrice() {
		return deliveryPrice;
	}

	public void setDeliveryPrice(Double deliveryPrice) {
		this.deliveryPrice = deliveryPrice;
	}

	public LocalDate getValidFrom() {
		return validFrom;
	}

	public void setValidFrom(LocalDate validFrom) {
		this.validFrom = validFrom;
	}

	public LocalDate getValidTo() {
		return validTo;
	}

	public void setValidTo(LocalDate validTo) {
		this.validTo = validTo;
	}

	public LocalTime getDeliveryFrom() {
		return deliveryFrom;
	}

	public void setDeliveryFrom(LocalTime deliveryFrom) {
		this.deliveryFrom = deliveryFrom;
	}

	public LocalTime getDeliveryTo() {
		return deliveryTo;
	}

	public void setDeliveryTo(LocalTime deliveryTo) {
		this.deliveryTo = deliveryTo;
	}

	public Integer getDeliveryTime() {
		return deliveryTime;
	}

	public void setDeliveryTime(Integer deliveryTime) {
		this.deliveryTime = deliveryTime;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public Integer getCantMin1() {
		return cantMin1;
	}

	public void setCantMin1(Integer cantMin1) {
		this.cantMin1 = cantMin1;
	}

	public Double getCantMin1Price() {
		return cantMin1Price;
	}

	public void setCantMin1Price(Double cantMin1Price) {
		this.cantMin1Price = cantMin1Price;
	}

	public Integer getCantMin2() {
		return cantMin2;
	}

	public void setCantMin2(Integer cantMin2) {
		this.cantMin2 = cantMin2;
	}

	public Double getCantMin2Price() {
		return cantMin2Price;
	}

	public void setCantMin2Price(Double cantMin2Price) {
		this.cantMin2Price = cantMin2Price;
	}

	public Integer getMaxSales() {
		return maxSales;
	}

	public void setMaxSales(Integer maxSales) {
		this.maxSales = maxSales;
	}
}
