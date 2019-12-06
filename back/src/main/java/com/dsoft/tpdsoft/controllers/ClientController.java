package com.dsoft.tpdsoft.controllers;

import com.dsoft.tpdsoft.model.Client;
import com.dsoft.tpdsoft.model.Item;
import com.dsoft.tpdsoft.model.ShoppingCart;
import com.dsoft.tpdsoft.services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", methods = {RequestMethod.POST, RequestMethod.GET, RequestMethod.PUT})
@RestController
@RequestMapping(path = "/client")
public class ClientController {
    @Autowired
    private ClientService clientService;

    public ClientController(ClientService service) {
        this.clientService = service;
    }

    @PostMapping
    public ResponseEntity<Client> addClient(@Valid @RequestBody Client client) {
        Client savedClient = this.clientService.saveClient(client);
        return ResponseEntity.of(Optional.of(savedClient));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Client> getClient(@PathVariable Integer id) {
        Client client = this.clientService.getClient(id);
        return ResponseEntity.of(Optional.of(client));
    }

    @PostMapping("/{id}/credit/{credit}")
    public ResponseEntity<Client> addCredit(@PathVariable Integer id, @PathVariable Double credit) {
        Client savedClient = this.clientService.addCredit(id, credit);
        return ResponseEntity.of(Optional.of(savedClient));
    }

    //----- SHOPPING CART -----
    @GetMapping("/{id}/cart")
    public ResponseEntity<ShoppingCart> getCart(@PathVariable Integer id) {
        ShoppingCart cart = this.clientService.getCart(id);
        return ResponseEntity.of(Optional.of(cart));
    }

    @PostMapping("/{clientId}/cart")
    public ResponseEntity<Client> addItem(@PathVariable Integer clientId,
                                          @RequestParam("menuId") Integer menuId,
                                          @RequestParam("menuQ") Integer menuQ) {
        Client savedClient = this.clientService.addItemToCart(clientId, menuId, menuQ);
        return ResponseEntity.of(Optional.of(savedClient));
    }

    @DeleteMapping("/{clientId}/cart")
    public ResponseEntity<ShoppingCart> deleteItem(@PathVariable Integer clientId, @RequestParam("itemId") Integer itemId) {
        ShoppingCart cart = this.clientService.deleteItem(clientId, itemId);
        return ResponseEntity.of(Optional.of(cart));
    }

    @PutMapping("/{clientId}/cart")
    public ResponseEntity<ShoppingCart> updateItemQuantity(@PathVariable Integer clientId,
                                                           @RequestParam("itemId") Integer itemId,
                                                           @RequestParam("itemQ") Integer itemQ) {
        ShoppingCart cart = this.clientService.updateItemQuantity(clientId, itemId, itemQ);
        return ResponseEntity.of(Optional.of(cart));
    }
}
