package com.etecnologic.bridge.dao.interfaz;

import com.etecnologic.bridge.model.User;

public interface IUsersDAO {
	abstract User userValid(String username,String password);
	abstract int count();
}
