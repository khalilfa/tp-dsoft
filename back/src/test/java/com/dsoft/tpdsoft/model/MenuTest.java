package com.dsoft.tpdsoft.model;

import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;

import static org.junit.Assert.*;

public class MenuTest {
    private Menu menu;

    @Mock
    private Provider provider;

    @Mock
    private Provider newProvider;

    @Before
    public void before() {
        this.menu = new Menu(
                "Papas",
                "las mejores papas de zona sur",
                20.50,
                LocalDate.of(2018, 5, 13),
                LocalDate.of(2019, 5, 13),
                LocalTime.of(18, 30),
                LocalTime.of(23, 30),
                30,
                300.00,
                5,
                270.00,
                10,
                250.00,
                100
                );
        this.menu.setId(1);
        this.menu.setProvider(provider);
    }

    @Test
    public void emptyConstructorTest() {
        Menu emptyMenu = new Menu();
        assertNotNull(emptyMenu);
    }

    @Test
    public void gettersTest() {
        assertEquals(this.menu.getId(), Integer.valueOf(1));
        assertEquals(this.menu.getName(), "Papas");
        assertEquals(this.menu.getDescription(), "las mejores papas de zona sur");
        assertEquals(this.menu.getDeliveryPrice(), Double.valueOf(20.50));
        assertEquals(this.menu.getValidFrom(), LocalDate.of(2018, 5, 13));
        assertEquals(this.menu.getValidTo(), LocalDate.of(2019, 5, 13));
        assertEquals(this.menu.getDeliveryFrom(), LocalTime.of(18, 30));
        assertEquals(this.menu.getDeliveryTo(), LocalTime.of(23, 30));
        assertEquals(this.menu.getDeliveryTime(), Integer.valueOf(30));
        assertEquals(this.menu.getPrice(), Double.valueOf(300.00));
        assertEquals(this.menu.getCantMin1(), Integer.valueOf(5));
        assertEquals(this.menu.getCantMin1Price(), Double.valueOf(270.00));
        assertEquals(this.menu.getCantMin2(), Integer.valueOf(10));
        assertEquals(this.menu.getCantMin2Price(), Double.valueOf(250.00));
        assertEquals(this.menu.getMaxSales(), Integer.valueOf(100));
        assertTrue(this.menu.getCategories().isEmpty());
        assertEquals(this.menu.getProvider(), this.provider);
    }

    @Test
    public void setIdTest(){
        this.menu.setId(2);
        assertEquals(this.menu.getId(), Integer.valueOf(2));
    }

    @Test
    public void setNameTest() {
        this.menu.setName("Milanesa");
        assertEquals(this.menu.getName(), "Milanesa");
    }

    @Test
    public void setDescriptionTest() {
        this.menu.setDescription("Las mejores milangas de zona sur");
        assertEquals(this.menu.getDescription(), "Las mejores milangas de zona sur");
    }

    @Test
    public void setDeliveryPriceTest() {
        this.menu.setDeliveryPrice(40.00);
        assertEquals(this.menu.getDeliveryPrice(), Double.valueOf(40.00));
    }

    @Test
    public void setValidFromTest() {
        this.menu.setValidFrom(LocalDate.of(2018, 5, 14));
        assertEquals(this.menu.getValidFrom(), LocalDate.of(2018, 5, 14));
    }

    @Test
    public void setValidToTest() {
        this.menu.setValidTo(LocalDate.of(2019, 5, 14));
        assertEquals(this.menu.getValidTo(), LocalDate.of(2019, 5, 14));
    }

    @Test
    public void setDeliveryFrom() {
        this.menu.setDeliveryFrom(LocalTime.of(18, 40));
        assertEquals(this.menu.getDeliveryFrom(), LocalTime.of(18, 40));
    }

    @Test
    public void setDeliveryTo() {
        this.menu.setDeliveryTo(LocalTime.of(20, 40));
        assertEquals(this.menu.getDeliveryTo(), LocalTime.of(20, 40));
    }

    @Test
    public void setDeliveryTime() {
        this.menu.setDeliveryTime(40);
        assertEquals(this.menu.getDeliveryTime(), Integer.valueOf(40));
    }

    @Test
    public void setPriceTest() {
        this.menu.setPrice(350.00);
        assertEquals(this.menu.getPrice(), Double.valueOf(350.00));
    }

    @Test
    public void setCantMin1Test() {
        this.menu.setCantMin1(6);
        assertEquals(this.menu.getCantMin1(), Integer.valueOf(6));
    }

    @Test
    public void setCantMin1PriceTest() {
        this.menu.setCantMin1Price(260.00);
        assertEquals(this.menu.getCantMin1Price(), Double.valueOf(260.00));
    }

    @Test
    public void setCantMin2Test() {
        this.menu.setCantMin2(11);
        assertEquals(this.menu.getCantMin2(), Integer.valueOf(11));
    }

    @Test
    public void setCantMin2PriceTest() {
        this.menu.setCantMin2Price(240.00);
        assertEquals(this.menu.getCantMin2Price(), Double.valueOf(240.00));
    }

    @Test
    public void setMaxSales() {
        this.menu.setMaxSales(110);
        assertEquals(this.menu.getMaxSales(), Integer.valueOf(110));
    }

    @Test
    public void setCategoriesTest() {
        ArrayList<Category> categories = new ArrayList<>();
        categories.add(Category.PIZZA);
        this.menu.setCategories(categories);
        assertEquals(this.menu.getCategories(), categories);
    }

    @Test
    public void setProviderTest() {
        this.menu.setProvider(this.newProvider);
        assertEquals(this.menu.getProvider(), this.newProvider);
    }

}
