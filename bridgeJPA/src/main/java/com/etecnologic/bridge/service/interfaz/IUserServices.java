package com.etecnologic.bridge.service.interfaz;

import com.etecnologic.bridge.model.Users;

public interface IUserServices {
	public abstract int count();
	public abstract Users userValid(String username,String password);
}
