package com.dsoft.tpdsoft.model;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;
import org.mockito.Mockito;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class SummaryTest{

    @Mock
    private Provider provider;
    @Mock
    private Client client;
    private Summary summary;
    private Date date;
    private List<Item> items;

    @Before
    public void setUp(){
        this.date = new Date();
        this.items = new ArrayList<Item>();
        this.summary = new Summary();
        this.summary.setId(5);
        this.summary.setCreateAt(date);
        this.summary.setItems(items);
        this.summary.setProvider(provider);
        this.summary.setClient(client);
    }

    @Test
    public void testGetters(){
        Assert.assertEquals(5,summary.getId(),0);
        Assert.assertEquals(client,summary.getClient());
        Assert.assertEquals(provider,summary.getProvider());
        Assert.assertEquals(date,summary.getCreateAt());
        Assert.assertEquals(items,summary.getItems());
    }

    @Test
    public void testSetProvider(){
        summary.setProvider(provider);
        Assert.assertEquals(provider,summary.getProvider());
    }

    @Test
    public void testSetClient(){
        summary.setClient(client);
        Assert.assertEquals(client,summary.getClient());
    }

    @Test
    public void testSetItems(){
        summary.setItems(items);
        Assert.assertEquals(items,summary.getItems());
    }

    @Test
    public void testSetCreateAt(){
        summary.setCreateAt(date);
        Assert.assertEquals(date, summary.getCreateAt());
    }

    @Test
    public void addItemTest(){
        Item item = Mockito.mock(Item.class);
        summary.addItem(item);
        Assert.assertFalse(summary.getItems().isEmpty());
    }

    @Test
    public void getTotalTest(){
        Menu menu1 = Mockito.mock(Menu.class);
        Mockito.when(menu1.getDeliveryPrice()).thenReturn(50.0);
        Item item1 = new Item(menu1,3);
        Mockito.when(item1.totalPrice()).thenReturn(100.0);

        summary.addItem(item1);

        Double totalExpected = 450.0;

        Assert.assertEquals(totalExpected,summary.getTotal());
    }

}
