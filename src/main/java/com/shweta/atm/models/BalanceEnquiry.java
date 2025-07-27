package com.shweta.atm.models;

public class BalanceEnquiry extends Transaction{

    public BalanceEnquiry(Account account, double amount) {
        super(account,amount);
    }

    @Override
    public void execute(double amount) {
        this.account.getBalance();
    }
}
