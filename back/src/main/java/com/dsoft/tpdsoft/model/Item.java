package com.dsoft.tpdsoft.model;

import javax.persistence.*;

@Entity
@Table(name = "items")
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne()
    @JoinColumn(name = "menu_id")
    private Menu menu;

    private Integer quantity;

    public Item() {
    }

    public Item(Menu menu, Integer quantity) {
        this.menu = menu;
        this.quantity = quantity;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Menu getMenu() {
        return menu;
    }

    public void setMenu(Menu menu) {
        this.menu = menu;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Double totalPrice() {
        Double totalPrice = this.menu.getPrice() * this.quantity;
        if(this.quantity >= this.menu.getCantMin1()) {
            totalPrice = this.menu.getCantMin1Price() * this.quantity;
        }
        if (this.menu.getCantMin2() != null && this.quantity >= this.menu.getCantMin2()) {
            totalPrice = this.menu.getCantMin2Price() * this.quantity;
        }
        return totalPrice;
    }
}
