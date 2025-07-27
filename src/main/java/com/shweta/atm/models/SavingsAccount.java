package com.shweta.atm.models;

public class SavingsAccount extends Account{

    @Override
    public void deposit(double amount) {
        this.balance += amount + 10;
    }

    @Override
    public void withdraw(double amount) {
        if(balance - amount >= 0)
            this.balance -= amount;
    }
}
