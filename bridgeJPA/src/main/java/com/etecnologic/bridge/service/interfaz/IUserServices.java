package com.etecnologic.bridge.service.interfaz;

import com.etecnologic.bridge.model.User;

public interface IUserServices {
	public abstract int count();
	public abstract User userValid(String username,String password);
}
