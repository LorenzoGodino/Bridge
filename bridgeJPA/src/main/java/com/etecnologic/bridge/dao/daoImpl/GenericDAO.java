package com.etecnologic.bridge.dao.daoImpl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.Query;

/**
* Abstract Facade for Session Beans
*
* @author juneau
*/

public abstract class GenericDAO<T> {
    private Class<T> entityClass;

    public GenericDAO(Class<T> entityClass) {
        this.entityClass = entityClass;
    }

    protected abstract EntityManager getEntityManager();

    /* (non-Javadoc)
	 * @see com.etecnologic.erpmodularizado.persistence.daoImpl.IUserDAO#create(T)
	 */
    public void create(T entity) {
        getEntityManager().persist(entity);
    }

    /* (non-Javadoc)
	 * @see com.etecnologic.erpmodularizado.persistence.daoImpl.IUserDAO#edit(T)
	 */
    public void edit(T entity) {
        getEntityManager().merge(entity);
    }

    /* (non-Javadoc)
	 * @see com.etecnologic.erpmodularizado.persistence.daoImpl.IUserDAO#remove(T)
	 */
    public void remove(T entity) {
        getEntityManager().remove(getEntityManager().merge(entity));
    }

    /* (non-Javadoc)
	 * @see com.etecnologic.erpmodularizado.persistence.daoImpl.IUserDAO#find(java.lang.Object)
	 */
    public T find(Object id) {
        return getEntityManager().find(entityClass, id);
    }

    /* (non-Javadoc)
	 * @see com.etecnologic.erpmodularizado.persistence.daoImpl.IUserDAO#findAll()
	 */
    public List<T> findAll() {
		CriteriaQuery cq = getEntityManager().getCriteriaBuilder().createQuery();
        cq.select(cq.from(entityClass));
        return getEntityManager().createQuery(cq).getResultList();
    }

    /* (non-Javadoc)
	 * @see com.etecnologic.erpmodularizado.persistence.daoImpl.IUserDAO#findRange(int[])
	 */
    public List<T> findRange(int[] range) {
        CriteriaQuery cq = getEntityManager().getCriteriaBuilder().createQuery();
        cq.select(cq.from(entityClass));
        Query q = getEntityManager().createQuery(cq);
        q.setMaxResults(range[1] - range[0] + 1);
        q.setFirstResult(range[0]);
        return q.getResultList();
    }

    /* (non-Javadoc)
	 * @see com.etecnologic.erpmodularizado.persistence.daoImpl.IUserDAO#count()
	 */
    public int count() {
        CriteriaQuery cq = getEntityManager().getCriteriaBuilder().createQuery();
        javax.persistence.criteria.Root<T> rt = cq.from(entityClass);
        cq.select(getEntityManager().getCriteriaBuilder().count(rt));
        Query q = getEntityManager().createQuery(cq);
        return ((Long) q.getSingleResult()).intValue();
    }
    
}