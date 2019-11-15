package com.dsoft.tpdsoft.services;

import com.dsoft.tpdsoft.exceptions.NotFoundException;
import com.dsoft.tpdsoft.exceptions.StorageException;
import com.dsoft.tpdsoft.model.Menu;
import com.dsoft.tpdsoft.model.Provider;
import com.dsoft.tpdsoft.repositories.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MenuService {
    @Autowired
    private MenuRepository menuRepository;

    public Menu saveMenu(Menu menu) {
        try {
            Menu savedMenu = this.menuRepository.save(menu);
            return savedMenu;
        } catch (Exception e) {
            throw new StorageException("Could not save the menu: " + menu.getName(), e);
        }
    }

    public Menu getMenu(Integer id) {
        try {
            Menu menu = this.menuRepository.findById(id).get();
            return menu;
        } catch (Exception ex) {
            throw new NotFoundException("Could not get the menu with id: " + id, ex);
        }
    }

    public void deleteMenu(Integer id) {
        try {
            this.menuRepository.deleteById(id);
        } catch (Exception ex) {
            throw new NotFoundException("Could not delete the menu with id: " + id, ex);
        }
    }

    public Menu updateMenu(Menu menu, Integer id, Provider provider) {
        try {
            menu.setId(id);
            menu.setProvider(provider);
            Menu savedMenu = this.menuRepository.save(menu);
            return savedMenu;
        } catch (Exception ex) {
            throw new StorageException("Could not update the menu with id: " + id, ex);
        }
    }
}
