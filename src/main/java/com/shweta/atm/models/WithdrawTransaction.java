package com.shweta.atm.models;

public class WithdrawTransaction extends Transaction{

    public WithdrawTransaction(Account account, double amount) {
        super(account,amount);
    }

    @Override
    public void execute(double amount) {
        this.account.withdraw(amount);
    }
}