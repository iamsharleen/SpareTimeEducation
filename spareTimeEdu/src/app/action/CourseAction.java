package app.action;

import java.util.List;
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
@SuppressWarnings("rawtypes")
public class CourseAction extends BaseAction{
	@Autowired
	private CourseService courseService;
	
	
	@Action(value="" ,results={
			@Result(name="SUCCESS",location="/app/course/courseList.html")})
	public String toCourseList(){
		return "SUCCESS";
	}
	@Action(value="/getCourseList")
	public void queryCourseList(){
		Map map=getRequestMap();
		List<Map> list=courseService.queryCourseList(map);
		System.out.println(list);
	}
	@Action(value="/getCourse")
	public void queryCourseByCondition(){
		Map map=getRequestMap();
		String reqStr=(String) map.get("cond");
		Map reqMap=JsonUtil.jsonToMap(reqStr);
		Map resultMap=courseService.queryCourseByCondition(reqMap);
		translateAndOutput(resultMap);
	}
	@Action(value="/commitCourse")
	public void commitCourse(){
		Map map=getRequestMap();
		String courseStr=(String) map.get("cond");
	}
	
	@Action(value="/saveCourse")
	public void saveCourse(){
		Map map=getRequestMap();
		String courseStr=(String) map.get("courseInfo");
		Map courseMap=JsonUtil.jsonToMap(courseStr);
		courseService.saveCourse(courseMap);
	}
}
