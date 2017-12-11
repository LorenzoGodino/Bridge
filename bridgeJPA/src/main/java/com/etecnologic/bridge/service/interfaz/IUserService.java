package com.etecnologic.bridge.service.interfaz;

import com.etecnologic.bridge.model.User;

public interface IUserService {
	public abstract User userValid(String username,String password);
}
