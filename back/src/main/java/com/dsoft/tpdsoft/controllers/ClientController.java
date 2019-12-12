package com.dsoft.tpdsoft.controllers;

import com.dsoft.tpdsoft.model.Client;
import com.dsoft.tpdsoft.model.ShoppingCart;
import com.dsoft.tpdsoft.model.Summary;
import com.dsoft.tpdsoft.services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
        if (savedClient == null) {
            return new ResponseEntity("Username already exist", HttpStatus.NOT_FOUND);
        } else {
            return ResponseEntity.of(Optional.of(savedClient));
        }
    }

    @GetMapping("/{username}")
    public ResponseEntity<Client> getClient(@PathVariable String username) {
        Client client = this.clientService.getClient(username);
        return ResponseEntity.of(Optional.of(client));
    }

    //----- SHOPPING CART -----
    @GetMapping("/{username}/cart")
    public ResponseEntity<ShoppingCart> getCart(@PathVariable String username) {
        ShoppingCart cart = this.clientService.getCart(username);
        return ResponseEntity.of(Optional.of(cart));
    }

    @PostMapping("/{username}/cart")
    public ResponseEntity<Client> addItem(@PathVariable String username,
                                          @RequestParam("menuId") Integer menuId,
                                          @RequestParam("menuQ") Integer menuQ) {
        Client savedClient = this.clientService.addItemToCart(username, menuId, menuQ);
        return ResponseEntity.of(Optional.of(savedClient));
    }

    @DeleteMapping("/{username}/cart")
    public ResponseEntity<ShoppingCart> deleteItem(@PathVariable String username, @RequestParam("itemId") Integer itemId) {
        ShoppingCart cart = this.clientService.deleteItem(username, itemId);
        return ResponseEntity.of(Optional.of(cart));
    }

    @PutMapping("/{username}/cart")
    public ResponseEntity<ShoppingCart> updateItemQuantity(@PathVariable String username,
                                                           @RequestParam("itemId") Integer itemId,
                                                           @RequestParam("itemQ") Integer itemQ) {
        ShoppingCart cart = this.clientService.updateItemQuantity(username, itemId, itemQ);
        return ResponseEntity.of(Optional.of(cart));
    }

    // ----- OPERATIONS -----
    @PostMapping("/{username}/credit/{credit}")
    public ResponseEntity<Client> addCredit(@PathVariable String username, @PathVariable Double credit) {
        Client savedClient = this.clientService.addCredit(username, credit);
        return ResponseEntity.of(Optional.of(savedClient));
    }

    @PostMapping("/{username}/buy")
    public ResponseEntity buyItems(@PathVariable String username) {
        Optional<Summary> optionalSummary = this.clientService.buyItems(username);
        if (optionalSummary.isPresent()) {
            return ResponseEntity.of(optionalSummary);
        }
        return new ResponseEntity("The client does not have enough credit", HttpStatus.NOT_ACCEPTABLE);
    }

    @GetMapping("/{username}/summaries")
    public ResponseEntity<List<Summary>> getSummaries(@PathVariable String username) {
        List<Summary> summaries = this.clientService.getSummaries(username);
        return ResponseEntity.of(Optional.of(summaries));
    }
}
