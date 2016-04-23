package system.dao;

import java.io.Serializable;
import java.util.Collection;
import java.util.List;

import org.hibernate.LockMode;

/**
 * 所有Dao的父类
 * @author GYX
 *
 */
public interface BaseDao<T, PK extends Serializable> {
	
	/**
	 * 根据主键获取实体。如果没有相应的实体，返回 null。
	 * 
	 * @param id
	 * @return T
	 */
	public T get(PK id);

	/**
	 * 根据主键获取实体并加锁。如果没有相应的实体，返回 null。
	 * 
	 * @param id
	 * @param lock
	 * @return T
	 */
	public T getWithLock(PK id, LockMode lock);

	/**
	 * 根据主键获取实体。如果没有相应的实体，抛出异常。
	 * 
	 * @param id
	 * @return T
	 */
	public T load(PK id);

	/**
	 * 根据主键获取实体并加锁。如果没有相应的实体，抛出异常。
	 * 
	 * @param id
	 * @param lock
	 * @return T
	 */
	public T loadWithLock(PK id, LockMode lock);

	/**
	 * 获取全部实体。
	 * 
	 * @return List<T>
	 */
	public List<T> loadAll();

	// loadAllWithLock() ?

	/**
	 * 更新实体
	 * 
	 * @param entity
	 */
	public void update(T entity);

	/**
	 * 更新实体并加锁
	 * 
	 * @param entity
	 * @param lock
	 */
	public void updateWithLock(T entity, LockMode lock);

	/**
	 * 存储实体到数据库
	 * 
	 * @param entity
	 */
	public void save(T entity);

	// saveWithLock()

	/**
	 * 增加或更新实体
	 * 
	 * @param entity
	 */
	public void saveOrUpdate(T entity);

	/**
	 * 增加或更新集合中的全部实体
	 * 
	 * @param entities
	 */
	public void saveOrUpdateAll(Collection<T> entities);

	/**
	 * 删除指定的实体
	 * 
	 * @param entity
	 */
	public void delete(T entity);

	/**
	 * 加锁并删除指定的实体
	 * 
	 * @param entity
	 * @param lock
	 */
	public void deleteWithLock(T entity, LockMode lock);

	/**
	 * 根据主键删除指定实体
	 * 
	 * @param id
	 */
	public void deleteByKey(PK id);

	/**
	 * 根据主键加锁并删除指定的实体
	 * 
	 * @param id
	 * @param lock
	 */
	public void deleteByKeyWithLock(PK id, LockMode lock);

	/**
	 * 删除集合中的全部实体
	 * 
	 * @param entities
	 */
	public void deleteAll(Collection<T> entities);

	// -------------------- HSQL ----------------------------------------------

	/**
	 * 使用HSQL语句直接增加、更新、删除实体
	 * 
	 * @param queryString
	 * @return int
	 */
	public int bulkUpdate(String queryString);

	/**
	 * 使用带参数的HSQL语句增加、更新、删除实体
	 * 
	 * @param queryString
	 * @param values
	 * @return int
	 */
	public int bulkUpdate(String queryString, Object[] values);

	/**
	 * 使用HSQL语句检索数据
	 * 
	 * @param queryString
	 * @return List
	 */
	public List find(String queryString);

	/**
	 * 使用HSQL语句分页检索数据
	 * 
	 * @param queryString
	 * @return List
	 */
	public List find(String queryString, int start, int pageSize);

	/**
	 * 获得符合条件的行数
	 */
	public long getRowCount(String queryString);
	/**
	 * 获得符合条件的行数
	 */
	public long getRowCount(String queryString,Object[] values);
	/**
	 * 使用带参数的HSQL语句检索数据
	 * 
	 * @param queryString
	 * @param values
	 * @return List
	 */
	public List find(String queryString, Object[] values);

	/**
	 * 使用带参数的HSQL语句进行分页检索数据
	 * 
	 * @param queryString
	 * @param values
	 * @return List
	 */
	public List find(String queryString, Object[] values, int start,
			int pageSize);

	/**
	 * 强制立即更新缓冲数据到数据库（否则仅在事务提交时才更新）
	 * 
	 */
	public void flush();
}
