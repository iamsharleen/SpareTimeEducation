package app.service;

import java.util.List;
import java.util.Map;

import app.entity.CourseInfo;

public interface CourseService {
	/**
	 * 根据条件查询课程
	 * @param cond
	 * @return
	 */
	public Map queryCourseByCondition(Map cond);
	
	public List<CourseInfo> queryCourseInfoById(String id);
}
