package com.dsoft.tpdsoft.model;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "clients")
public class Client {
    @Id
    @GeneratedValue
    @Column(name = "id")
    private Integer id;

    @NotBlank(message = "Name can´t be blank")
    @Column(name = "name")
    private String name;

    @NotBlank(message = "LastName can´t be blank")
    @Column(name = "last_name")
    private String lastName;

    @NotBlank(message = "Email can´t be blank")
    @Email(message = "Invalid email format")
    @Column(name = "email")
    private String email;

    @NotBlank(message = "Address can´t be blank")
    @Column(name = "address")
    private String address;

    @NotBlank(message = "Password can´t be blank")
    @Column(name = "password")
    private String password;

    @Column(name = "credit")
    private Double credit;

    @NotNull
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn
    private ShoppingCart shoppingCart;

    @OneToMany(mappedBy = "client", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Summary> summaries;

    public Client(){
        this.credit = 0.0;
        this.shoppingCart = new ShoppingCart();
        this.summaries = new ArrayList<>();
    }

    public Client(String name, String lastName, String email, String address, String password) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.address = address;
        this.password = password;
        this.shoppingCart = new ShoppingCart();
        this.credit = 0.0;
        this.summaries = new ArrayList<>();
    }

    public void addCredit(Double credit) {
        this.credit += credit;
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

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Double getCredit() {
        return credit;
    }

    public void setCredit(Double credit) {
        this.credit = credit;
    }

    public List<Summary> getSummaries() {
        return summaries;
    }

    public void setSummaries(List<Summary> summaries) {
        this.summaries = summaries;
    }

    public void addSummary(Summary summary) {
        this.summaries.add(summary);
    }

    public ShoppingCart getShoppingCart() {
        return shoppingCart;
    }

    public void setShoppingCart(ShoppingCart shoppingCart) {
        this.shoppingCart = shoppingCart;
    }

    public void addItemToCart(Item item) {
        this.shoppingCart.addItem(item);
    }

    public boolean hasItemWithItem(Menu menu) {
        return this.shoppingCart.hasItemWithItem(menu);
    }

    public Item getItemWithMenu(Menu menu) {
        return this.shoppingCart.getItemWithMenu(menu);
    }

    public void resetShoppingCart() {
        this.shoppingCart.resetItems();
    }

}
