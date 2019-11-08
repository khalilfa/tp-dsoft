package com.dsoft.tpdsoft.controllers;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", methods = {RequestMethod.GET})
@RestController
public class MainController {
    @GetMapping("/")
    public String index() {
        return "Hello, I am running";
    }
}
