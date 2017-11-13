package com.etecnologic.bridge.serviceimple;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etecnologic.bridge.dao.interfaz.IUsersDAO;
import com.etecnologic.bridge.model.Users;
import com.etecnologic.bridge.service.interfaz.IUserServices;

@Service("usuarioService")
public class UsersServices implements IUserServices {
	@Autowired
	private IUsersDAO  userDAO;

	public IUsersDAO getUserDAO() {
		return userDAO;
	}

	public void setUserDAO(IUsersDAO userDAO) {
		this.userDAO = userDAO;
	}

	@Override
	public int count() {
		// TODO Auto-generated method stub
		return userDAO.count();
	}

	@Override
	public Users userValid(String username, String password) {
		return userDAO.userValid(username, password);
	} 
}
