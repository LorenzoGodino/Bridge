package com.etecnologic.bridge.service.interfaz;

import com.etecnologic.bridge.model.User;
import java.util.List;

public interface IUserService {
	List<User> findAll();
	User userValid(String username, String password);
}
