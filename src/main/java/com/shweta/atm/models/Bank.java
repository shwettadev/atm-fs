package com.shweta.atm.models;

import java.util.Map;

public class Bank {
    private final Map<String, User> users;

    public Bank(Map<String, User> users) {
        this.users = users;
    }

    public boolean validateCard(String cardNumber, String pin) {
        return this.users.get(cardNumber).getPin().equals(pin);
    }

    public User getUser(String cardNumber) {
        return this.users.get(cardNumber);
    }
}