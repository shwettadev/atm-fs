package com.shweta.atm.controller;

import com.shweta.atm.models.ATM;
import com.shweta.atm.models.Account;
import com.shweta.atm.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.PublicKey;

@RestController
@RequestMapping("/atm")
public class AtmController {
    ATM atm;
    private String validatedCard;

    @Autowired
    public AtmController(ATM atm) {
        this.atm = atm;
        this.validatedCard = null;
    }

    @PostMapping("/insertcard")
    public ResponseEntity<User> insertCard(@RequestParam String cardNumber, @RequestParam String pin) {
        if (this.validatedCard != null) {
            return ResponseEntity.status(400).body(null);
        }
        if (atm.getBank().validateCard(cardNumber, pin)) {
            this.validatedCard = cardNumber;
            User user = atm.getBank().getUser(cardNumber);
            return ResponseEntity.ok(user);
        }
        return ResponseEntity.status(401).body(null);
    }

    @PostMapping("/deposit")
    public void deposit(@RequestParam double amount) {
        if (null == this.validatedCard)
            return;
        this.atm.getBank().getUser(this.validatedCard).getAccount().deposit(amount);
    }

    @PostMapping("/withdraw")
    public void withdraw(@RequestParam double amount) {
        if (null == this.validatedCard)
            return;
        this.atm.getBank().getUser(this.validatedCard).getAccount().withdraw(amount);
    }

    @GetMapping("/balance")
    public double balance() {
        if (null == this.validatedCard)
            return 0;
        return this.atm.getBank().getUser(this.validatedCard).getAccount().getBalance();
    }

    @PostMapping("/logout")
    public void logout() {
        this.validatedCard = null;
    }

    @GetMapping("/details")

    public ResponseEntity<Account> accountDetails() {
        if (this.validatedCard != null) {
            Account account = atm.getBank().getUser(this.validatedCard).getAccount();
            return ResponseEntity.ok(account);
        }
        return ResponseEntity.status(401).body(null);
    }

    @PostMapping("/updatePin")
    public ResponseEntity<Boolean> changePin(String pin) {
        if (this.validatedCard != null) {
            atm.getBank().getUser(this.validatedCard).setPin(pin);
            return ResponseEntity.ok(true);
        }
        return ResponseEntity.status(401).body(false);
    }
}