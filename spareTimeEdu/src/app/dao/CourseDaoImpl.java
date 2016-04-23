package app.dao;

import java.io.Serializable;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import app.entity.CourseInfo;
import system.dao.BaseDaoImpl;
@Repository
public class CourseDaoImpl extends BaseDaoImpl<CourseInfo, Serializable> implements CourseDao {

	@Override
	public List<CourseInfo> queryCourseByCond(Map cond) {
		List params=new ArrayList();
		String sql="select * from course_info ";
		String keyword=(String) cond.get("keyword");
		if(null!=keyword && !"".equals(keyword)){
			sql=sql+" where subject like ? ";
			params.add("%"+keyword+"%");
		}
		return find(sql,params.toArray(), -1, -1);
	}

	@Override
	public List<CourseInfo> queryCourseById(String id) {
		// TODO Auto-generated method stub
		return null;
	}

}
