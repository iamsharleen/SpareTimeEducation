package app.action;

import java.util.Map;

import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import app.service.TeacherService;
import system.action.BaseAction;

@ParentPackage("json-default")
@Component
@Scope(value="prototype")
@Namespace("/teacher")
@SuppressWarnings("rawtypes")
public class TeacherAction extends BaseAction{
	@Autowired
	private TeacherService teacherService;
	
	@Action(value="/queryTeacheInfo")
	public void queryTeacheInfo(){
		Map map=getRequestMap();
		String id=(String) map.get("ID");
		Map resultMap=teacherService.queryTeacherById(id);
		translateAndOutput(resultMap);
	}

}
