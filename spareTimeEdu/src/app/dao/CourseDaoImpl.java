package app.dao;

import java.io.Serializable;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import app.entity.CourseInfo;
import system.common.ReturningWork;
import system.common.SQLHelper;
import system.dao.BaseDaoImpl;
import system.utils.SqlUtil;
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

	@SuppressWarnings({ "rawtypes", "unused" })
	@Override
	public void queryCourseList(String bizKey) {
		final StringBuilder sql=new StringBuilder();
		final List params=new ArrayList();
		CourseInfo cc=new CourseInfo();
//		cc.setSUBJECT("aaaaaaaaaa");
//		cc.setCODE("22222");
//		save(cc);
		sql.append("select * from COURSE_INFO");
		CourseInfo c=get("111");
		List<Map>list=find(sql.toString(),params.toArray(), -1, -1);
		
		//List<Map>list=h.queryPageSql();
		System.out.println(list);
	}

}
