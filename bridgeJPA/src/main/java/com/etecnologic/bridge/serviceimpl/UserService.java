package com.etecnologic.bridge.serviceimpl;

import com.etecnologic.bridge.dao.interfaz.UserRepository;
import com.etecnologic.bridge.dao.interfaz.UserRepositoryCustom;
import com.etecnologic.bridge.model.User;
import com.etecnologic.bridge.service.interfaz.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("usuarioService")
public class UserService implements IUserService {

    @Autowired
    private UserRepository userRepository;


    public UserRepository getUserRepository() {
        return userRepository;
    }


    public void setUserRepository(UserRepositoryCustom userRepository) {
        this.userRepository = userRepository;
    }


    public User userValid(String username, String password) {
        return userRepository.findByUsernameAndPassword(username, password);
    }


}
