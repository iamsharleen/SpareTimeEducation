package system.entity;

import java.io.Serializable;

public class Condition implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	/**
	 * 基础查询条件
	 */
	private MyWhere[] myWheres;

	/** 连接条件 */
	private LinkCondition[] linkCondition;

	/** 分页条件 */
	private Pager pager;

	/** 排序条件 */
	private Order order;

	/**
	 * 分组查询条件
	 */
	private GroupBy groupBy;

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public MyWhere[] getMyWheres() {
		return myWheres;
	}

	public LinkCondition[] getLinkCondition() {
		return linkCondition;
	}

	public Pager getPager() {
		return pager;
	}

	public Order getOrder() {
		return order;
	}

	public GroupBy getGroupBy() {
		return groupBy;
	}

	public void setMyWheres(MyWhere[] myWheres) {
		this.myWheres = myWheres;
	}

	public void setLinkCondition(LinkCondition[] linkCondition) {
		this.linkCondition = linkCondition;
	}

	public void setPager(Pager pager) {
		this.pager = pager;
	}

	public void setOrder(Order order) {
		this.order = order;
	}

	public void setGroupBy(GroupBy groupBy) {
		this.groupBy = groupBy;
	}

}
