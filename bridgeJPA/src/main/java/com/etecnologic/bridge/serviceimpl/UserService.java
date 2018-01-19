package com.etecnologic.bridge.serviceimpl;

import com.etecnologic.bridge.dao.interfaz.UserRepositoryCustom;
import com.etecnologic.bridge.model.User;
import com.etecnologic.bridge.service.interfaz.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("usuarioService")
public class UserService implements IUserService {

    @Autowired
    private UserRepositoryCustom userRepository;


    public UserRepositoryCustom getUserRepository() {
        return userRepository;
    }


    public void setUserRepository(UserRepositoryCustom userRepository) {
        this.userRepository = userRepository;
    }


    public User userValid(String username, String password) {
        User userFind = userRepository.findByUsernameAndPassword(username, password);
        if (userFind == null) {
            return new User();
        } else {
            return userFind;
        }
    }


}
