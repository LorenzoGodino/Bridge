package com.etecnologic.bridgeWeb.rest.Controller;

import com.etecnologic.bridge.model.User;
import com.etecnologic.bridge.service.interfaz.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/user")
public class UserRestController {

    @Autowired
    private IUserService userService;

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping(value = "/login")
    public User userValid(@RequestBody User user) {
       return   userService.userValid(user.getUsername(), user.getPassword());
    }

    @GetMapping(value = "test")
    public User test() {
        User user = new User();
        user.setUsername("admin");
        user.setPassword("admin");
        return userService.userValid(user.getUsername(), user.getPassword());
    }

}
