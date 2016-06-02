package system.dao;

import system.entity.Condition;
import system.entity.ResultList;

public interface QBCDao {
	public boolean sava(final Object entity);
	public boolean update(final Object entity);
	public boolean delete(final Object entity);
	public Object get(final Class classzz,String id);
	
}
