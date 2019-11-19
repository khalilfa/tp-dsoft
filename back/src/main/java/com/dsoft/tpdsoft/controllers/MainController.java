package com.dsoft.tpdsoft.controllers;
import com.dsoft.tpdsoft.model.Category;
import com.dsoft.tpdsoft.model.Menu;
import com.dsoft.tpdsoft.services.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", methods = {RequestMethod.GET})
@RestController
public class MainController {

    @Autowired
    private MenuService menuService;

    @GetMapping("/")
    public String index() {
        return "Hello, I am running";
    }

    @GetMapping("/menus")
    public ResponseEntity<List<Menu>> getAllMenus() {
        List<Menu> menus = this.menuService.getAllMenus();
        return ResponseEntity.of(Optional.of(menus));
    }

    @GetMapping("/menus/filter")
    public ResponseEntity<List<Menu>> getMenusByCategories(@RequestParam String category) {
        List<Menu> menus = this.menuService.getByCategory(category);
        return ResponseEntity.of(Optional.of(menus));
    }
}
