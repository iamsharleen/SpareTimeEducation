package app.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.dao.CourseDao;
import app.entity.CourseInfo;
@Service
public class CourseServiceImpl implements CourseService {
	@Autowired
	private CourseDao courseDao;
	
	@Override
	public Map queryCourseByCondition(Map cond) {
		Map resultMap=new HashMap();
		List<CourseInfo> courses=courseDao.queryCourseByCond(cond);
		resultMap.put("courseInfoList", courses);
		return resultMap;
	}

	@Override
	public List<CourseInfo> queryCourseInfoById(String id) {
		return null;
	}

	@Override
	public List<Map> queryCourseList(Map map) {
		String bizKey=(String) map.get("bizKey");
		List<Map> list=courseDao.queryCourseList(bizKey);
		return list;
	}

}
