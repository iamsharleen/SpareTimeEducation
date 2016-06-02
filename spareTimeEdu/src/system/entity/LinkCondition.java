package system.entity;

/**
 * 多表查询链接条件
 * @author peak *
 * */
public class LinkCondition {
    /**属性名*/
    private String propertyName;
    /**别名*/
    private String propertyAlias;
	public String getPropertyName() {
		return propertyName;
	}
	public String getPropertyAlias() {
		return propertyAlias;
	}
	public void setPropertyName(String propertyName) {
		this.propertyName = propertyName;
	}
	public void setPropertyAlias(String propertyAlias) {
		this.propertyAlias = propertyAlias;
	}
    
    
 }