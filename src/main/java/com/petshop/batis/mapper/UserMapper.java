package com.petshop.batis.mapper;

import com.petshop.batis.entity.User;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface UserMapper {
    User selectUserByName(String username);
    void insertUser(User user);
    void deleteUser(int id);
//    User selectAllUsers();
    void updateUser(User user);
    User selectUserById(int id);
    List<User> getAllUsers();
}
