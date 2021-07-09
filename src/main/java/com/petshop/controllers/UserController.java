package com.petshop.controllers;

import com.petshop.batis.entity.User;
import com.petshop.batis.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//@Controller
public class UserController {

    @Autowired
    private UserMapper userMapper;

    @GetMapping("/users")
    List<User> all() {
        return userMapper.getAllUsers();
    }

    @PostMapping("/users")
    void newUser(@RequestBody User user) {
        userMapper.insertUser(user);
    }

    // Single item

    @GetMapping("/users/{id}")
    void one(@PathVariable Integer id) {
        userMapper.selectUserById(id);
    }

    @PutMapping("/users/{id}")
    void updateUser(@RequestBody User user, @PathVariable Integer id) {
        userMapper.updateUser(user);
    }

    @DeleteMapping("/users/{id}")
    void deleteUser(@PathVariable Integer id) {
        userMapper.deleteUser(id);
    }


}
