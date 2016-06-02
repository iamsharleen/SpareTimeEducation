package app.dao;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.hibernate.criterion.Criterion;
import org.springframework.stereotype.Repository;

import app.CourseQueryParam;
import app.entity.CourseInfo;
import system.common.Compare;
import system.dao.QBCHelper;
import system.entity.Condition;
import system.entity.MyWhere;
import system.entity.PageInfo;
import system.entity.Pager;
import system.entity.ResultList;
@Repository
public class CourseDaoImpl extends QBCHelper implements CourseDao {

	
	@Override
	public List<CourseInfo> queryCourseByCond(Map cond) {
//		List params=new ArrayList();
//		String sql="select * from course_info ";
//		String keyword=(String) cond.get("keyword");
//		if(null!=keyword && !"".equals(keyword)){
//			sql=sql+" where subject like ? ";
//			params.add("%"+keyword+"%");
//		}
		return null;
	}

	@Override
	public List<CourseInfo> queryCourseById(String id) {
		// TODO Auto-generated method stub
		return null;
	}

	@SuppressWarnings({ "rawtypes", "unused" })
	@Override
	public List<Map> queryCourseList(String bizKey) {
		
		return null;
	}

	@Override
	public ResultList queryCourseByCond(CourseQueryParam param,Pager pager) {
		Condition cond=new Condition();
		List<MyWhere> whereParams=new ArrayList<>();
		if(param.getPriceMin()!=null){
			whereParams.add(new MyWhere("PRICE", Compare.GE, param.getPriceMin()));
		}
		if(param.getPriceMax()!=null){
			whereParams.add(new MyWhere("PRICE", Compare.LT, param.getPriceMax()));
		}
		if(param.getKeyword()!=null){
			String keyWord="%"+param.getKeyword()+"%";
			whereParams.add(new MyWhere("KEYWORD", Compare.LIKE,keyWord));
		}
		if(param.getTitle()!=null){
			String title="%"+param.getTitle()+"%";
			whereParams.add(new MyWhere("SUBJECT", Compare.LIKE,title));
		}
		if(param.getType()!=null){
			whereParams.add(new MyWhere("COURSE_TYPE_CODE", Compare.GE,param.getType()));
		}
		cond.setMyWheres(whereParams.toArray(new MyWhere[whereParams.size()]));
		cond.setPager(pager);
		ResultList result=super.find(CourseInfo.class, cond);
		return result;
	}

}
