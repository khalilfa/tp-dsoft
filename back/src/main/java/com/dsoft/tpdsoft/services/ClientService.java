package com.dsoft.tpdsoft.services;

import com.dsoft.tpdsoft.exceptions.NotFoundException;
import com.dsoft.tpdsoft.exceptions.StorageException;
import com.dsoft.tpdsoft.model.Client;
import com.dsoft.tpdsoft.model.Item;
import com.dsoft.tpdsoft.model.Menu;
import com.dsoft.tpdsoft.model.ShoppingCart;
import com.dsoft.tpdsoft.repositories.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClientService {
    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private MenuService menuService;

    @Autowired
    private ItemService itemService;

    public Client saveClient(Client client) {
        try {
            Client savedClient = this.clientRepository.save(client);
            return savedClient;
        } catch (Exception e) {
            throw new StorageException("Could not save the client: " + client.getName(), e);
        }
    }

    public Client getClient(Integer id) {
        return this.clientRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Could not get a client with id: " + id));
    }

    public Client updateClient(Integer id, Client client) {
        try {
            client.setId(id);
            Client savedClient = this.clientRepository.save(client);
            return savedClient;
        } catch (Exception e) {
            throw new StorageException("Could not save the client: " + client.getName(), e);
        }
    }

    public Client addCredit(Integer id, Double credit) {
        Client client = this.getClient(id);
        client.addCredit(credit);
        return this.saveClient(client);
    }

    public Client addItemToCart(Integer clientId, Integer menuId, Integer menuQ) {
        Client client = this.getClient(clientId);
        Menu menu = this.menuService.getMenu(menuId);

        if (client.hasItemWithItem(menu)) {
            Item item = client.getItemWithMenu(menu);
            item.setQuantity(item.getQuantity() + menuQ);
        } else {
            Item newItem = new Item(menu, menuQ);
            client.addItemToCart(newItem);
        }

        return this.saveClient(client);
    }

    public ShoppingCart getCart(Integer id) {
        Client client = this.getClient(id);
        return client.getShoppingCart();
    }

    public ShoppingCart deleteItem(Integer clientId, Integer itemId) {
        this.itemService.deleteItem(itemId);
        Client client = this.getClient(clientId);
        return client.getShoppingCart();
    }

    public ShoppingCart updateItemQuantity(Integer clientId, Integer itemId, Integer itemQ) {
        this.itemService.updateItemQuantity(itemId, itemQ);
        Client client = this.getClient(clientId);
        return client.getShoppingCart();
    }
}
