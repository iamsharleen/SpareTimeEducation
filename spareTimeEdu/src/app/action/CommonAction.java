package app.action;

import java.util.Map;

import system.action.BaseAction;

public class CommonAction extends BaseAction{
	
	public void getCategories(){
		Map map=getRequestMap();
		String key=(String) map.get("bizKey");
	}

}
