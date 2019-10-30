package com.dsoft.tpdsoft.model;

import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;


public class FileTest {
    private File file;

    @Mock
    private Provider provider;

    @Mock
    private byte[] data;

    @Mock
    private byte[] newData;

    @Mock
    private Provider newProvider;

    @Before
    public void before() {
        this.file = new File(this.data, "foto");
        this.file.setId(1);
        this.file.setProvider(this.provider);
    }

    @Test
    public void emptyConstructorTest() {
        File emptyFile = new File();
        assertNotNull(emptyFile);
    }

    @Test
    public void gettersTest() {
        assertEquals(this.file.getId(), Integer.valueOf(1));
        assertEquals(this.file.getData(), this.data);
        assertEquals(this.file.getFilename(), "foto");
        assertEquals(this.file.getProvider(), this.provider);
    }

    @Test
    public void setIdTest() {
        this.file.setId(2);
        assertEquals(this.file.getId(), Integer.valueOf(2));
    }

    @Test
    public void setDateTest() {
        this.file.setData(this.newData);
        assertEquals(this.file.getData(), this.newData);
    }

    @Test
    public void setFilenameTest() {
        this.file.setFilename("foto-nueva");
        assertEquals(this.file.getFilename(), "foto-nueva");
    }

    @Test
    public void setProviderTest() {
        this.file.setProvider(this.newProvider);
        assertEquals(this.file.getProvider(), this.newProvider);
    }
}
