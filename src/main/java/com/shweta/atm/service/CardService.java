package com.shweta.atm.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class CardService {
    private Map<String, String> cards;
    @Autowired
    CardService(Map<String, String> cards){
        this.cards = cards;
    }
    public boolean validateCard(String cardNumber, String pin) {
        return cards.containsKey(cardNumber) && cards.get(cardNumber).equals(pin);
    }
}
