package com.dsoft.tpdsoft.controllers;

import com.dsoft.tpdsoft.exceptions.ClientNotFoundException;
import com.dsoft.tpdsoft.model.Client;
import org.springframework.web.bind.annotation.*;
import com.dsoft.tpdsoft.repositories.ClientRepository;

import javax.validation.Valid;

@RestController
@RequestMapping(path = "/client")
public class ClientController {
    private ClientRepository clientRepository;

    public ClientController(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    @PostMapping
    public @ResponseBody Client addNewClient(@Valid @RequestBody Client client) {
        return clientRepository.save(client);
    }

    @GetMapping(path = "/{id}")
    public Client getClient(@PathVariable Integer id) {
        return clientRepository.findById(id)
                .orElseThrow(() -> new ClientNotFoundException(id));
    }
}
