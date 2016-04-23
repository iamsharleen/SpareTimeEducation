package app.dao;

import java.util.List;
import java.util.Map;

import app.entity.CourseInfo;



public interface CourseDao {
	
	List<CourseInfo> queryCourseByCond(Map cond);
	
	List<CourseInfo> queryCourseById(String id);
	

}
