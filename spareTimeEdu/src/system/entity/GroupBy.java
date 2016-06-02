package system.entity;

import java.util.HashMap;
import java.util.Map;

public class GroupBy {
	   
    /**须要分组的属性*/
    private Map<String, String> group = new HashMap<String, String>(0);//分组属性
   
    /**分组后放聚合函数查询属性 */
    private FunctionDemand[] functionDemands;//

	public Map<String, String> getGroup() {
		return group;
	}

	public FunctionDemand[] getFunctionDemands() {
		return functionDemands;
	}

	public void setGroup(Map<String, String> group) {
		this.group = group;
	}

	public void setFunctionDemands(FunctionDemand[] functionDemands) {
		this.functionDemands = functionDemands;
	}
    
    
}
