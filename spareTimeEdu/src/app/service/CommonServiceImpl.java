package app.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.dao.CourseTypeDao;


@Service
@SuppressWarnings({ "rawtypes", "unchecked" })
public class CommonServiceImpl implements CommonService {
	@Autowired
	private CourseTypeDao courseTypeDao;
	@Autowired
	private app.dao.keywordConfigDao keywordConfigDao;

	@Override
	public Map getCategories(String bizKey) {
		Map resultMap=new HashMap();
		List<Map> types=courseTypeDao.queryCourseTypes(bizKey);
		
		List<Map> keywords=keywordConfigDao.queryKeywords();
		resultMap.put("courseTypes", types);
		resultMap.put("keywords", keywords);
		return resultMap;
	}

}
