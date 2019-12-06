package com.dsoft.tpdsoft.services;

import com.dsoft.tpdsoft.exceptions.NotFoundException;
import com.dsoft.tpdsoft.exceptions.StorageException;
import com.dsoft.tpdsoft.model.Item;
import com.dsoft.tpdsoft.repositories.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ItemService {
    @Autowired
    private ItemRepository itemRepository;

    public Item getItem(Integer itemId) {
        return this.itemRepository.findById(itemId)
                .orElseThrow(() -> new NotFoundException("Could not get a item with id: " + itemId));
    }

    public Item updateItemQuantity(Integer itemId, Integer itemQ) {
        try {
            Item item = this.getItem(itemId);
            item.setQuantity(itemQ);
            Item savedItem = this.itemRepository.save(item);
            return savedItem;
        } catch (Exception e) {
            throw new StorageException("Could not update the quantity of the item with id: " + itemId, e);
        }
    };

    public void deleteItem(Integer itemId) {
        try {
            this.itemRepository.deleteById(itemId);
        } catch (Exception ex) {
            throw new NotFoundException("Could not delete the item with id: " + itemId, ex);
        }
    }
}
