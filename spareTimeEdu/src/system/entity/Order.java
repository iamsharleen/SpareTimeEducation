package system.entity;

import java.io.Serializable;

import system.common.OrderDirect;

/**
 * 基础多条件查询条件
 * @author peak *
 * */
public class Order implements Serializable {
   
    /**
     *
     */
    private static final long serialVersionUID = 1L;
 
    /**需要排序的属性*/
    private String fieldName;
   
    /**属性排序方式*/
    private OrderDirect direct = OrderDirect.ASC;


	public String getFieldName() {
		return fieldName;
	}

	public OrderDirect getDirect() {
		return direct;
	}

	public void setFieldName(String fieldName) {
		this.fieldName = fieldName;
	}

	public void setDirect(OrderDirect direct) {
		this.direct = direct;
	}
   
   
  }
