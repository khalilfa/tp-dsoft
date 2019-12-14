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

    public Boolean existClient(String email) {
        try {
            return this.clientRepository.existsById(email);
        } catch (Exception e) {
            throw new NotFoundException("Query failed: ", e);
        }
    }

    public Client saveClient(Client client) {
        try {
            if (this.clientRepository.existsById(client.getEmail())){
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

    public Client updateClient(String email, Client client) {
        try {
            client.setEmail(email);
            Client savedClient = this.clientRepository.save(client);
            return savedClient;
        } catch (Exception e) {
            throw new StorageException("Could not save the client: " + client.getName(), e);
        }
    }

    public Client addCredit(String email, Double credit) {
        Client client = this.getClient(email);
        client.addCredit(credit);
        return this.updateClient(email, client);
    }

    public Client addItemToCart(String clientEmail, Integer menuId, Integer menuQ) {
        Client client = this.getClient(clientEmail);
        Menu menu = this.menuService.getMenu(menuId);

        if (client.hasItemWithItem(menu)) {
            Item item = client.getItemWithMenu(menu);
            item.setQuantity(item.getQuantity() + menuQ);
        } else {
            Item newItem = new Item(menu, menuQ);
            client.addItemToCart(newItem);
        }

        return this.updateClient(clientEmail, client);
    }

    public ShoppingCart getCart(String clientEmail) {
        Client client = this.getClient(clientEmail);
        return client.getShoppingCart();
    }

    public ShoppingCart deleteItem(String clientEmail, Integer itemId) {
        this.itemService.deleteItem(itemId);
        Client client = this.getClient(clientEmail);
        return client.getShoppingCart();
    }

    public ShoppingCart updateItemQuantity(String clientEmail, Integer itemId, Integer itemQ) {
        this.itemService.updateItemQuantity(itemId, itemQ);
        Client client = this.getClient(clientEmail);
        return client.getShoppingCart();
    }

    public List<Summary> getSummaries(String clientEmail) {
        Client client = this.getClient(clientEmail);
        return client.getSummaries();
    }

    public Optional<Summary> buyItems(String clientEmail) {
        Client client = this.getClient(clientEmail);
        Optional<Summary> optionalSummary = Optional.empty();
        if(client.getCredit() >= client.getShoppingCart().getTotal()) {
            client.setCredit(client.getCredit() - client.getShoppingCart().getTotal());
            Summary summary = this.summaryService.generateAndSaveSummaries(client);
            optionalSummary = Optional.of(summary);
        }

        return optionalSummary;
    }
}
