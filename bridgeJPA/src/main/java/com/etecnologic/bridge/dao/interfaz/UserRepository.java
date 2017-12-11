package com.etecnologic.bridge.dao.interfaz;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.etecnologic.bridge.model.User;

public interface UserRepository  extends MongoRepository<User, Integer>{
	
	User findByUsernameAndPassword(String name, String password);
}
