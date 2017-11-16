package com.etecnologic.bridgeWeb.rest.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.etecnologic.bridge.model.User;

@RestController
@RequestMapping("api/user/")
public class UserRestController {
	@PostMapping(value = "login")	
	public  User  userValid(@RequestBody User user) {
		User usuario=new User();
		usuario.setName("dadsf");
       return usuario;
	}
	@GetMapping(value = "test")
	public String  test() {
		return "mucho Betis";
	}
	
}
