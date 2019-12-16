package com.dsoft.tpdsoft.model;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;
import org.mockito.Mockito;

import java.util.ArrayList;
import java.util.List;

public class ShoppingCartTest {


    @Mock
    private Client client;
    private ShoppingCart shoppingCart;
    private List items;

    @Before
    public void setUp() {
        this.items = new ArrayList<Item>();
        this.shoppingCart = new ShoppingCart();
        this.shoppingCart.setId(1);
        this.shoppingCart.setClient(this.client);
        this.shoppingCart.setItems(items);
    }

    @Test
    public void testGetters() {
        Assert.assertEquals(1,this.shoppingCart.getId(),0);
        Assert.assertEquals(client,this.shoppingCart.getClient());
        Assert.assertEquals(items,this.shoppingCart.getItems());

    };

    @Test
    public void setIdTest() {
        shoppingCart.setId(2);
        Assert.assertEquals(2,shoppingCart.getId(),0);
    }

    @Test
    public void setClientTest() {
        Client aClient= Mockito.mock(Client.class);
        shoppingCart.setClient(aClient);
        Assert.assertEquals(aClient,shoppingCart.getClient());
    }

    @Test
    public void setItemsTest() {
        List items = new ArrayList<Item>();
        shoppingCart.setItems(items);
        Assert.assertEquals(items,shoppingCart.getItems());
    }

    @Test
    public void addItemTest() {
        Item item = Mockito.mock(Item.class);
        shoppingCart.addItem(item);
        Assert.assertFalse(shoppingCart.getItems().isEmpty());
    }

    @Test
    public void getTotalTest() {
        Menu menu1 = Mockito.mock(Menu.class);
        Mockito.when(menu1.getDeliveryPrice()).thenReturn(50.0);
        Item item1 = new Item(menu1,3);
        Mockito.when(item1.totalPrice()).thenReturn(100.0);

        shoppingCart.addItem(item1);

        Double totalExpected = 450.0;

        Assert.assertEquals(totalExpected,shoppingCart.getTotal());
    }

    @Test
    public void aShoppingCartWithWithEmptyItemsHasNoAnItemWithMenu() {
        Menu menu = Mockito.mock(Menu.class);
        Mockito.when(menu.getId()).thenReturn(1);
        Assert.assertFalse(shoppingCart.hasItemWithMenu(menu));
    }

    @Test
    public void aShoppingCartWithWithAnItemWithAMenuItWillBeFind() {
        Menu menu = Mockito.mock(Menu.class);
        Mockito.when(menu.getId()).thenReturn(1);

        Item item = Mockito.mock(Item.class);
        Mockito.when(item.getMenu()).thenReturn(menu);
        shoppingCart.addItem(item);

        Assert.assertTrue(shoppingCart.hasItemWithMenu(menu));

    }

    @Test
    public void getItemWithMenuTest() {
        Menu menu = Mockito.mock(Menu.class);
        Mockito.when(menu.getId()).thenReturn(1);

        Item item = Mockito.mock(Item.class);
        Mockito.when(item.getMenu()).thenReturn(menu);
        shoppingCart.addItem(item);

        Assert.assertEquals(item,shoppingCart.getItemWithMenu(menu));
    }

    @Test
    public void resetItemsTest() {
        Item item = Mockito.mock(Item.class);
        shoppingCart.addItem(item);
        shoppingCart.resetItems();

        Assert.assertTrue(shoppingCart.getItems().isEmpty());
    }
}
