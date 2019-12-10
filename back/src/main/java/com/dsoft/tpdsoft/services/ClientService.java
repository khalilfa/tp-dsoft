package com.dsoft.tpdsoft.services;

import com.dsoft.tpdsoft.exceptions.NotFoundException;
import com.dsoft.tpdsoft.exceptions.StorageException;
import com.dsoft.tpdsoft.model.*;
import com.dsoft.tpdsoft.repositories.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClientService {
    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private MenuService menuService;

    @Autowired
    private ItemService itemService;

    @Autowired
    private SummaryService summaryService;

    public Client saveClient(Client client) {
        try {
            if (this.clientRepository.existsById(client.getUsername())){
               return null;
            } else {
                Client savedClient = this.clientRepository.save(client);
                return savedClient;
            }
        } catch (Exception e) {
            throw new StorageException("Could not save the client: " + client.getName(), e);
        }
    }

    public Client getClient(String id) {
        return this.clientRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Could not get a client with id: " + id));
    }

    public Client updateClient(String username, Client client) {
        try {
            client.setUsername(username);
            Client savedClient = this.clientRepository.save(client);
            return savedClient;
        } catch (Exception e) {
            throw new StorageException("Could not save the client: " + client.getName(), e);
        }
    }

    public Client addCredit(String username, Double credit) {
        Client client = this.getClient(username);
        client.addCredit(credit);
        return this.updateClient(username, client);
    }

    public Client addItemToCart(String clientUsername, Integer menuId, Integer menuQ) {
        Client client = this.getClient(clientUsername);
        Menu menu = this.menuService.getMenu(menuId);

        if (client.hasItemWithItem(menu)) {
            Item item = client.getItemWithMenu(menu);
            item.setQuantity(item.getQuantity() + menuQ);
        } else {
            Item newItem = new Item(menu, menuQ);
            client.addItemToCart(newItem);
        }

        return this.updateClient(clientUsername, client);
    }

    public ShoppingCart getCart(String username) {
        Client client = this.getClient(username);
        return client.getShoppingCart();
    }

    public ShoppingCart deleteItem(String username, Integer itemId) {
        this.itemService.deleteItem(itemId);
        Client client = this.getClient(username);
        return client.getShoppingCart();
    }

    public ShoppingCart updateItemQuantity(String username, Integer itemId, Integer itemQ) {
        this.itemService.updateItemQuantity(itemId, itemQ);
        Client client = this.getClient(username);
        return client.getShoppingCart();
    }

    public List<Summary> getSummaries(String username) {
        Client client = this.getClient(username);
        return client.getSummaries();
    }

    public Optional<Summary> buyItems(String username) {
        Client client = this.getClient(username);
        Optional<Summary> optionalSummary = Optional.empty();
        if(client.getCredit() >= client.getShoppingCart().getTotal()) {
            client.setCredit(client.getCredit() - client.getShoppingCart().getTotal());
            Summary summary = this.summaryService.generateAndSaveSummaries(client);
            optionalSummary = Optional.of(summary);
        }

        return optionalSummary;
    }
}
