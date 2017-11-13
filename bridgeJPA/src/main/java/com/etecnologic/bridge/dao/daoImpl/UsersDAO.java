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
import com.etecnologic.bridge.model.Users;


@Repository(value = "alumnoDAO")
public class UsersDAO extends GenericDAO<Users> implements IUsersDAO,Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 2650071908376470942L;
	
	@PersistenceContext
	private EntityManager em;
	public UsersDAO(Class<Users> entityClass) {
		super(entityClass);
	}

	public Users userValid(String username,String password){
		CriteriaBuilder cb = em.getCriteriaBuilder();
		CriteriaQuery<Users> q = cb.createQuery(Users.class);
		Root<Users> userRoot = q.from(Users.class);
		q.select(userRoot);
		q.where(cb.equal(userRoot.get("username"), username),
				cb.equal(userRoot.get("password"), password));
		List<Users> userlist=em.createQuery(q).getResultList();
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
