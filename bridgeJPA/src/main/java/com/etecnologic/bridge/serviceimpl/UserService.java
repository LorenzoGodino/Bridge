package com.etecnologic.bridge.serviceimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etecnologic.bridge.dao.interfaz.UserRepository;
import com.etecnologic.bridge.model.User;
import com.etecnologic.bridge.service.interfaz.IUserService;

@Service("usuarioService")
public class UserService implements IUserService {
	@Autowired
	private UserRepository  userRepository;


	public UserRepository getUserRepository() {
		return userRepository;
	}


	public void setUserRepository(UserRepository userRepository) {
		this.userRepository = userRepository;
	}


	public User userValid(String username, String password) {
		return userRepository.findByUsernameAndPassword(username, password);
	}

	
}
