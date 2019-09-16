package com.dsoft.tpdsoft.model;

import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Client {
    @Id @GeneratedValue
    private Integer id;

    @NotEmpty(message = "Name can´t be blank")
    private String name;

    @NotEmpty(message = "LastName can´t be blank")
    private String lastName;

    @NotEmpty(message = "Email can´t be blank")
    @Email(message = "Invalid email format")
    private String email;

    @NotEmpty(message = "Address can´t be blank")
    private String address;

    public Client(){

    }

    public Client(String name, String lastName, String email, String address) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.address = address;
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
}
