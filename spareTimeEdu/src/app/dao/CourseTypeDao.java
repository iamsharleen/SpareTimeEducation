package app.dao;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

import app.entity.CourseTypeCode;
import system.dao.BaseDao;

public interface CourseTypeDao extends BaseDao<CourseTypeCode, Serializable> {
	
	public List<Map> queryCourseTypes(String bizKey);

}
