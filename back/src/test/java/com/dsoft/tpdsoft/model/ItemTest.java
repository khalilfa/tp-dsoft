package com.dsoft.tpdsoft.model;

import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;
import static org.junit.Assert.assertEquals;

public class ItemTest {

    @Mock
    private Menu menu;

    private Item item;

    @Before
    public void setUp() {
        this.item = new Item();
        this.item.setId(1);
        this.item.setQuantity(1);
        this.item.setMenu(menu);
    }

    @Test
    public void testGetters() {
        assertEquals(1,item.getId(),0);
        assertEquals(1,item.getQuantity(),0);
        assertEquals(menu,item.getMenu());
    }

    @Test public void setIdTest() {
        Integer id = 5;
        item.setId(id);
        assertEquals(id,item.getId());
    }

    @Test public void setQuantityTest() {
        Integer quantity = 10;
        item.setQuantity(quantity);
        assertEquals(quantity,item.getQuantity());
    }

    @Test public void setTestMenu() {
        item.setMenu(menu);
        assertEquals(menu,item.getMenu());
    }
}
