package com.dsoft.tpdsoft.services;

import com.dsoft.tpdsoft.exceptions.NotFoundException;
import com.dsoft.tpdsoft.exceptions.StorageException;
import com.dsoft.tpdsoft.model.Category;
import com.dsoft.tpdsoft.model.Menu;
import com.dsoft.tpdsoft.model.Provider;
import com.dsoft.tpdsoft.repositories.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class MenuService {
    @Autowired
    private MenuRepository menuRepository;

    @Autowired
    private ProviderService providerService;

    public Menu saveMenu(Menu menu) {
        try {
            Menu savedMenu = this.menuRepository.save(menu);
            return savedMenu;
        } catch (Exception e) {
            throw new StorageException("Could not save the menu: " + menu.getName(), e);
        }
    }

    public Page<Menu> getAllPageableMenus(Pageable pageable) {
        try {
            Page<Menu> menus = this.menuRepository.findAll(pageable);
            return menus;
        } catch (Exception e) {
            throw new NotFoundException("Could not get the menus");
        }
    }
    public Page<Menu> getByCategory(String category, Pageable pageable) {
        try {
            Category newCategory = Category.valueOf(category);
            Page<Menu> menus = this.menuRepository.findAllByCategories(newCategory, pageable);
            return menus;
        } catch (Exception e) {
            throw new NotFoundException("Could not get the menus with categories: " + category, e);
        }
    }

    public Page<Menu> getByNameAndDescription(String filter, Pageable pageable) {
        try {
            Page<Menu> menus = this.menuRepository.findByNameContainingOrDescriptionContaining(filter, filter, pageable);
            return menus;
        } catch (Exception e) {
            throw new NotFoundException("Could not get the menus with name: " + filter, e);
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

    public Provider deleteMenu(Integer idMenu, Integer idProvider) {
        try {
            Provider provider = this.providerService.getProvider(idProvider);
            Menu menu = this.getMenu(idMenu);
            provider.deleteMenu(menu);

            return this.providerService.saveProvider(provider);
        } catch (Exception ex) {
            throw new NotFoundException("Could not delete the menu with id: " + idMenu, ex);
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
