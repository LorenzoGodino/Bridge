package com.etecnologic.bridge.dao.interfaz;

import com.etecnologic.bridge.model.Users;

public interface IUsersDAO {
	abstract Users userValid(String username,String password);
	abstract int count();
}
