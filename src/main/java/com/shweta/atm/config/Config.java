package com.shweta.atm.config;

import com.shweta.atm.models.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.HashMap;
import java.util.Map;

@Configuration
public class Config {

    @Bean("atm")
    public ATM buildATM() {
        return new ATM(buildBank());
    }

    @Bean("bank")
    public Bank buildBank() {
        return new Bank(buildUsers());
    }

    @Bean("users")
    public Map<String, User> buildUsers() {
        Map<String, User> users = new HashMap<>();
        User shweta = new User("1", "1", new SavingsAccount());
        User gaurav = new User("2", "2", new CurrentAccount());
        users.put("1", shweta);
        users.put("2", gaurav);
        return users;
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("http://localhost:3000")
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                        .allowedHeaders("*")
                        .allowCredentials(true);
            }
        };
    }
}