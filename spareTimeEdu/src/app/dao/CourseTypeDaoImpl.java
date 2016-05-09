package app.dao;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import app.entity.CourseTypeCode;
import system.dao.BaseDaoImpl;
import system.utils.SqlUtil;
@Repository
public class CourseTypeDaoImpl extends BaseDaoImpl<CourseTypeCode, Serializable> implements CourseTypeDao {

	@Override
	public List<Map> queryCourseTypes(String bizKey) {
		StringBuilder sql=new StringBuilder();
		List params=new ArrayList();
		sql.append("select * from COURSE_TYPE_CODE");
		List<Map>list=querySql(sql.toString(), params);
		return list;
	}

}
