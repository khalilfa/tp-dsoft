package com.dsoft.tpdsoft.controllers;
import org.springframework.web.bind.annotation.*;

@RestController
public class MainController {
    @GetMapping("/")
    public String index() {
        return "Hello, I am running";
    }
}
