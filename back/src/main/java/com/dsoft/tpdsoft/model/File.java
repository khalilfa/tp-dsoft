package com.dsoft.tpdsoft.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.Lob;
import javax.persistence.OneToOne;

@Entity
public class File {
    @Id
    @GeneratedValue
    private Integer id;

    private String filename;

    @Lob
    private byte[] data;

    @OneToOne(mappedBy = "logo")
    private Provider provider;

    public File() {}

    public File(byte[] data, String filename) {
        this.data = data;
        this.filename = filename;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFilename() {
        return filename;
    }

    public void setFilename(String filename) {
        this.filename = filename;
    }

    public byte[] getData() {
        return data;
    }

    public void setData(byte[] data) {
        this.data = data;
    }

    public Provider getProvider() {
        return provider;
    }

    public void setProvider(Provider provider) {
        this.provider = provider;
    }
}
