package com.dsoft.tpdsoft.services;

import com.dsoft.tpdsoft.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;

@Service
public class MainService {
    @Autowired
    ProviderService providerService;

    @Autowired
    MenuService menuService;

    @Autowired
    ClientService clientService;

    public void loadData() {
        // GENERATE A CLIENT
        Client client = new Client("khalilfa", "Juan", "Perez", "facundokhalil@hotmail.com",
                "Las heras 324", "nombrecomun123");

        client.addCredit(500.0);

        Client clientProvider1 = new Client("provider1", "Juan", "Perez", "facundokhalil@hotmail.com",
                "Las heras 324", "nombrecomun123");

        Client clientProvider2 = new Client("provider2", "Juan", "Perez", "facundokhalil@hotmail.com",
                "Las heras 324", "nombrecomun123");

        Client clientProvider3 = new Client("provider3", "Juan", "Perez", "facundokhalil@hotmail.com",
                "Las heras 324", "nombrecomun123");

        // GENERATE PROVIDERS
        AttentionSchedule attentionSchedule = new AttentionSchedule(LocalTime.of(9, 30), LocalTime.of(22, 30));
        ArrayList<Day> ableDays = new ArrayList<>();
        ableDays.add(Day.Monday);
        ableDays.add(Day.Tuesday);
        ableDays.add(Day.Wednesday);
        attentionSchedule.setAbleDays(ableDays);

        File logo = new File();

        Provider provider1 = new Provider(attentionSchedule, "La vieja", logo, "Bernal",
                "-34.710402+-58.280877", "Comida casera hecha por la vieja del sur",
                "wwww.la-vieja.com", 800, "0541165853218",
                "facundokhalil@hotmail.com");

        Provider provider2 = new Provider(attentionSchedule, "Pizzeria el molde", logo, "Bernal",
                "-34.711134+-58.281810", "Una pizzeria comun como todas.",
                "wwww.el-molde.com", 800, "0541165853218",
                "facundokhalil@hotmail.com");

        Provider provider3 = new Provider(attentionSchedule, "Antares", logo, "Bernal",
                "-34.706475+-58.279849", "La vieja confiable de Buenos Aires",
                "wwww.antares.com", 800, "0541165853218",
                "facundokhalil@hotmail.com");

        clientProvider1.setProvider(provider1);
        clientProvider2.setProvider(provider2);
        clientProvider3.setProvider(provider3);

        /*Persist clients*/
        this.clientService.saveClient(clientProvider1);
        this.clientService.saveClient(clientProvider2);
        this.clientService.saveClient(clientProvider3);

        Provider savedProvider1 = providerService.saveProvider(provider1, clientProvider1.getUsername());
        Provider savedProvider2 = providerService.saveProvider(provider2, clientProvider2.getUsername());
        Provider savedProvider3 = providerService.saveProvider(provider3, clientProvider3.getUsername());

        // GENERATE MENUS
        ArrayList<Category> pizzaCategory = new ArrayList<>();
        pizzaCategory.add(Category.PIZZA);

        ArrayList<Category> empanadasCategory = new ArrayList<>();
        empanadasCategory.add(Category.EMPANADAS);

        ArrayList<Category> sushiVeganCategory = new ArrayList<>();
        sushiVeganCategory.add(Category.SUSHIVEGAN);

        ArrayList<Category> hamburguerCategory = new ArrayList<>();
        hamburguerCategory.add(Category.HAMBURGUER);

        ArrayList<Category> beerCategory = new ArrayList<>();
        beerCategory.add(Category.BEER);

        Menu menu1 = new Menu("Pizza - Muzzarella", "Pizza de muzzarella a la parrilla",
                30.0, LocalDate.of(2019, 10, 1), LocalDate.of(2019, 12,
                30), LocalTime.of(9, 30), LocalTime.of(22, 30), 30,
                300.0, 10, 250.0, 40, 200.0, 300);
        menu1.setCategories(pizzaCategory);
        menu1.setProvider(savedProvider2);
        savedProvider2.addMenu(menu1);

        Menu menu2 = new Menu("Pizza - Napolitana", "Pizza napolitana a la parrilla", 30.0,
                LocalDate.of(2019, 10, 1), LocalDate.of(2019, 12, 30),
                LocalTime.of(9, 30), LocalTime.of(22, 30), 30, 300.0,
                10, 250.0, 40, 200.0, 300);
        menu2.setCategories(pizzaCategory);
        menu2.setProvider(savedProvider2);
        savedProvider2.addMenu(menu2);

        Menu menu3 = new Menu("Pizza - rellena", "Pizza rellena a la parrilla",
                30.0, LocalDate.of(2019, 10, 1), LocalDate.of(2019, 12,
                30), LocalTime.of(9, 30), LocalTime.of(22, 30), 30,
                300.0, 10, 250.0, 40, 200.0, 300);
        menu3.setCategories(pizzaCategory);
        menu3.setProvider(savedProvider2);
        savedProvider2.addMenu(menu3);

        Menu menu4 = new Menu("Pizza - Palmito", "Pizza con palmitos a la parrilla", 30.0,
                LocalDate.of(2019, 10, 1), LocalDate.of(2019, 12, 30),
                LocalTime.of(9, 30), LocalTime.of(22, 30), 30, 300.0,
                10, 250.0, 40, 200.0, 300);
        menu4.setCategories(pizzaCategory);
        menu4.setProvider(savedProvider2);
        savedProvider2.addMenu(menu4);

        Menu menu5 = new Menu("Empanadas - Carne", "12 empanadas de carne al horno", 30.0,
                LocalDate.of(2019, 10, 1), LocalDate.of(2019, 12, 30),
                LocalTime.of(9, 30), LocalTime.of(22, 30), 30, 300.0,
                10, 250.0, 40, 200.0, 300);
        menu5.setCategories(empanadasCategory);
        menu5.setProvider(savedProvider1);
        savedProvider1.addMenu(menu5);

        Menu menu6 = new Menu("Empanadas - Carne picante", "12 empanadas de carne picante al horno",
                30.0, LocalDate.of(2019, 10, 1), LocalDate.of(2019, 12,
                30), LocalTime.of(9, 30), LocalTime.of(22, 30), 30,
                300.0, 10, 250.0, 40, 200.0, 300);
        menu6.setCategories(empanadasCategory);
        menu6.setProvider(savedProvider1);
        savedProvider1.addMenu(menu6);

        Menu menu7 = new Menu("Empanadas - Pollo", "12 empanadas de pollo al horno", 30.0,
                LocalDate.of(2019, 10, 1), LocalDate.of(2019, 12, 30),
                LocalTime.of(9, 30), LocalTime.of(22, 30), 30, 300.0,
                10, 250.0, 40, 200.0, 300);
        menu7.setCategories(empanadasCategory);
        menu7.setProvider(savedProvider1);
        savedProvider1.addMenu(menu7);

        Menu menu8 = new Menu("Empanadas - Atun", "12 empanadas de atun al horno", 30.0,
                LocalDate.of(2019, 10, 1), LocalDate.of(2019, 12, 30),
                LocalTime.of(9, 30), LocalTime.of(22, 30), 30, 300.0,
                10, 250.0, 40, 200.0, 300);
        menu8.setCategories(empanadasCategory);
        menu8.setProvider(savedProvider1);
        savedProvider1.addMenu(menu8);

        Menu menu9 = new Menu("Hamburguesa - carne", "Hamburguesa de carne con papas",
                30.0, LocalDate.of(2019, 10, 1), LocalDate.of(2019, 12,
                30), LocalTime.of(9, 30), LocalTime.of(22, 30), 30,
                300.0, 10, 250.0, 40, 200.0, 300);
        menu9.setCategories(hamburguerCategory);
        menu9.setProvider(savedProvider3);
        savedProvider3.addMenu(menu9);

        Menu menu10 = new Menu("Hamburguesa - pollo", "Hamburguesa de pollo con papas",
                30.0, LocalDate.of(2019, 10, 1), LocalDate.of(2019, 12,
                30), LocalTime.of(9, 30), LocalTime.of(22, 30), 30,
                300.0, 10, 250.0, 40, 200.0, 300);
        menu10.setCategories(hamburguerCategory);
        menu10.setProvider(savedProvider3);
        savedProvider3.addMenu(menu10);

        Menu menu11 = new Menu("Sushi - Vegan", "12 piezas del mejor sushi vegano", 30.0,
                LocalDate.of(2019, 10, 1), LocalDate.of(2019, 12, 30),
                LocalTime.of(9, 30), LocalTime.of(22, 30), 30, 300.0,
                10, 250.0, 40, 200.0, 300);
        menu11.setCategories(sushiVeganCategory);
        menu11.setProvider(savedProvider3);
        savedProvider3.addMenu(menu11);

        Menu menu12 = new Menu("Honney", "Cerveza artesanal con sabor a miel", 30.0,
                LocalDate.of(2019, 10, 1), LocalDate.of(2019, 12, 30),
                LocalTime.of(9, 30), LocalTime.of(22, 30), 30, 300.0,
                10, 250.0, 40, 200.0, 300);
        menu12.setCategories(beerCategory);
        menu12.setProvider(savedProvider3);
        savedProvider3.addMenu(menu12);

        Menu menu13 = new Menu("Barley wine", "La cerveza artesanal mas picante", 30.0,
                LocalDate.of(2019, 10, 1), LocalDate.of(2019, 12, 30),
                LocalTime.of(9, 30), LocalTime.of(22, 30), 30, 300.0,
                10, 250.0, 40, 200.0, 300);
        menu13.setCategories(beerCategory);
        menu13.setProvider(savedProvider3);
        savedProvider3.addMenu(menu13);

        // Persistence
        clientService.saveClient(client);
        clientService.saveClient(clientProvider1);
        clientService.saveClient(clientProvider2);
        clientService.saveClient(clientProvider3);

        menuService.saveMenu(menu1);
        menuService.saveMenu(menu2);
        menuService.saveMenu(menu3);
        menuService.saveMenu(menu4);
        menuService.saveMenu(menu5);
        menuService.saveMenu(menu6);
        menuService.saveMenu(menu7);
        menuService.saveMenu(menu8);
        menuService.saveMenu(menu9);
        menuService.saveMenu(menu10);
        menuService.saveMenu(menu11);
        menuService.saveMenu(menu12);
        menuService.saveMenu(menu13);

        providerService.updateProvider(savedProvider1, savedProvider1.getId());
        providerService.updateProvider(savedProvider2, savedProvider2.getId());
        providerService.updateProvider(savedProvider3, savedProvider3.getId());
    }
}