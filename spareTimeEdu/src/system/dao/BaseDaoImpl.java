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

import system.entity.BaseEntity;


/**
 * ����Daoʵ����ĸ���
 * @author GYX
 *
 */
public class BaseDaoImpl<T, PK extends Serializable> extends HibernateDaoSupport implements BaseDao<T, PK>  {
	
	private final Logger logger = LoggerFactory.getLogger(getClass());

	@Autowired
	private void getSessionFactory(SessionFactory sessionFactory) {
		super.setSessionFactory(sessionFactory);
	}

	// ʵ��������(�ɹ��췽���Զ���ֵ)
	private Class<T> entityClass;

	// ���췽�������ʵ�����Զ���ȡʵ��������
	public BaseDaoImpl() {
		this.entityClass = null;
		Class c = getClass();
		Type t = c.getGenericSuperclass();
		if (t instanceof ParameterizedType) {
			Type[] p = ((ParameterizedType) t).getActualTypeArguments();
			this.entityClass = (Class<T>) p[0];
		}
	}
	
	

	// -------------------- ����������ӡ��޸ġ�ɾ����� --------------------

	// ��������ȡʵ�塣���û����Ӧ��ʵ�壬���� null��
	public T get(PK id) {
		return (T) getHibernateTemplate().get(entityClass, id);
	}

	// ��������ȡʵ�岢�������û����Ӧ��ʵ�壬���� null��
	public T getWithLock(PK id, LockMode lock) {
		T t = (T) getHibernateTemplate().get(entityClass, id, lock);
		if (t != null) {
			this.flush(); // ����ˢ�£����������Ч��
		}
		return t;
	}

	// ��������ȡʵ�塣���û����Ӧ��ʵ�壬�׳��쳣��
	public T load(PK id) {
		return (T) getHibernateTemplate().load(entityClass, id);
	}

	// ��������ȡʵ�岢�������û����Ӧ��ʵ�壬�׳��쳣��
	public T loadWithLock(PK id, LockMode lock) {
		T t = (T) getHibernateTemplate().load(entityClass, id, lock);
		if (t != null) {
			this.flush(); // ����ˢ�£����������Ч��
		}
		return t;
	}

	// ��ȡȫ��ʵ�塣
	public List<T> loadAll() {
		return (List<T>) getHibernateTemplate().loadAll(entityClass);
	}

	// loadAllWithLock() ?

	// ����ʵ��
	public void update(T entity) {
		getHibernateTemplate().update(entity);
	}

	// ����ʵ�岢����
	public void updateWithLock(T entity, LockMode lock) {
		getHibernateTemplate().update(entity, lock);
		this.flush(); // ����ˢ�£����������Ч��
	}

	// �洢ʵ�嵽��ݿ�
	public void save(T entity) {
		getHibernateTemplate().save(entity);
	}

	// saveWithLock()��

	// ���ӻ����ʵ��
	public void saveOrUpdate(T entity) {
		getHibernateTemplate().saveOrUpdate(entity);
	}

	// ���ӻ���¼����е�ȫ��ʵ��
	public void saveOrUpdateAll(Collection<T> entities) {
		getHibernateTemplate().saveOrUpdateAll(entities);
	}

	// ɾ��ָ����ʵ��
	public void delete(T entity) {
		getHibernateTemplate().delete(entity);
	}

	// ����ɾ��ָ����ʵ��
	public void deleteWithLock(T entity, LockMode lock) {
		getHibernateTemplate().delete(entity, lock);
		this.flush(); // ����ˢ�£����������Ч��
	}

	// �������ɾ��ָ��ʵ��
	public void deleteByKey(PK id) {
		this.delete(this.load(id));
	}

	// ����������ɾ��ָ����ʵ��
	public void deleteByKeyWithLock(PK id, LockMode lock) {
		this.deleteWithLock(this.load(id), lock);
	}

	// ɾ����е�ȫ��ʵ��
	public void deleteAll(Collection<T> entities) {
		getHibernateTemplate().deleteAll(entities);
	}

	// -------------------- HSQL ----------------------------------------------

	// ʹ��HSQL���ֱ�����ӡ����¡�ɾ��ʵ��
	public int bulkUpdate(String queryString) {
		return getHibernateTemplate().bulkUpdate(queryString);
	}

	// ʹ�ô�����HSQL������ӡ����¡�ɾ��ʵ��
	public int bulkUpdate(String queryString, Object[] values) {
		return getHibernateTemplate().bulkUpdate(queryString, values);
	}

	// ʹ��HSQL���������
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

	// ʹ��HSQL����ҳ�������
	public List find(String queryString, int start, int pageSize) {
		return find(queryString, null, start, pageSize);
	}
	/**
	 * ��÷������������
	 */
	public long getRowCount(String queryString){
		return getRowCount(queryString,null);
	}
	/**
	 * ��÷������������
	 */
	public long getRowCount(String queryString,Object[] values){
		List list = getHibernateTemplate().find(queryString,values);
		if(null!=list && list.size()>0){
			return (Long)list.get(0);
		}
		return 0;
	}
	// ʹ�ô�����HSQL���������
	public List find(String queryString, Object[] values) {
		return getHibernateTemplate().find(queryString, values);
	}

	/**
	 * ʹ�ô�����HSQL�����з�ҳ�������
	 * 
	 * @param queryString
	 * @param values
	 * @return List
	 */
	@Override
	public List find(final String queryString, final Object[] values,
			final int start, final int pageSize) {
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
							/*//���÷�ҳ����
							if (start >= 0 && pageSize > 0) {
								query.setFirstResult(start);
								query.setMaxResults(pageSize);
							}*/
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
	
	public List queryPageSql(final String sql,final Object[]params){
		List list=null;
		try {
			list=getHibernateTemplate().executeFind(
				new HibernateCallback<List>() {
					public List doInHibernate(Session session) throws HibernateException{
						Query query=null;
						try {
							query=session.createSQLQuery(sql);
							if (params != null) {
								for (int i = 0; i < params.length; i++) {
									query.setParameter(i, params[i]);
								}
							}
							/*//���÷�ҳ����
							if (start >= 0 && pageSize > 0) {
								query.setFirstResult(start);
								query.setMaxResults(pageSize);
							}*/
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

	// ǿ���������»�����ݵ���ݿ⣨������������ύʱ�Ÿ��£�
	public void flush() {
		getHibernateTemplate().flush();
	}



	@Override
	public Object get(String id) {
		// TODO Auto-generated method stub
		return null;
	}



	@Override
	public void update(BaseEntity... pojos) {
		// TODO Auto-generated method stub
		
	}



	@Override
	public void save(BaseEntity... pojos) {
		// TODO Auto-generated method stub
		
	}



	@Override
	public void delete(String id) {
		// TODO Auto-generated method stub
		
	}



	@Override
	public List querySql(String sql, Object[] params) {
		// TODO Auto-generated method stub
		return null;
	}
}
