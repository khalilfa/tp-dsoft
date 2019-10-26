package com.dsoft.tpdsoft.services;

import com.dsoft.tpdsoft.exceptions.NotFoundException;
import com.dsoft.tpdsoft.exceptions.StorageException;
import com.dsoft.tpdsoft.model.Client;
import com.dsoft.tpdsoft.repositories.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClientService {
    @Autowired
    private ClientRepository clientRepository;

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
}
