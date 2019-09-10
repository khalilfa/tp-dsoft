package controllers;

import model.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import repositories.ClientRepository;

import javax.validation.Valid;
import java.util.Optional;

@RestController
@RequestMapping("/client")
public class MainController {
    @Autowired
    private ClientRepository clientRepository;

    @PostMapping(path = "/add")
    public void addNewClient(@Valid @RequestBody Client client) {
        clientRepository.save(client);
    }

    @GetMapping(path = "/")
    public Iterable<Client> getAllClients(){
        return clientRepository.findAll();
    }

    @GetMapping(path = "/test")
    public ResponseEntity<String> getMessage(){
        return ResponseEntity.ok("Con exito");
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Client> getClient(@PathVariable(value = "id") Integer clientId) {
        Optional<Client> optionalClient = clientRepository.findById(clientId);
        return ResponseEntity.of(optionalClient);
    }
}
