package com.dsoft.tpdsoft.model;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

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
    private Double credit = 0.0;

    public Client(){}

    public Client(String name, String lastName, String email, String address, String password) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.address = address;
        this.password = password;
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

}
