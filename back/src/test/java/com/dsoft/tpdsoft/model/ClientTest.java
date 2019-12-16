package com.dsoft.tpdsoft.model;

import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import java.util.List;
import static org.junit.Assert.*;

public class ClientTest {

    @Mock
    private ShoppingCart shoppingCart;
    private List<Summary> summaries;
    private Client client;


    @Before
    public void before() {
        this.client = new Client("pepe@gmail.com", "Pepe", "Argento", "Buenos aires");
    }

    @Test
    public void emptyConstructorTest() {
        Client emptyClient = new Client();
        assertNotNull(emptyClient);
    }

    // Getters and Setters
    @Test
    public void getters() {
        assertEquals(this.client.getName(), "Pepe");
        assertEquals(this.client.getLastName(), "Argento");
        assertEquals(this.client.getEmail(), "pepe@gmail.com");
        assertEquals(this.client.getAddress(), "Buenos aires");
        assertEquals(this.client.getCredit(), Double.valueOf(0));
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
    public void setCredit() {
        this.client.setCredit(20.0);
        assertEquals(this.client.getCredit(), Double.valueOf(20));
    }

    @Test
    public void setSummaryTest() {
        client.setSummaries(summaries);
        assertEquals(summaries,client.getSummaries());
    }

    @Test
    public void addSummaryTest() {
        Summary summary = Mockito.mock(Summary.class);
        client.addSummary(summary);
        assertFalse(client.getSummaries().isEmpty());
    }

    @Test
    public void itHaveToHaveAnItemInShoppingCartWhenAdded() {
        // first is empty
        assertTrue(client.getShoppingCart().getItems().isEmpty());
        Item item = Mockito.mock(Item.class);
        client.addItemToCart(item);
        // has an item
        assertFalse(client.getShoppingCart().getItems().isEmpty());
    }

    @Test
    public void setShoppingCartTest() {
        client.setShoppingCart(shoppingCart);
        assertEquals(shoppingCart,client.getShoppingCart());
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

    @Test
    public void hasItemWithMenuTest() {
        // TODO correct method name
        ShoppingCart shoppingCart1= Mockito.mock(ShoppingCart.class);
        client.setShoppingCart(shoppingCart1);
        Mockito.when(shoppingCart1.hasItemWithMenu(Mockito.any())).thenReturn(true);

        assertTrue(client.hasItemWithItem(Mockito.any()));
    }

    @Test
    public void getItemMenuTest() {
        ShoppingCart shoppingCart1= Mockito.mock(ShoppingCart.class);
        Item item = Mockito.mock(Item.class);
        client.setShoppingCart(shoppingCart1);
        Mockito.when(shoppingCart1.getItemWithMenu(Mockito.any())).thenReturn(item);

        assertEquals(item,client.getItemWithMenu(Mockito.any()));
    }



}
