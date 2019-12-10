package com.dsoft.tpdsoft.controllers;

import com.dsoft.tpdsoft.model.*;
import com.dsoft.tpdsoft.services.FileService;
import com.dsoft.tpdsoft.services.MenuService;
import com.dsoft.tpdsoft.services.ProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", methods = {RequestMethod.POST, RequestMethod.GET, RequestMethod.PUT, RequestMethod.DELETE})
@Controller
@RequestMapping(path = "/provider")
public class ProviderController {
    @Autowired
    private ProviderService providerService;

    @Autowired
    private MenuService menuService;

    @Autowired
    private FileService fileService;

    // ----- PROVIDER OPTIONS ----

    @PostMapping
    public ResponseEntity<Provider> createProvider(@RequestBody Provider provider,
                                                   @RequestParam(name = "username", required = true) String username) {
        Provider savedProvider = this.providerService.saveProvider(provider, username);

        return ResponseEntity.of(Optional.of(savedProvider));
    }

    @PostMapping("/{id}/logo")
    public ResponseEntity<File> setLogo(@PathVariable Integer id, @RequestParam("file") MultipartFile file) {
        Provider provider = this.providerService.getProvider(id);
        Integer logoId = provider.getLogo().getId();
        File savedFile = this.fileService.updateFile(file, logoId);

        return ResponseEntity.of(Optional.of(savedFile));
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
    public ResponseEntity<List<Menu>> createMenu(@RequestBody Menu menu, @PathVariable Integer id) {
        Provider provider = this.providerService.getProvider(id);
        menu.setProvider(provider);
        Menu savedMenu = this.menuService.saveMenu(menu);

        provider.addMenu(savedMenu);
        Provider savedProvider = this.providerService.updateProvider(provider, id);
        return ResponseEntity.of(Optional.of(savedProvider.getMenuList()));
    }

    @GetMapping("/{idProvider}/menu/{idMenu}")
    public ResponseEntity<Menu> getMenu(@PathVariable Integer idProvider, @PathVariable Integer idMenu) {
        Menu menu = this.menuService.getMenu(idMenu);
        return ResponseEntity.of(Optional.of(menu));
    }

    @PutMapping("/{idProvider}/menu/{idMenu}")
    public ResponseEntity<List<Menu>> updateMenu(@PathVariable Integer idProvider,
                                           @PathVariable Integer idMenu,
                                           @RequestBody Menu menu) {
        Provider provider = this.providerService.getProvider(idProvider);
        this.menuService.updateMenu(menu, idMenu, provider);
        return ResponseEntity.of(Optional.of(provider.getMenuList()));
    }

    @DeleteMapping("/{idProvider}/menu/{idMenu}")
    public ResponseEntity<List<Menu>> deleteMenu(@PathVariable Integer idProvider, @PathVariable Integer idMenu) {
        Provider provider = this.menuService.deleteMenu(idMenu, idProvider);
        return ResponseEntity.of(Optional.of(provider.getMenuList()));
    }

    // ----- LOGO OPTIONS -----
    @GetMapping("/{id}/logo")
    public ResponseEntity<Resource> downloadFile(@PathVariable Integer id) {
        Provider provider = this.providerService.getProvider(id);
        Integer logoId = provider.getLogo().getId();

        File file = this.fileService.getFile(logoId);

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"")
                .body(new ByteArrayResource(file.getData()));
    }

    @PutMapping("/{id}/logo")
    public ResponseEntity updateLogo(@RequestParam("file") MultipartFile file, @PathVariable Integer id) {
        Provider provider = this.providerService.getProvider(id);
        Integer logoId = provider.getLogo().getId();
        this.fileService.updateFile(file, logoId);

        return ResponseEntity.ok().build();
    }

    // ----- SCHEDULE OPTIONS -----
    @GetMapping("/{id}/schedule")
    public ResponseEntity<AttentionSchedule> getSchedule(@PathVariable Integer id) {
        Provider provider = this.providerService.getProvider(id);
        AttentionSchedule schedule = provider.getSchedule();

        return ResponseEntity.of(Optional.of(schedule));
    }

    @PutMapping("/{id}/schedule")
    public ResponseEntity updateSchedule(@PathVariable Integer id, @RequestBody AttentionSchedule schedule) {
        Provider provider = this.providerService.getProvider(id);
        Integer scheduleId = provider.getSchedule().getId();
        schedule.setId(scheduleId);
        provider.setSchedule(schedule);
        providerService.updateProvider(provider, id);

        return ResponseEntity.ok().build();
    }

    // ----- OPERATIONS -----
    @PostMapping("/{id}/credit/{credit}")
    public ResponseEntity<Provider> substractCredit(@PathVariable Integer id, @PathVariable Double credit) {
        Provider savedProvider = this.providerService.substractCredit(id, credit);
        return ResponseEntity.of(Optional.of(savedProvider));
    }

    @GetMapping("/{id}/summaries")
    public ResponseEntity<List<Summary>> getSummaries(@PathVariable Integer id) {
        List<Summary> summaries = this.providerService.getSummaries(id);
        return ResponseEntity.of(Optional.of(summaries));
    }


}
