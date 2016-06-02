package app.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.beanutils.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import app.CourseQueryParam;
import app.common.DICT_PUB;
import app.dao.CourseDao;
import app.entity.CourseInfo;
import system.entity.Pager;
import system.entity.ResultList;
import system.utils.StringUtil;
@Service
@SuppressWarnings("rawtypes")
public class CourseServiceImpl implements CourseService {
	@Autowired
	private CourseDao courseDao;
	
	@Override
	public Map queryCourseByCondition(Map cond) {
		
		Map resultMap=new HashMap();
		Pager pager=getPageInfo(cond);
		CourseQueryParam param=getQueryParam(cond);
		ResultList result=courseDao.queryCourseByCond(param,pager);
		resultMap.put("courseInfoList", result.getList());
		resultMap.put("priceList", "");
		return resultMap;
	}
	
	private CourseQueryParam getQueryParam(Map cond) {
		CourseQueryParam param=new CourseQueryParam();
		String priceRange=(String) cond.get("PRICE");
		if(StringUtil.isNotEmpty(priceRange)){
			if(DICT_PUB.PRICE_RANGE_ONE.equals(priceRange)){
				param.setPriceMin(0.00);
				param.setPriceMax(100.00);
			}else if(DICT_PUB.PRICE_RANGE_TWO.equals(priceRange)){
				param.setPriceMin(100.00);
				param.setPriceMax(300.00);
			}else if(DICT_PUB.PRICE_RANGE_THREE.equals(priceRange)){
				param.setPriceMin(300.00);
				param.setPriceMax(500.00);
			}else if(DICT_PUB.PRICE_RANGE_FOUR.equals(priceRange)){
				param.setPriceMin(500.00);
			}
		}
		if(StringUtil.isNotEmpty((String)cond.get("TYPE"))){
			param.setType((String) cond.get("TYPE"));
		}
		if(StringUtil.isNotEmpty((String)cond.get("KEYWORD"))){
			param.setKeyword((String) cond.get("KEYWORD"));
		}
		return param;
	}

	private Pager getPageInfo(Map map){
			Map pageInfoMap=(Map) map.remove("pageInfo");
			Pager pageInfo=new Pager();
			int pageSize=Integer.valueOf(pageInfoMap.get("pageSize").toString());
			pageInfo.setPageSize(pageSize);
			int currentPage=Integer.valueOf(pageInfoMap.get("pageIndex").toString());
			pageInfo.setPageIndex(currentPage);
			return pageInfo;
	}

	@Override
	public List<CourseInfo> queryCourseInfoById(String id) {
		return null;
	}

	@Override
	public List<Map> queryCourseList(Map map) {
		String bizKey=(String) map.get("bizKey");
		List<Map> list=courseDao.queryCourseList(bizKey);
		return list;
	}

	@Override
	public void saveCourse(Map map) {
	
			CourseInfo course=new CourseInfo();
			course=map2Entity(map, CourseInfo.class);
			
			if(course.getID()!=null){
				courseDao.update(course);
			}else{
				courseDao.sava(course);
			}
		
		
	}

    public static <T> T map2Entity(Map map, Class<T> entity) {
		T obj = null;
		try {
			obj = entity.newInstance();
			BeanUtils.copyProperties(obj, map);
		} catch (Exception e) {
		}	
		return obj;
	}
    

}
