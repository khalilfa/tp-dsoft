package com.dsoft.tpdsoft.controllers;
import com.dsoft.tpdsoft.model.Menu;
import com.dsoft.tpdsoft.services.MainService;
import com.dsoft.tpdsoft.services.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "*", methods = {RequestMethod.GET})
@RestController
public class MainController {

    @Autowired
    private MenuService menuService;

    @Autowired
    private MainService mainService;

    @GetMapping("/")
    public String index() {
        return "Hello, I am running";
    }

    @GetMapping("/menus")
    public ResponseEntity<Page<Menu>> getAllPageableMenus(
            @RequestParam(name = "page", defaultValue = "0") Integer page,
            @RequestParam(name="elements", defaultValue = "5") Integer elements) {
        Pageable pageRequest = PageRequest.of(page, elements);
        Page<Menu> menus = this.menuService.getAllPageableMenus(pageRequest);

        return ResponseEntity.of(Optional.of(menus));
    }

    @GetMapping("/menus/filters")
    public ResponseEntity<Page<Menu>> getMenusByPrice(
            @RequestParam(name = "category", defaultValue = "") String category,
            @RequestParam(name = "price", defaultValue = "") String price,
            @RequestParam(name = "page", defaultValue = "0") Integer page,
            @RequestParam(name = "elements", defaultValue = "5") Integer elements) {
        Pageable pageRequest = PageRequest.of(page, elements);
        Page<Menu> menus = this.menuService.getByFilters(category, price, pageRequest);
        return ResponseEntity.of(Optional.of(menus));
    }

    @GetMapping("menus/filter")
    public ResponseEntity<Page<Menu>> getMenusByNameAndDescription(
            @RequestParam(name = "filter") String filter,
            @RequestParam(name = "page", defaultValue = "0") Integer page,
            @RequestParam(name = "elements", defaultValue = "5") Integer elements) {
        Pageable pageRequest = PageRequest.of(page, elements);
        Page<Menu> menus = this.menuService.getByNameAndDescription(filter, pageRequest);
        return ResponseEntity.of(Optional.of(menus));
    }

    @PostMapping("/load-data")
    public void loadData() {
        this.mainService.loadData();
    }
}
