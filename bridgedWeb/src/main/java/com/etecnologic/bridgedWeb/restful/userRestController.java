package com.etecnologic.bridgeWeb.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.etecnologic.bridge.model.User;

@RestController
@RequestMapping("api/user/")
public class userRestController {
	@PostMapping(value = "login")
	public  User  userValid(User user) {
		User usuario=new User();
		usuario.setName("dadsf");
       return usuario;
	}
}
