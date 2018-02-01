package com.etecnologic.bridgeWeb.controller;

import com.etecnologic.bridge.model.User;
import com.etecnologic.bridge.service.interfaz.IUserService;
import com.etecnologic.bridgeWeb.exception.UserNotFoundException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/user")
public class UserRestController extends BaseController {

    @Autowired
    private IUserService userService;

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping(value = "/login")
    public ResponseEntity<User> userValid(@RequestBody User user) throws UserNotFoundException {
        User returnUser = userService.userValid(user.getUsername(), user.getPassword());
        if (returnUser == null) {
            LOGBRIDGE.info("Intento de Ingreso:" + user.getUsername() + ' ' + user.getPassword());
            throw new UserNotFoundException();
        } else {
            return new ResponseEntity<>(returnUser, HttpStatus.OK);
        }
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(value = "/listUser")
    public ResponseEntity<List<User>> listUser() {
        List<User> lstUser = userService.findAll();
        LOGBRIDGE.info("Devuelta de todos los usuario");
        if (lstUser.isEmpty()) {
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity < List < User >> (lstUser,HttpStatus.OK);
        }
    }

    @GetMapping(value = "test")
    public User test() {
        User user = new User();
        user.setUsername("admin");
        user.setPassword("admin");
        return userService.userValid(user.getUsername(), user.getPassword());
    }

}
