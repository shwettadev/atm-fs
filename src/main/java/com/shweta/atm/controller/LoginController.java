package com.shweta.atm.controller;

import com.shweta.atm.model.LoginRequest;
import com.shweta.atm.model.SignupRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")

public class LoginController {
    Map<String, String> users;
    @PostConstruct
    public void init() {
        users = new HashMap<>();
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody LoginRequest loginRequest) {
        //validate
        if (users.containsKey(loginRequest.getUsername())) {
            if (users.get(loginRequest.getUsername()).equals(loginRequest.getPassword())) {
                return ResponseEntity.ok("Login successful");
            }
        }
        return ResponseEntity.status(401).body("User not found or invalid credentials");

    }

    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody SignupRequest signupRequest) {
        if (users.containsKey(signupRequest.getUsername())) {
            return ResponseEntity.status(401).body("Username unavailable");
        }
        users.put(signupRequest.getUsername(), signupRequest.getPassword());
        return ResponseEntity.ok("Registration successful");
    }

}
