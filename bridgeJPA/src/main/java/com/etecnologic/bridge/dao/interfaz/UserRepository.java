package com.etecnologic.bridge.dao.interfaz;

import com.etecnologic.bridge.model.User;
import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository  extends MongoRepository<User, Integer>{
	List<User> findAll();
	User findByUsernameAndPassword(String name, String password);
}
