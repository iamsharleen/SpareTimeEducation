package system.dao;

import java.io.Serializable;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;

import javax.persistence.Table;

import org.apache.commons.beanutils.BeanUtils;
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
import system.entity.PageInfo;
import system.utils.StringUtil;


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
	
	public List<Map> queryPageSql(String querySql,List params,PageInfo pageInfo){
		final StringBuilder sql=new StringBuilder();
		final List values=new ArrayList<>();
		sql.append(querySql);
		values.addAll(params);
		if(null!=pageInfo){
			int pageSize=pageInfo.getPageSize();
			int start=pageInfo.getStart();
			if(pageSize>-1 && start>-1){
				sql.append(" limit ?,? ");
				values.add(start);
				values.add(pageSize);
			}
		}
		
		List list=null;
		try {
			list=getHibernateTemplate().executeFind(
				new HibernateCallback<List>() {
					public List doInHibernate(Session session) throws HibernateException{
						Query query=null;
						try {
							query=session.createSQLQuery(sql.toString());
							if (values != null) {
								for (int i = 0; i < values.size(); i++) {
									query.setParameter(i, values.get(i));
								}
							}
							query.setResultTransformer(CriteriaSpecification.ALIAS_TO_ENTITY_MAP);
							return query.list();
						} catch (Throwable ex) {
							ex.printStackTrace();
						}finally{
							session.flush();
							session.clear();
						}
						return null;
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



//	@Override
//	public Object get(String id) {
//		String tableName=getTableName(entityClass);
//		String querySql="select * from "+tableName+" where ID= ?";
//		List params=new ArrayList();
//		params.add(id);
//		List<Map> list=querySql(querySql, params);
//		Object obj=new Object();
//		if(list!=null && list.size()>0){
//			Map map=list.get(0);
//			try {
//				BeanUtils.copyProperties(obj, map);
//			} catch (IllegalAccessException e) {
//				e.printStackTrace();
//			} catch (InvocationTargetException e) {
//				e.printStackTrace();
//			}
//		}
//		return obj;
//	}



	@Override
	public void update(BaseEntity... pojos) {
		for(BaseEntity pojo:pojos){
			getHibernateTemplate().update(pojo);
		}
		getHibernateTemplate().flush();
		getHibernateTemplate().clear();
		
	}



	@Override
	public void save(BaseEntity... pojos) {
		for(BaseEntity pojo:pojos){
			getHibernateTemplate().save(pojo);
		}
		getHibernateTemplate().flush();
		getHibernateTemplate().clear();
		
	}



	@Override
	public void delete(String... ids) {
		String tableName=getTableName(entityClass);
		StringBuilder sql=new StringBuilder();
		sql.append("delete from ").append(tableName).append(" where ID ");
		if(ids.length>1){
			sql.append(" in (").append(StringUtil.getInStr(ids)).append(" )");
		}else{
			sql.append("= "+ids);
		}
		Query query=getSession().createSQLQuery(sql.toString());
		query.executeUpdate();
	}



	@Override
	public List<Map> querySql(String sql, List params) {
		List<Map> list=queryPageSql(sql, params, null);
		return list;
	}
	
	protected static String getTableName(Class entityClass) {
		Table table=(Table) entityClass.getAnnotation(Table.class);
		if(table==null){
			System.out.println("table name is null!!");
		}
		return table.name();
	}
}
