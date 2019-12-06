package com.dsoft.tpdsoft.model;

import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;

import java.time.LocalTime;
import java.util.ArrayList;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.assertEquals;


public class AttentionScheduleTest {
    private AttentionSchedule attentionSchedule;

    @Mock
    private Provider provider;

    @Mock
    private Provider newProvider;

    @Before
    public void before() {
        this.attentionSchedule = new AttentionSchedule(
                LocalTime.of(8, 30),
                LocalTime.of(22, 30));
        this.attentionSchedule.setId(1);
        this.attentionSchedule.setProvider(this.provider);
    }

    @Test
    public void emptyConstructorTest() {
        AttentionSchedule emptyAS = new AttentionSchedule();
        assertNotNull(emptyAS);
    }

    @Test
    public void gettersTests(){
        assertEquals(this.attentionSchedule.getId(), Integer.valueOf(1));
        assertEquals(this.attentionSchedule.getFrom(), LocalTime.of(8, 30));
        assertEquals(this.attentionSchedule.getTo(), LocalTime.of(22, 30));
        assertTrue(this.attentionSchedule.getAbleDays().isEmpty());
        assertEquals(this.attentionSchedule.getProvider(), this.provider);
    }

    @Test
    public void setIdTest() {
        this.attentionSchedule.setId(2);
        assertEquals(this.attentionSchedule.getId(), Integer.valueOf(2));
    }

    @Test
    public void setFromTest() {
        this.attentionSchedule.setFrom(LocalTime.of(10, 30));
        assertEquals(this.attentionSchedule.getFrom(), LocalTime.of(10, 30));
    }

    @Test
    public void setToTest() {
        this.attentionSchedule.setTo(LocalTime.of(21, 30));
        assertEquals(this.attentionSchedule.getTo(), LocalTime.of(21, 30));
    }

    @Test
    public void setAbleDaysTest() {
        ArrayList<Day> ableDays = new ArrayList<Day>();
        ableDays.add(Day.Monday);
        this.attentionSchedule.setAbleDays(ableDays);
        assertEquals(this.attentionSchedule.getAbleDays(), ableDays);
    }

    @Test
    public void setProviderTest() {
        this.attentionSchedule.setProvider(this.newProvider);
        assertEquals(this.attentionSchedule.getProvider(), this.newProvider);
    }
}
