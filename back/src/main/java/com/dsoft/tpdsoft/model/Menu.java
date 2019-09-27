package com.dsoft.tpdsoft.model;

import java.util.ArrayList;


import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Size;


@Entity
public class Menu {
	
	@Id
	@GeneratedValue
	private Integer id;
	
	@Size(min=4, max=30)
	private String name;
	
	@Size(min=20, max=40)
	private String description;
	
	private ArrayList<Category> categories; // TODO validate at least one category

	@OneToOne(cascade = CascadeType.ALL)
	private DeliveryInfo deliveryInfo;
	
	private float price;
	
	@Max(20)
	private Integer maxSalesPerDay;
	
	private String effectiveDate; // obviously is a todo
	
	
}
