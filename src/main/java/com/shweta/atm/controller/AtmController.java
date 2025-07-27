package com.shweta.atm.controller;

import com.shweta.atm.models.ATM;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    public boolean insertCard(@RequestParam String cardNumber, @RequestParam String pin) {
        if (atm.getBank().validateCard(cardNumber, pin)) {
            this.validatedCard = cardNumber;
            return true;
        }
        return false;
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
}