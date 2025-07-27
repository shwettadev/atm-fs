package com.shweta.atm.controller;

import com.shweta.atm.service.CardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/atm")
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {
    private CardService cardService;

    @Autowired
    LoginController(CardService cardService) {
        this.cardService = cardService;
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestParam String cardNumber, @RequestParam String pin) {
        if (cardService.validateCard(cardNumber, pin)) {
            return ResponseEntity.ok("Login successful for card: " + cardNumber);
        }
        return ResponseEntity.status(401)
                .body("Invalid card number or PIN");
    }
}