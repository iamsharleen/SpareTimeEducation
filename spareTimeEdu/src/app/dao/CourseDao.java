package app.dao;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

import app.CourseQueryParam;
import app.entity.CourseInfo;
import app.entity.CourseTypeCode;
import system.dao.BaseDao;
import system.dao.QBCDao;
import system.entity.PageInfo;
import system.entity.Pager;
import system.entity.ResultList;



public interface CourseDao extends QBCDao{
	
	List<CourseInfo> queryCourseByCond(Map cond);
	
	List<CourseInfo> queryCourseById(String id);

	List<Map> queryCourseList(String bizKey);

	ResultList queryCourseByCond(CourseQueryParam param, Pager pager);
	
}
