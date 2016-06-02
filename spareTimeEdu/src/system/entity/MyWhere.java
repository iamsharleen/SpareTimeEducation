package system.entity;

import org.hibernate.criterion.Criterion;

import system.common.Compare;



public class MyWhere {
	 /**查询参数名*/
    private String propertyName;
    /**查询条件*/
    private Compare compare = Compare.EQ;
 
    /**查询参数值*/
    private Object propertyValue;
    /**between值*/
    private Object[] betweenValue;
 
    /**and_or条件1[Restrictions.eq(propertyName,propertyValue]*/
    private Criterion lhs;
    /**and_or条件2[Restrictions.eq(propertyName,propertyValue]*/
    private Criterion rhs;//and条件2

 
    public MyWhere(String propertyName, Compare compare, Object propertyValue) {
        super();
        this.propertyName = propertyName;
        this.compare = compare;
        this.propertyValue = propertyValue;
    }


	public String getPropertyName() {
		return propertyName;
	}


	public Compare getCompare() {
		return compare;
	}


	public Object getPropertyValue() {
		return propertyValue;
	}


	public Object[] getBetweenValue() {
		return betweenValue;
	}


	public Criterion getLhs() {
		return lhs;
	}


	public Criterion getRhs() {
		return rhs;
	}


	public void setPropertyName(String propertyName) {
		this.propertyName = propertyName;
	}


	public void setCompare(Compare compare) {
		this.compare = compare;
	}


	public void setPropertyValue(Object propertyValue) {
		this.propertyValue = propertyValue;
	}


	public void setBetweenValue(Object[] betweenValue) {
		this.betweenValue = betweenValue;
	}


	public void setLhs(Criterion lhs) {
		this.lhs = lhs;
	}


	public void setRhs(Criterion rhs) {
		this.rhs = rhs;
	}
    
    
}
