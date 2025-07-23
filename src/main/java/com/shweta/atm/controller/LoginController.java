package com.shweta.atm.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.Map;

@RestController
public class LoginController {
    Map<String, String> users;
    @PostConstruct
    public void init() {
        users = new HashMap<>();
    }

    @PostMapping("/login")
    public String loginUser(String username, String password) {
        //validate
        if (users.containsKey(username)) {
            if (users.get(username).equals(password)) {
                return "success";
            }
        }
        return "user does not exist";
    }

    @PostMapping("/signup")
    public String signup(String username, String password) {
        if (users.containsKey(username)) {
            return "username unavailable";
        }
        users.put(username, password);
        return "success";
    }

}
