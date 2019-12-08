package com.dsoft.tpdsoft.services;

import com.dsoft.tpdsoft.exceptions.NotFoundException;
import com.dsoft.tpdsoft.exceptions.StorageException;
import com.dsoft.tpdsoft.model.AttentionSchedule;
import com.dsoft.tpdsoft.model.File;
import com.dsoft.tpdsoft.model.Provider;
import com.dsoft.tpdsoft.model.Summary;
import com.dsoft.tpdsoft.repositories.ProviderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProviderService {
    @Autowired
    private ProviderRepository providerRepository;

    public Provider saveProvider(Provider provider, File logo, AttentionSchedule schedule) {
        try {
            provider.setSchedule(schedule);
            provider.setLogo(logo);
            Provider savedProvider = this.providerRepository.save(provider);
            return savedProvider;
        } catch (Exception ex) {
            throw new StorageException("Could not save the provider: " + provider.getName(), ex);
        }
    }

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

    public Provider substractCredit(Integer id, Double credit) {
        Provider provider = this.getProvider(id);
        provider.substractCredit(credit);
        return this.updateProvider(provider, id);
    }

    public List<Summary> getSummaries(Integer id) {
        Provider provider = this.getProvider(id);
        return provider.getSummaries();
    }
}
