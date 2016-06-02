package app.dao;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import app.entity.CourseTypeCode;
import system.dao.BaseDaoImpl;
import system.dao.QBCHelper;
import system.entity.ResultList;
import system.utils.SqlUtil;
@Repository
public class CourseTypeDaoImpl extends QBCHelper implements CourseTypeDao {

	@Override
	public List<Map> queryCourseTypes(String bizKey) {
		ResultList result=super.find(CourseTypeCode.class, null);
		if(result!=null){
			return result.getList();
		}
		return null;
	}

}
