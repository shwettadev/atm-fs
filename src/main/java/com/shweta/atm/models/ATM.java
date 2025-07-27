package com.shweta.atm.models;

public class ATM {
    private final Bank bank;

    public ATM(Bank bank) {
        this.bank = bank;
    }

    public Bank getBank() {
        return bank;
    }
}
