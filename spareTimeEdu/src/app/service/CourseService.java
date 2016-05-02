package app.service;

import java.util.List;
import java.util.Map;

import app.entity.CourseInfo;

public interface CourseService {
	/**
	 *
	 * @param cond
	 * @return
	 */
	public Map queryCourseByCondition(Map cond);
	
	public List<CourseInfo> queryCourseInfoById(String id);

	public List<Map> queryCourseList(Map map);
}
