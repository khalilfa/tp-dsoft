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

    @GetMapping("/exist")
    public Boolean addClient(@RequestParam(name = "email") String email) {
        Boolean exist = this.clientService.existClient(email);
        return exist;
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

    @GetMapping
    public ResponseEntity<Client> getClient(@RequestParam(name = "email") String email) {
        Client client = this.clientService.getClient(email);
        return ResponseEntity.of(Optional.of(client));
    }

    //----- SHOPPING CART -----
    @GetMapping("/cart")
    public ResponseEntity<ShoppingCart> getCart(@RequestParam(name = "email") String email) {
        ShoppingCart cart = this.clientService.getCart(email);
        return ResponseEntity.of(Optional.of(cart));
    }

    @PostMapping("/cart")
    public ResponseEntity<Client> addItem(@RequestParam(name = "email") String email,
                                          @RequestParam("menuId") Integer menuId,
                                          @RequestParam("menuQ") Integer menuQ) {
        Client savedClient = this.clientService.addItemToCart(email, menuId, menuQ);
        return ResponseEntity.of(Optional.of(savedClient));
    }

    @DeleteMapping("/cart")
    public ResponseEntity<ShoppingCart> deleteItem(@RequestParam(name = "email") String email,
                                                   @RequestParam("itemId") Integer itemId) {
        ShoppingCart cart = this.clientService.deleteItem(email, itemId);
        return ResponseEntity.of(Optional.of(cart));
    }

    @PutMapping("/cart")
    public ResponseEntity<ShoppingCart> updateItemQuantity(@RequestParam(name = "email") String email,
                                                           @RequestParam("itemId") Integer itemId,
                                                           @RequestParam("itemQ") Integer itemQ) {
        ShoppingCart cart = this.clientService.updateItemQuantity(email, itemId, itemQ);
        return ResponseEntity.of(Optional.of(cart));
    }

    // ----- OPERATIONS -----
    @PostMapping("/credit/{credit}")
    public ResponseEntity<Client> addCredit(@RequestParam(name = "email") String email,
                                            @PathVariable Double credit) {
        Client savedClient = this.clientService.addCredit(email, credit);
        return ResponseEntity.of(Optional.of(savedClient));
    }

    @PostMapping("/buy")
    public ResponseEntity buyItems(@RequestParam(name = "email") String email) {
        Optional<Summary> optionalSummary = this.clientService.buyItems(email);
        if (optionalSummary.isPresent()) {
            return ResponseEntity.of(optionalSummary);
        }
        return new ResponseEntity("The client does not have enough credit", HttpStatus.NOT_ACCEPTABLE);
    }

    @GetMapping("/summaries")
    public ResponseEntity<List<Summary>> getSummaries(@RequestParam(name = "email") String email) {
        List<Summary> summaries = this.clientService.getSummaries(email);
        return ResponseEntity.of(Optional.of(summaries));
    }
}
