package system.dao;

import java.util.List;
import java.util.Map;

import system.common.SQLHelper;
import system.entity.PageInfo;

public interface DBDao {

	public List queryObj(SQLHelper sqlHelper);
	public List<Map>querySql(SQLHelper sqlHelper);
	public List<Map> queryPageSql(SQLHelper sqlHelper);
	public List<Map> queryPageSql(SQLHelper sqlHelper,PageInfo pageInfo);
	public int execSql(SQLHelper sqlHelper);
	public List<Map> callProc(SQLHelper sqlHelper);
	
	
}
