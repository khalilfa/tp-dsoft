package com.dsoft.tpdsoft.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class ShoppingCart {
    @Id
    @GeneratedValue
    private Integer id;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "item_id")
    private List<Item> items;

    @OneToOne(mappedBy = "shoppingCart")
    @JsonIgnore
    private Client client;

    public ShoppingCart() {
        this.items = new ArrayList<>();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public List<Item> getItems() {
        return items;
    }

    public void setItems(List<Item> items) {
        this.items = items;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public void addItem(Item item) {
        this.items.add(item);
    }

    public Double getTotal() {
        Double total = 0.0;

        for (Item item : this.items) {
            total += item.totalPrice();
        }

        return total;
    }

    public boolean hasItemWithItem(Menu menu) {
        return this.items.stream().anyMatch(i -> i.getMenu().getId().equals(menu.getId()));
    }

    public Item getItemWithMenu(Menu menu) {
        return this.items.stream().filter(i -> i.getMenu().getId().equals(menu.getId())).findAny().get();
    }

}
