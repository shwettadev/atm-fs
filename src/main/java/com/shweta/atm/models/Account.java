package com.shweta.atm.models;

public abstract class Account {
    protected double balance;

    public double getBalance() {
        return this.balance;
    }

    public abstract void deposit(double amount);
    public abstract void withdraw(double amount);
}