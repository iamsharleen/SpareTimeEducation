package app.dao;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

import app.entity.CourseTypeCode;
import system.dao.BaseDaoImpl;

public class CourseTypeDaoImpl extends BaseDaoImpl<CourseTypeCode, Serializable> implements CourseTypeDao {

	@Override
	public List<Map> queryAllType(String bizKey) {
		return null;
	}

}
