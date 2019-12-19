package com.dsoft.tpdsoft.services;

import com.dsoft.tpdsoft.exceptions.NotFoundException;
import com.dsoft.tpdsoft.exceptions.StorageException;
import com.dsoft.tpdsoft.model.*;
import com.dsoft.tpdsoft.repositories.ProviderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ProviderService {
    @Autowired
    private ProviderRepository providerRepository;

    @Autowired
    private ClientService clientService;

    @Autowired
    private SummaryService summaryService;

    public Provider saveProvider(Provider provider, String email) {
        try {
            Client client = this.clientService.getClient(email);
            Provider savedProvider = this.providerRepository.save(provider);
            client.setProvider(savedProvider);
            this.clientService.updateClient(email, client);
            return savedProvider;
        } catch (Exception ex) {
            throw new StorageException("Could not save the provider: " + provider.getName(), ex);
        }
    }

    public Provider getProvider(Integer id) {
        return this.providerRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Could not get provider with id: " + id));
    }

    public void deleteProvider(Integer id) {
        try {
            this.providerRepository.deleteById(id);
        } catch (Exception ex) {
            throw new NotFoundException("Could not delete the provider with id: " + id);
        }
    }

    public Provider updateProvider(Provider provider, Integer id) {
        try {
            provider.setId(id);
            return this.providerRepository.save(provider);
        } catch (Exception ex) {
            throw new StorageException("Could not update the provider with id: " + id, ex);
        }
    }

    public Provider substractCredit(Integer id, Double credit) {
        Provider provider = this.getProvider(id);
        provider.substractCredit(credit);
        return this.updateProvider(provider, id);
    }

    public Page<Summary> getSummaries(Integer id, Pageable pageable) {
        Provider provider = this.getProvider(id);
        Page<Summary> summaries = this.summaryService.getProviderSummaries(provider, pageable);
        return summaries;
    }
}
