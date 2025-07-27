package com.shweta.atm.models;

public class CurrentAccount extends Account{
    @Override
    public void deposit(double amount) {
        this.balance += amount + 5;
    }

    @Override
    public void withdraw(double amount) {
        this.balance -= amount;
    }
}
