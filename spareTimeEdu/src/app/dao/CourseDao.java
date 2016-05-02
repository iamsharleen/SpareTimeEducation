package app.dao;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

import app.entity.CourseInfo;
import app.entity.CourseTypeCode;
import system.dao.BaseDao;



public interface CourseDao extends BaseDao<CourseInfo, Serializable>{
	
	List<CourseInfo> queryCourseByCond(Map cond);
	
	List<CourseInfo> queryCourseById(String id);

	List<Map> queryCourseList(String bizKey);
	

}
