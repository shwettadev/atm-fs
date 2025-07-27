package com.shweta.atm.service;

import com.shweta.atm.model.AccountDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class AccountService {
    private Map<String, AccountDetails> accounts;
    @Autowired
    public AccountService(Map<String, AccountDetails> accounts) {
        this.accounts = accounts;
    }

    public AccountDetails getAccountDetails(String cardNumber) {
        return accounts.get(cardNumber);
    }

    public boolean withdraw(String cardNumber, Double amount) {
        AccountDetails accountDetails = this.getAccountDetails(cardNumber);
        double balance = accountDetails.getBalance();
        if(balance - amount < 0){return false;}
        accountDetails.setBalance(balance - amount);
        return true;
    }

    public boolean deposit (String cardNumber, Double amount){
        AccountDetails accountDetails = this.getAccountDetails(cardNumber);
        if(amount < 0){
            return false;
        }
        accountDetails.setBalance(accountDetails.getBalance() + amount);
        return true;
    }

    public Double getBalance(String cardNumber) {
        return this.getAccountDetails(cardNumber).getBalance();
    }
}
