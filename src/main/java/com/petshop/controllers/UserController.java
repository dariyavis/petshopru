package com.petshop.controllers;

import com.petshop.batis.entity.User;
import com.petshop.batis.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
//@Controller
public class UserController {

    // Внедрение зависимости
    @Autowired
    private UserMapper userMapper;


    @RequestMapping("/ws")
    public User user(){
        // Вызов слоя DAO
        User user = userMapper.selectUserByName("avis");
        return user;
    }

    @RequestMapping("/add")
    public void addUser() {
        User user = new User();
        user.setAge(25);
        user.setName("«Сяо Мин»");
        userMapper.insertUser(user);
    }

    @RequestMapping("/listUsers")
    public List<User> getAllUsers(){
        return userMapper.getAllUsers();
    }

    @RequestMapping("/deleteUser")
    public void deleteUser(int id) {
        userMapper.deleteUser(id);
    }


}
