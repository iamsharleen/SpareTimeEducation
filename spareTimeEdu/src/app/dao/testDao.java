package app.dao;

import org.springframework.stereotype.Repository;

import app.entity.CourseTypeCode;
import system.dao.QBCHelper;
@Repository
public class testDao extends QBCHelper{

	public boolean save(){
		CourseTypeCode type=new CourseTypeCode();
		type.setNAME("test");
		boolean b=super.sava(type);
		return b;
	}
}
