package com.etecnologic.bridge.serviceimpl;

import com.etecnologic.bridge.dao.interfaz.UserRepository;
import com.etecnologic.bridge.dao.interfaz.UserRepositoryCustom;
import com.etecnologic.bridge.model.User;
import com.etecnologic.bridge.service.interfaz.IUserService;
import java.util.List;
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


    @Override
    /**
     * Devuelve una Lista de Usuario
     */
    public List<User> findAll() {
        return userRepository.findAll();
    }

    /**
     * Devuelve si el Usuario es valido
     * @param username
     * @param password
     * @return
     */
    public User userValid(String username, String password) {
        return userRepository.findByUsernameAndPassword(username, password);
    }


}
