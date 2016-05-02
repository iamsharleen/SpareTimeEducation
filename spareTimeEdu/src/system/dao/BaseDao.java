package system.dao;

import java.io.Serializable;
import java.util.Collection;
import java.util.List;

import org.hibernate.LockMode;

import system.entity.BaseEntity;

/**
 * ����Dao�ĸ���
 * @author GYX
 *
 */
public interface BaseDao<T, PK extends Serializable> {
	
	
	public Object get(String id);
	public void update(BaseEntity... pojos);
	public void save(BaseEntity... pojos);
	public void delete(String id);
	public List querySql(String sql,Object[]params);
	public List queryPageSql(String sql,Object[]params);
	/**
	 * ��������ȡʵ�塣���û����Ӧ��ʵ�壬���� null��
	 * 
	 * @param id
	 * @return T
	 */
	public T get(PK id);

	/**
	 * ��������ȡʵ�岢�������û����Ӧ��ʵ�壬���� null��
	 * 
	 * @param id
	 * @param lock
	 * @return T
	 */
	public T getWithLock(PK id, LockMode lock);

	/**
	 * ��������ȡʵ�塣���û����Ӧ��ʵ�壬�׳��쳣��
	 * 
	 * @param id
	 * @return T
	 */
	public T load(PK id);

	/**
	 * ��������ȡʵ�岢�������û����Ӧ��ʵ�壬�׳��쳣��
	 * 
	 * @param id
	 * @param lock
	 * @return T
	 */
	public T loadWithLock(PK id, LockMode lock);

	/**
	 * ��ȡȫ��ʵ�塣
	 * 
	 * @return List<T>
	 */
	public List<T> loadAll();

	// loadAllWithLock() ?

	/**
	 * ����ʵ��
	 * 
	 * @param entity
	 */
	public void update(T entity);

	/**
	 * ����ʵ�岢����
	 * 
	 * @param entity
	 * @param lock
	 */
	public void updateWithLock(T entity, LockMode lock);

	/**
	 * �洢ʵ�嵽��ݿ�
	 * 
	 * @param entity
	 */
	public void save(T entity);

	// saveWithLock()

	/**
	 * ���ӻ����ʵ��
	 * 
	 * @param entity
	 */
	public void saveOrUpdate(T entity);

	/**
	 * ���ӻ���¼����е�ȫ��ʵ��
	 * 
	 * @param entities
	 */
	public void saveOrUpdateAll(Collection<T> entities);

	/**
	 * ɾ��ָ����ʵ��
	 * 
	 * @param entity
	 */
	public void delete(T entity);

	/**
	 * ����ɾ��ָ����ʵ��
	 * 
	 * @param entity
	 * @param lock
	 */
	public void deleteWithLock(T entity, LockMode lock);

	/**
	 * �������ɾ��ָ��ʵ��
	 * 
	 * @param id
	 */
	public void deleteByKey(PK id);

	/**
	 * ����������ɾ��ָ����ʵ��
	 * 
	 * @param id
	 * @param lock
	 */
	public void deleteByKeyWithLock(PK id, LockMode lock);

	/**
	 * ɾ����е�ȫ��ʵ��
	 * 
	 * @param entities
	 */
	public void deleteAll(Collection<T> entities);

	// -------------------- HSQL ----------------------------------------------

	/**
	 * ʹ��HSQL���ֱ�����ӡ����¡�ɾ��ʵ��
	 * 
	 * @param queryString
	 * @return int
	 */
	public int bulkUpdate(String queryString);

	/**
	 * ʹ�ô�����HSQL������ӡ����¡�ɾ��ʵ��
	 * 
	 * @param queryString
	 * @param values
	 * @return int
	 */
	public int bulkUpdate(String queryString, Object[] values);

	/**
	 * ʹ��HSQL���������
	 * 
	 * @param queryString
	 * @return List
	 */
	public List find(String queryString);

	/**
	 * ʹ��HSQL����ҳ�������
	 * 
	 * @param queryString
	 * @return List
	 */
	public List find(String queryString, int start, int pageSize);

	/**
	 * ��÷������������
	 */
	public long getRowCount(String queryString);
	/**
	 * ��÷������������
	 */
	public long getRowCount(String queryString,Object[] values);
	/**
	 * ʹ�ô�����HSQL���������
	 * 
	 * @param queryString
	 * @param values
	 * @return List
	 */
	public List find(String queryString, Object[] values);

	/**
	 * ʹ�ô�����HSQL�����з�ҳ�������
	 * 
	 * @param queryString
	 * @param values
	 * @return List
	 */
	public List find(String queryString, Object[] values, int start,
			int pageSize);

	/**
	 * ǿ���������»�����ݵ���ݿ⣨������������ύʱ�Ÿ��£�
	 * 
	 */
	public void flush();
}
