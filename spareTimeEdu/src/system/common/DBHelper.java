package system.common;

import java.util.List;
import java.util.Map;

import javax.persistence.Table;

import com.sun.org.apache.xpath.internal.Expression;

import system.entity.BaseEntity;
import system.entity.PageInfo;

/**
 * @author Administrator
 *
 */
public abstract class DBHelper {
	private boolean autoFilterNullValue=false;
	private int maxResult=-1;
	private int maxInCount=100;
	
	public void setAutoFilterNullValue(boolean autoFilterNullValue) {
		this.autoFilterNullValue = autoFilterNullValue;
	}
	
	public int getMaxResult() {
		return maxResult;
	}

	public int getMaxInCount() {
		return maxInCount;
	}

	public void setMaxInCount(int maxInCount) {
		this.maxInCount = maxInCount;
	}
	public boolean isAutoFilterNullValue() {
		return autoFilterNullValue;
	}

	public void setMaxResult(int maxResult) {
		this.maxResult = maxResult;
	}

	public static DBHelper getInstances(Class entityClass){
		String tableName=getTableName(entityClass);
		
		return new SQLHelper(entityClass);
	}

	protected static String getTableName(Class entityClass) {
		Table table=(Table) entityClass.getAnnotation(Table.class);
		if(table==null){
			System.out.println("table name is null!!");
		}
		return table.name();
	}
	
	public abstract DBHelper setDataValue(String column,Object value);
	
	public abstract DBHelper addBatch();
	
	public abstract void setQueryColumn(String columnSql);
	
	public  abstract DBHelper addCondition(Expression express);
	
	public  abstract List querySql();
	
	public  abstract List queryObj();
	
	public  abstract List<Map> queryPageSql(PageInfo pageInfo);
	
	public  abstract List<Map> queryPageSql();
	
	public void save(BaseEntity...pojos){
		getInstances(pojos[0].getClass()).save(pojos);
	}
	public  abstract void update(BaseEntity...baseEntities);
	
	public  abstract  int delete(String...ids);
	
}
