package com.dsoft.tpdsoft.controllers;

import com.dsoft.tpdsoft.model.Client;
import com.dsoft.tpdsoft.services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

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
}
