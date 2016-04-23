package system.dao;

import java.io.Serializable;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.Collection;
import java.util.List;
import java.util.Map;

import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.LockMode;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.CriteriaSpecification;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate3.HibernateCallback;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;


/**
 * 所有Dao实现类的父类
 * @author GYX
 *
 */
public class BaseDaoImpl<T, PK extends Serializable> extends HibernateDaoSupport implements BaseDao<T, PK>  {
	
	private final Logger logger = LoggerFactory.getLogger(getClass());

	@Autowired
	private void getSessionFactory(SessionFactory sessionFactory) {
		super.setSessionFactory(sessionFactory);
	}

	// 实体类类型(由构造方法自动赋值)
	private Class<T> entityClass;

	// 构造方法，根据实例类自动获取实体类类型
	public BaseDaoImpl() {
		this.entityClass = null;
		Class c = getClass();
		Type t = c.getGenericSuperclass();
		if (t instanceof ParameterizedType) {
			Type[] p = ((ParameterizedType) t).getActualTypeArguments();
			this.entityClass = (Class<T>) p[0];
		}
	}

	// -------------------- 基本检索、增加、修改、删除操作 --------------------

	// 根据主键获取实体。如果没有相应的实体，返回 null。
	public T get(PK id) {
		return (T) getHibernateTemplate().get(entityClass, id);
	}

	// 根据主键获取实体并加锁。如果没有相应的实体，返回 null。
	public T getWithLock(PK id, LockMode lock) {
		T t = (T) getHibernateTemplate().get(entityClass, id, lock);
		if (t != null) {
			this.flush(); // 立即刷新，否则锁不会生效。
		}
		return t;
	}

	// 根据主键获取实体。如果没有相应的实体，抛出异常。
	public T load(PK id) {
		return (T) getHibernateTemplate().load(entityClass, id);
	}

	// 根据主键获取实体并加锁。如果没有相应的实体，抛出异常。
	public T loadWithLock(PK id, LockMode lock) {
		T t = (T) getHibernateTemplate().load(entityClass, id, lock);
		if (t != null) {
			this.flush(); // 立即刷新，否则锁不会生效。
		}
		return t;
	}

	// 获取全部实体。
	public List<T> loadAll() {
		return (List<T>) getHibernateTemplate().loadAll(entityClass);
	}

	// loadAllWithLock() ?

	// 更新实体
	public void update(T entity) {
		getHibernateTemplate().update(entity);
	}

	// 更新实体并加锁
	public void updateWithLock(T entity, LockMode lock) {
		getHibernateTemplate().update(entity, lock);
		this.flush(); // 立即刷新，否则锁不会生效。
	}

	// 存储实体到数据库
	public void save(T entity) {
		getHibernateTemplate().save(entity);
	}

	// saveWithLock()？

	// 增加或更新实体
	public void saveOrUpdate(T entity) {
		getHibernateTemplate().saveOrUpdate(entity);
	}

	// 增加或更新集合中的全部实体
	public void saveOrUpdateAll(Collection<T> entities) {
		getHibernateTemplate().saveOrUpdateAll(entities);
	}

	// 删除指定的实体
	public void delete(T entity) {
		getHibernateTemplate().delete(entity);
	}

	// 加锁并删除指定的实体
	public void deleteWithLock(T entity, LockMode lock) {
		getHibernateTemplate().delete(entity, lock);
		this.flush(); // 立即刷新，否则锁不会生效。
	}

	// 根据主键删除指定实体
	public void deleteByKey(PK id) {
		this.delete(this.load(id));
	}

	// 根据主键加锁并删除指定的实体
	public void deleteByKeyWithLock(PK id, LockMode lock) {
		this.deleteWithLock(this.load(id), lock);
	}

	// 删除集合中的全部实体
	public void deleteAll(Collection<T> entities) {
		getHibernateTemplate().deleteAll(entities);
	}

	// -------------------- HSQL ----------------------------------------------

	// 使用HSQL语句直接增加、更新、删除实体
	public int bulkUpdate(String queryString) {
		return getHibernateTemplate().bulkUpdate(queryString);
	}

	// 使用带参数的HSQL语句增加、更新、删除实体
	public int bulkUpdate(String queryString, Object[] values) {
		return getHibernateTemplate().bulkUpdate(queryString, values);
	}

	// 使用HSQL语句检索数据
	public List find(String queryString) {
		return getHibernateTemplate().find(queryString);
//		final StringBuilder sql=new StringBuilder();
//		sql.append(queryString);
//		List list=null;
//		try {
//			list=getHibernateTemplate().executeFind(
//				new HibernateCallback<List>() {
//					public List doInHibernate(Session session) throws HibernateException{
//						Query query=null;
//						try {
//							query=session.createSQLQuery(sql.toString());
//						} catch (Throwable ex) {
//							ex.printStackTrace();
//						}
//						query.setResultTransformer(CriteriaSpecification.ALIAS_TO_ENTITY_MAP);
//						return query.list();
//					}
//				});
//			
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//		return list;
		
	}

	// 使用HSQL语句分页检索数据
	public List find(String queryString, int start, int pageSize) {
		return find(queryString, null, start, pageSize);
	}
	/**
	 * 获得符合条件的行数
	 */
	public long getRowCount(String queryString){
		return getRowCount(queryString,null);
	}
	/**
	 * 获得符合条件的行数
	 */
	public long getRowCount(String queryString,Object[] values){
		List list = getHibernateTemplate().find(queryString,values);
		if(null!=list && list.size()>0){
			return (Long)list.get(0);
		}
		return 0;
	}
	// 使用带参数的HSQL语句检索数据
	public List find(String queryString, Object[] values) {
		return getHibernateTemplate().find(queryString, values);
	}

	/**
	 * 使用带参数的HSQL语句进行分页检索数据
	 * 
	 * @param queryString
	 * @param values
	 * @return List
	 */
	@Override
	public List find(final String queryString, final Object[] values,
			final int start, final int pageSize) {
		
//		List list = getHibernateTemplate().executeWithNativeSession(
//				new HibernateCallback<List>() {
//					public List doInHibernate(Session session)
//							throws HibernateException {
//						Query queryObject = session.createQuery(queryString);
//						if (values != null) {
//							for (int i = 0; i < values.length; i++) {
//								queryObject.setParameter(i, values[i]);
//							}
//						}
//						//设置分页参数
//						if (start >= 0 && pageSize > 0) {
//							queryObject.setFirstResult(start);
//							queryObject.setMaxResults(pageSize);
//						}
//						return queryObject.list();
//					}
//				});
		//================
		final StringBuilder sql=new StringBuilder();
		sql.append(queryString);
		List list=null;
		try {
			list=getHibernateTemplate().executeFind(
				new HibernateCallback<List>() {
					public List doInHibernate(Session session) throws HibernateException{
						Query query=null;
						try {
							query=session.createSQLQuery(sql.toString());
							if (values != null) {
								for (int i = 0; i < values.length; i++) {
									query.setParameter(i, values[i]);
								}
							}
							//设置分页参数
							if (start >= 0 && pageSize > 0) {
								query.setFirstResult(start);
								query.setMaxResults(pageSize);
							}
						} catch (Throwable ex) {
							ex.printStackTrace();
						}
						query.setResultTransformer(CriteriaSpecification.ALIAS_TO_ENTITY_MAP);
						return query.list();
					}
				});
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		//=====
		
		
		return list;
	}

	// 强制立即更新缓冲数据到数据库（否则仅在事务提交时才更新）
	public void flush() {
		getHibernateTemplate().flush();
	}
}
