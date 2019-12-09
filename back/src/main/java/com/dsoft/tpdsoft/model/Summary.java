package com.dsoft.tpdsoft.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "summaries")
public class Summary {
    @Id
    @GeneratedValue
    private Integer id;

    @Temporal(TemporalType.DATE)
    @Column(name = "create_at")
    private Date createAt;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    private Client client;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    private Provider provider;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "summary_id")
    private List<Item> items;

    public Summary() {
        this.items = new ArrayList<>();
        this.createAt = new Date();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getCreateAt() {
        return createAt;
    }

    public void setCreateAt(Date createAt) {
        this.createAt = createAt;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public Provider getProvider() {
        return provider;
    }

    public void setProvider(Provider provider) {
        this.provider = provider;
    }

    public List<Item> getItems() {
        return items;
    }

    public void setItems(List<Item> items) {
        this.items = items;
    }

    public void addItem(Item item) {
        this.items.add(item);
    }

    public Double getTotal() {
        Double total = 0.0;

        for (Item item : this.items) {
            total += item.totalPrice();
            total += item.getMenu().getDeliveryPrice() * item.getQuantity();
        }

        return total;
    }
}
