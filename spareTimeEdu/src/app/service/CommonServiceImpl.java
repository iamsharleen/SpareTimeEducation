package app.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

import app.dao.CourseTypeDao;
@SuppressWarnings({ "rawtypes", "unchecked" })
public class CommonServiceImpl implements CommonService {
	@Autowired
	private CourseTypeDao courseTypeDao;

	@Override
	public Map getCategories(String bizKey) {
		Map resultMap=new HashMap();
		List<Map> types=courseTypeDao.queryCourseTypes(bizKey);
		resultMap.put("courseTye", types);
		return resultMap;
	}

}
