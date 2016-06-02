package app.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.dao.TeacherDao;
import app.entity.TeacherInfo;
@Service
@SuppressWarnings("rawtypes")
public class TeacherServiceImpl implements TeacherService {

	@Autowired
	private TeacherDao teacherDao;
	
	@Override
	public Map queryTeacherById(String id) {
		Map map=new HashMap<>();
		TeacherInfo teacher =(TeacherInfo) teacherDao.get(TeacherInfo.class, id);
		map.put("teacher", teacher);
		return map;
	}

}
