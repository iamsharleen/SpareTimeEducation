package app.action;

import java.util.Map;

import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import app.service.CourseService;
import system.action.BaseAction;
import system.entity.ResultObject;
import system.utils.JsonUtil;

@ParentPackage("json-default")
@Component
@Scope(value="prototype")
@Namespace("/course")
public class CourseAction extends BaseAction{
	@Autowired
	private CourseService courseService;
	
	
	@Action(value="" ,results={
			@Result(name="SUCCESS",location="/app/course/courseList.html")})
	public String toCourseList(){
		return "SUCCESS";
	}
	
	public void queryAllCourse(){
		
	}
	
	@SuppressWarnings("rawtypes")
	@Action(value="/getCourse")
	public void queryCourseByCondition(){
		Map map=getRequestMap();
		String reqStr=(String) map.get("cond");
		Map reqMap=JsonUtil.jsonToMap(reqStr);
		Map resultMap=courseService.queryCourseByCondition(reqMap);
		translateAndOutput(resultMap);
	}
}
