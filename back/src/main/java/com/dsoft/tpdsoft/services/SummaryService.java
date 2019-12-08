package com.dsoft.tpdsoft.services;

import com.dsoft.tpdsoft.exceptions.StorageException;
import com.dsoft.tpdsoft.model.*;
import com.dsoft.tpdsoft.repositories.SummaryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class SummaryService {
    @Autowired
    private SummaryRepository summaryRepository;

    @Autowired
    private ProviderService providerService;

    public Summary saveSummary(Summary summary) {
        try {
            Summary savedSummary = this.summaryRepository.save(summary);
            return savedSummary;
        } catch (Exception ex) {
            throw new StorageException("Could not save the summary: ", ex);
        }
    }

    public List<Summary> generateProviderSummaries(List<Item> items) {
        List<Summary> summaries = new ArrayList<>();
        for (Item item : items) {
            Menu menu = item.getMenu();
            Provider provider = menu.getProvider();
            Item newItem = new Item(menu, item.getQuantity());

            summaries = this.generateProviderSummary(newItem, summaries, provider);
        }

        summaries.forEach(summary ->{
            Provider provider = summary.getProvider();
            provider.setCredit(provider.getCredit() + summary.getTotal());
            this.providerService.saveProvider(summary.getProvider());
        });
        return summaries;
    }

    public List<Summary> generateProviderSummary(Item item, List<Summary> summaries, Provider provider) {
        Integer providerId = provider.getId();
        Optional<Summary> optionalSummary = this.getSummaryWithProviderWithId(summaries, providerId);
        if(optionalSummary.isPresent()) {
            optionalSummary.get().addItem(item);
            provider.addSummary(optionalSummary.get());
        } else {
            Summary summary = new Summary();
            summary.setProvider(provider);
            summary.addItem(item);
            summaries.add(summary);
            provider.addSummary(summary);
        }

        return summaries;
    }

    public Optional<Summary> getSummaryWithProviderWithId(List<Summary> summaries, Integer providerId) {
        return summaries.stream()
                .filter(summary -> summary.getItems().get(0).getItemProviderId().equals(providerId))
                .findAny();
    }

    public Summary generateClientSummary(List<Item> items, Client client) {
        Summary summary = new Summary();
        summary.setClient(client);
        summary.setItems(items);
        client.addSummary(summary);
        client.resetShoppingCart();

        this.saveSummary(summary);

        return summary;
    }

    public Summary generateAndSaveSummaries(Client client) {
        List<Item> items = new ArrayList<>(client.getShoppingCart().getItems());
        this.generateProviderSummaries(items);
        return this.generateClientSummary(items, client);
    }
}
