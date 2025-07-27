package com.shweta.atm.models;

public class User {
    private String cardNUmber;
    private String pin;
    private Account account;

    public User(String cardNUmber, String pin, Account account) {
        this.cardNUmber = cardNUmber;
        this.pin = pin;
        this.account = account;
    }

    public String getCardNUmber() {
        return cardNUmber;
    }

    public void setCardNUmber(String cardNUmber) {
        this.cardNUmber = cardNUmber;
    }

    public String getPin() {
        return pin;
    }

    public void setPin(String pin) {
        this.pin = pin;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }
}
