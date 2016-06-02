package system.entity;

import system.common.Function;

/**
 * 分组使用聚合函数查询的字段
 * @author Administrator
 *
 */
public class FunctionDemand {
	  /**放到聚合函数查询的属性*/
    private String pro;
   
    /**使用的聚合函数*/
    private Function fun;
 
    /**属性别名*/
    private String alia;

	public String getPro() {
		return pro;
	}

	public Function getFun() {
		return fun;
	}

	public String getAlia() {
		return alia;
	}

	public void setPro(String pro) {
		this.pro = pro;
	}

	public void setFun(Function fun) {
		this.fun = fun;
	}

	public void setAlia(String alia) {
		this.alia = alia;
	}
    
    
}
