package com.dsoft.tpdsoft.model;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

public class ClientTest {
    private Client client;

    @Before
    public void before() {
        this.client = new Client("Pepe", "Argento", "pepe@gmail.com", "Buenos aires", "123456789");
        this.client.setId(1);
    }

    // Getters and Setters
    @Test
    public void getters() {
        assertEquals(this.client.getId(), new Integer(1));
        assertEquals(this.client.getName(), "Pepe");
        assertEquals(this.client.getLastName(), "Argento");
        assertEquals(this.client.getEmail(), "pepe@gmail.com");
        assertEquals(this.client.getAddress(), "Buenos aires");
        assertEquals(this.client.getPassword(), "123456789");
    }

    @Test
    public void setId(){
        this.client.setId(2);
        assertEquals(this.client.getId(), new Integer(2));
    }

    @Test
    public void setName() {
        this.client.setName("Roberto");
        assertEquals(this.client.getName(), "Roberto");
    }

    @Test
    public void setLastName() {
        this.client.setLastName("Picante");
        assertEquals(this.client.getLastName(), "Picante");
    }

    @Test
    public void setEmail() {
        this.client.setEmail("roberto@gmail.com");
        assertEquals(this.client.getEmail(), "roberto@gmail.com");
    }

    @Test
    public void setAddress() {
        this.client.setAddress("Montevideo");
        assertEquals(this.client.getAddress(), "Montevideo");
    }

    @Test
    public void setPassword() {
        this.client.setPassword("987654321");
        assertEquals(this.client.getPassword(), "987654321");
    }
}
