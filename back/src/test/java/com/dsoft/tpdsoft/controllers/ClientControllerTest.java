package com.dsoft.tpdsoft.controllers;

import com.dsoft.tpdsoft.model.Client;
import com.dsoft.tpdsoft.repositories.ClientRepository;
import org.junit.Test;
import org.junit.jupiter.api.BeforeEach;
import org.mockito.AdditionalAnswers;

import java.util.Optional;

import static org.mockito.Mockito.*;

public class ClientControllerTest {
    private ClientRepository clientRepository = mock(ClientRepository.class);
    private ClientController clientController;

    @BeforeEach
    void init() {
        clientController = new ClientController(clientRepository);
    }

    @Test
    public void saveAClient() {
        Client client = new Client("Pepe", "Argento", "pepe@gmail.com", "Buenos aires", "123456789");
        when(clientRepository.save(any(Client.class))).then(AdditionalAnswers.returnsFirstArg());
        Client savedClient = clientRepository.save(client);
        assert(savedClient).equals(client);
    }

    @Test
    public void getAClient() {
        Client client = new Client("Pepe", "Argento", "pepe@gmail.com", "Buenos aires", "123456789");
        when(clientRepository.findById(any(Integer.class))).thenReturn(Optional.of(client));
        Client gettedClient = clientRepository.findById(1).get();
        assert(gettedClient).equals(client);
    }
}
