package system.common;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.sun.org.apache.xpath.internal.Expression;

import system.dao.HibernateDao;
import system.entity.BaseEntity;
import system.entity.PageInfo;
import system.utils.StringUtil;

public class SQLHelper extends DBHelper{

	private Class entityClass;
	private ArrayList objList=new ArrayList();
	private String querySqlColumn;
	
	private boolean isPorcessed=false;
	
	private static final String ORDER_BY_STRING=" order by ";

	public SQLHelper(Class entityClass) {
		super();
		this.entityClass = entityClass;
	}
	
	private StringBuilder baseSQL=new StringBuilder();
	private PageInfo pageInfo;
	private ArrayList paramList=new ArrayList();
	private ArrayList batchList=new ArrayList();
	private boolean countSql=false;
	private boolean coutainsId=false;
	
	public SQLHelper(String baseSQL,Object...param){
		this.baseSQL.append(baseSQL);
		for(int i=0;i<param.length;i++){
			paramList.add(param[i]);
		}
	}

	@Override
	public DBHelper setDataValue(String column, Object value) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public DBHelper addBatch() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void setQueryColumn(String columnSql) {
		this.querySqlColumn=columnSql;
	}

	@Override
	public DBHelper addCondition(Expression express) {
		if(isPorcessed){
			System.out.println("is processed!!");
		}
		objList.add(express);
		return this;
	}

	@Override
	public List querySql() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List queryObj() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Map> queryPageSql(PageInfo pageInfo) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public List<Map> queryPageSql() {
		HibernateDao dao=new HibernateDao();
		dao.queryPageSql(this);
		return null;
	}

	@Override
	public void update(BaseEntity... baseEntities) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public int delete(String... ids) {
		String tableName=getTableName(entityClass);
		DBContext.getContext().setDataSourceTableName(tableName);
		DBContext.getContext().setDataRead(false);
		baseSQL.append("delete from ").append(tableName).append(" where ID ");
		if(ids.length>1){
			baseSQL.append(" in (").append(StringUtil.getInStr(ids));
		}else{
			baseSQL.append("=?");
			paramList.add(ids[0]);
		}
		isPorcessed=true;
		
		
		return 0;
	}

	public Class getEntityClass() {
		return entityClass;
	}

	public void setEntityClass(Class entityClass) {
		this.entityClass = entityClass;
	}
	
	public String getSql(){
		return null;
	}
	
	public Object[] getParams(){
		return paramList.toArray();
	}
	
	
}
