package com.shweta.atm.models;

public class DepositTransaction extends Transaction{

    public DepositTransaction(Account account, double amount) {
        super(account,amount);
    }

    @Override
    public void execute(double amount) {
        this.account.deposit(amount);
    }
}
