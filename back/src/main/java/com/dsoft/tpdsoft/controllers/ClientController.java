package com.dsoft.tpdsoft.controllers;

import com.dsoft.tpdsoft.model.Client;
import com.dsoft.tpdsoft.model.ShoppingCart;
import com.dsoft.tpdsoft.model.Summary;
import com.dsoft.tpdsoft.services.ClientService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

@CrossOrigin(origins = "*", methods = {RequestMethod.POST, RequestMethod.GET, RequestMethod.PUT, RequestMethod.DELETE})
@RestController
@RequestMapping(path = "/client")
public class ClientController {

    Logger clientLogger = LoggerFactory.getLogger(ClientController.class);

    @Autowired
    private ClientService clientService;

    public ClientController(ClientService service) {
        this.clientService = service;
    }

    @GetMapping("/provider")
    public Boolean hasProvider(@RequestParam(name = "email") String email) {
        Boolean exist = this.clientService.hasProvider(email);
        return  exist;
    }


    @GetMapping("/exist")
    public Boolean existClient(@RequestParam(name = "email") String email) {
        Boolean exist = this.clientService.existClient(email);
        return exist;
    }

    @PostMapping
    public ResponseEntity<Client> addClient(@Valid @RequestBody Client client) {
        Client savedClient = this.clientService.saveClient(client);

        if (savedClient == null) {
            return new ResponseEntity("Username already exist", HttpStatus.NOT_FOUND);

        } else {
            clientLogger.info("A user with name"+ client.getName() +" was created correctly");
            return ResponseEntity.of(Optional.of(savedClient));
        }
    }

    @PutMapping
    public ResponseEntity<Client> updateClient(@Valid @RequestBody Client client,
                                               @RequestParam(name = "email") String email) {
        Client clientSaved = this.clientService.updateClient(email, client);
        return ResponseEntity.of(Optional.of(clientSaved));
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
        clientLogger.info("An item with id" + menuId.toString() + " and was bought by" + email);
        return ResponseEntity.of(Optional.of(savedClient));
    }

    @DeleteMapping("/cart")
    public ResponseEntity<ShoppingCart> deleteItem(@RequestParam(name = "email") String email,
                                                   @RequestParam("itemId") Integer itemId) {

        ShoppingCart cart = this.clientService.deleteItem(email, itemId);
        clientLogger.info("an item with id "+ itemId.toString()+ " was deleted by " + email);
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
        clientLogger.info(credit + "credit was added to client with email" + email);
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
    public ResponseEntity<Page<Summary>> getSummaries(
            @RequestParam(name = "email") String email,
            @RequestParam(name = "page", defaultValue = "0") Integer page,
            @RequestParam(name="elements", defaultValue = "5") Integer elements) {
        Pageable pageRequest = PageRequest.of(page, elements);
        Page<Summary> summaries = this.clientService.getSummaries(email ,pageRequest);
        return ResponseEntity.of(Optional.of(summaries));
    }
}
