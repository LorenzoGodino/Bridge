package com.etecnologic.bridge.dao.daoImpl;

import java.io.Serializable;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.springframework.stereotype.Repository;

import com.etecnologic.bridge.dao.interfaz.IUsersDAO;
import com.etecnologic.bridge.model.User;


@Repository(value = "alumnoDAO")
public class UsersDAO extends GenericDAO<User> implements IUsersDAO,Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 2650071908376470942L;
	
	@PersistenceContext
	private EntityManager em;
	public UsersDAO(Class<User> entityClass) {
		super(entityClass);
	}

	public User userValid(String username,String password){
		CriteriaBuilder cb = em.getCriteriaBuilder();
		CriteriaQuery<User> q = cb.createQuery(User.class);
		Root<User> userRoot = q.from(User.class);
		q.select(userRoot);
		q.where(cb.equal(userRoot.get("username"), username),
				cb.equal(userRoot.get("password"), password));
		List<User> userlist=em.createQuery(q).getResultList();
		if (null!=userlist && userlist.size()>0){
			return userlist.get(0);
		}
		return null;
	}
	

	@Override
	protected EntityManager getEntityManager() {
		return em;
	}
}
