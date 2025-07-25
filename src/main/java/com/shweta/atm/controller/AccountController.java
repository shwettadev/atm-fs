package com.shweta.atm.controller;


import com.shweta.atm.model.AccountDetails;
import com.shweta.atm.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/atm/account")
@CrossOrigin(origins = "http://localhost:3000")
public class AccountController {
    private AccountService accountService;

    @Autowired
    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }

    @GetMapping("/details")
    public ResponseEntity<AccountDetails> getAccountDetails(@RequestParam String cardNumber) {
        AccountDetails accountDetails = accountService.getAccountDetails(cardNumber);
        if (accountDetails != null) {
            return ResponseEntity.ok(accountDetails);
        } else {
            return ResponseEntity.status(404).body(null);
        }
    }

    @GetMapping("/balance")
    public ResponseEntity<Double> getAccountBalance(@RequestParam String cardNumber) {
        AccountDetails accountDetails = accountService.getAccountDetails(cardNumber);
        if (accountDetails != null) {
            return ResponseEntity.ok(accountDetails.getBalance());
        } else {
            return ResponseEntity.status(404).body(null);
        }
    }

    @PostMapping("/withdraw")
    public ResponseEntity<String> withDraw(@RequestParam Double amount, @RequestParam String cardNumber) {
        boolean success = accountService.withdraw(cardNumber, amount);
        if (success) {
            return ResponseEntity.ok("Amount " + amount + " withdrawn successfully now current balance is " + accountService.getAccountDetails(cardNumber).getBalance());
        } else {
            return ResponseEntity.status(401).body("Withdrawal failed");
        }
    }

    @PostMapping("/deposit")
    public ResponseEntity<String> deposit(@RequestParam Double amount, @RequestParam String cardNumber){
        boolean success = accountService.deposit(cardNumber,amount);
        if (success) {
            return ResponseEntity.ok("Amount " + amount + " deposit successfully now current balance is " + accountService.getAccountDetails(cardNumber).getBalance());
        } else {
            return ResponseEntity.status(401).body("Deposit failed");
        }
    }


}
