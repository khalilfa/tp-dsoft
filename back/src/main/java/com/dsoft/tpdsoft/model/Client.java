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
    @NotBlank(message = "Email can´t be blank")
    @Email(message = "Invalid email format")
    private String email;

    @NotBlank(message = "Name can´t be blank")
    @Column(name = "name")
    private String name;

    @NotBlank(message = "LastName can´t be blank")
    @Column(name = "last_name")
    private String lastName;

    @Column(name = "address")
    private String address;

    @Column(name = "credit")
    private Double credit;

    @NotNull
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn
    private ShoppingCart shoppingCart;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn
    private Provider provider;

    @OneToMany(mappedBy = "client", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Summary> summaries;

    public Client(){
        this.credit = 0.0;
        this.shoppingCart = new ShoppingCart();
        this.summaries = new ArrayList<>();
    }

    public Client(String email, String name, String lastName, String address) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.address = address;
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

    public Provider getProvider() {
        return provider;
    }

    public void setProvider(Provider provider) {
        this.provider = provider;
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
        return this.shoppingCart.hasItemWithMenu(menu);
    }

    public Item getItemWithMenu(Menu menu) {
        return this.shoppingCart.getItemWithMenu(menu);
    }

    public void resetShoppingCart() {
        this.shoppingCart.resetItems();
    }

    public Boolean hasProvider() {
        return this.provider != null;
    }

}
