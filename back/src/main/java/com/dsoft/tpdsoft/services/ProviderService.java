package com.dsoft.tpdsoft.services;

import com.dsoft.tpdsoft.exceptions.NotFoundException;
import com.dsoft.tpdsoft.exceptions.StorageException;
import com.dsoft.tpdsoft.model.Provider;
import com.dsoft.tpdsoft.repositories.ProviderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProviderService {
    @Autowired
    ProviderRepository providerRepository;

    public Provider saveProvider(Provider provider) {
        try {
            Provider savedProvider = this.providerRepository.save(provider);
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
            Provider savedProvider = this.providerRepository.save(provider);
            return savedProvider;
        } catch (Exception ex) {
            throw new StorageException("Could not update the provider with id: " + id, ex);
        }
    }
}
