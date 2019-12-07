package com.dsoft.tpdsoft.services;

import com.dsoft.tpdsoft.exceptions.StorageException;
import com.dsoft.tpdsoft.model.Client;
import com.dsoft.tpdsoft.model.Item;
import com.dsoft.tpdsoft.model.Provider;
import com.dsoft.tpdsoft.model.Summary;
import com.dsoft.tpdsoft.repositories.SummaryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SummaryService {
    @Autowired
    private SummaryRepository summaryRepository;

    @Autowired
    private ClientService clientService;

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
            Provider provider = item.getMenu().getProvider();
            Summary summary = new Summary();
            summary.setProvider(provider);
            summary.addItem(item);
            summaries.add(summary);
            provider.addSummary(summary);

            this.saveSummary(summary);
        }
        return summaries;
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
        List<Summary> providerSummaries = this.generateProviderSummaries(items);
        Summary clientSummary = this.generateClientSummary(items, client);

        return clientSummary;
    }
}
