package com.shweta.atm.config;


import com.shweta.atm.model.AccountDetails;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.HashMap;
import java.util.Map;

@Configuration
public class Config {
    @Bean
    public Map<String, String> cards() {
        Map<String, String> cards = new HashMap<>();
        // Add some default users
        cards.put("0000", "0000");
        cards.put("1111", "1111");
        return cards;
    }
    @Bean
    public Map<String, AccountDetails> accounts(){
        Map<String, AccountDetails> accounts = new HashMap<>();
        accounts.put("0000", new AccountDetails("John Doe", "1234567890", 1000.00));
        accounts.put("1111", new AccountDetails("Jane Smith", "0987654321", 2000.00));
        return accounts;
    }
}
