package com.petshop.petshop;

import org.apache.ibatis.jdbc.ScriptRunner;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import java.io.FileReader;

@SpringBootApplication
@MapperScan("com.petshop.batis.mapper")
@ComponentScan(basePackages = {"com.petshop"})

public class PetshopApplication {

    public static void main(String[] args) {
        SpringApplication.run(PetshopApplication.class, args);
    }
}
