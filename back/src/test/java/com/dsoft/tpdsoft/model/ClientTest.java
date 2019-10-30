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

    @Test
    public void emptyConstructorTest() {
        Client emptyClient = new Client();
        assertNotNull(emptyClient);
    }

    // Getters and Setters
    @Test
    public void getters() {
        assertEquals(this.client.getId(), Integer.valueOf(1));
        assertEquals(this.client.getName(), "Pepe");
        assertEquals(this.client.getLastName(), "Argento");
        assertEquals(this.client.getEmail(), "pepe@gmail.com");
        assertEquals(this.client.getAddress(), "Buenos aires");
        assertEquals(this.client.getPassword(), "123456789");
        assertEquals(this.client.getCredit(), Double.valueOf(0));
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

    @Test
    public void setCredit() {
        this.client.setCredit(20.0);
        assertEquals(this.client.getCredit(), Double.valueOf(20));
    }

    @Test
    public void add10CreditsToTheClient(){
        this.client.addCredit(10.0);
        assertEquals(this.client.getCredit(), Double.valueOf(10.0));
    }

    @Test
    public void substract10CreditsToTheClientWith20Credits() {
        this.client.setCredit(20.0);
        this.client.substractCredit(10.0);
        assertEquals(this.client.getCredit(), Double.valueOf(10));
    }
}
