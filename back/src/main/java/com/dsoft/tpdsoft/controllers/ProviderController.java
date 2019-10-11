package com.dsoft.tpdsoft.controllers;

import com.dsoft.tpdsoft.model.Menu;
import com.dsoft.tpdsoft.model.Provider;
import com.dsoft.tpdsoft.services.MenuService;
import com.dsoft.tpdsoft.services.ProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
@RequestMapping(path = "/provider")
public class ProviderController {
    @Autowired
    private ProviderService providerService;

    @Autowired
    private MenuService menuService;

    // ----- PROVIDER OPTIONS -----
    @PostMapping
    public ResponseEntity<Provider> createProvider(@RequestBody Provider provider) {
        Provider savedProvider = this.providerService.saveProvider(provider);
        return ResponseEntity.of(Optional.of(savedProvider));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Provider> getProvider(@PathVariable Integer id) {
        Provider provider = this.providerService.getProvider(id);
        return ResponseEntity.of(Optional.of(provider));
    }

    @DeleteMapping("/{id}")
    public void deleteProvider(@PathVariable Integer id) {
        this.providerService.deleteProvider(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Provider> updateProvider(@RequestBody Provider provider, @PathVariable Integer id) {
        Provider savedProvider = this.providerService.updateProvider(provider, id);
        return ResponseEntity.of(Optional.of(savedProvider));
    }

    // ----- MENU OPTIONS -----
    @PostMapping("/{id}/menu")
    public ResponseEntity<Provider> createMenu(@RequestBody Menu menu, @PathVariable Integer id) {
        Provider provider = this.providerService.getProvider(id);
        menu.setProvider(provider);
        Menu savedMenu = this.menuService.saveMenu(menu);

        provider.addMenu(savedMenu);
        Provider savedProvider = this.providerService.updateProvider(provider, id);
        return ResponseEntity.of(Optional.of(savedProvider));
    }

    @GetMapping("/{idProvider}/menu/{idMenu}")
    public ResponseEntity<Menu> getMenu(@PathVariable Integer idProvider, @PathVariable Integer idMenu) {
        Menu menu = this.menuService.getMenu(idMenu);
        return ResponseEntity.of(Optional.of(menu));
    }

    @PutMapping("/{idProvider}/menu/{idMenu}")
    public ResponseEntity<Menu> updateMenu(@PathVariable Integer idProvider,
                                           @PathVariable Integer idMenu,
                                           @RequestBody Menu menu) {
        Menu savedMenu = this.menuService.updateMenu(menu, idMenu);
        return ResponseEntity.of(Optional.of(savedMenu));
    }

    @DeleteMapping("/{idProvider}/menu/{idMenu}")
    public void deleteMenu(@PathVariable Integer idProvider, @PathVariable Integer idMenu) {
        this.providerService.deleteProvider(idMenu);
    }
}
