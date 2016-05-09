package app.action;

import java.util.Map;

import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import app.service.CommonService;
import system.action.BaseAction;

@ParentPackage("json-default")
@Component
@Scope(value="prototype")
@Namespace("/common")
@SuppressWarnings("rawtypes")
public class CommonAction extends BaseAction{
	@Autowired
	private CommonService commonService;
	
	@Action(value="/getCategories")
	public void getCategories(){
		Map map=getRequestMap();
		String key=(String) map.get("bizKey");
		Map resultMap=commonService.getCategories(key);
		translateAndOutput(resultMap);
	}

}
