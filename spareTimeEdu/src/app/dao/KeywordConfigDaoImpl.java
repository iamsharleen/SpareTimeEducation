package app.dao;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;

import org.hibernate.LockMode;
import org.springframework.stereotype.Repository;

import app.entity.KeywordConfig;
import system.dao.BaseDaoImpl;
import system.entity.BaseEntity;
import system.entity.PageInfo;
@Repository
public class KeywordConfigDaoImpl extends BaseDaoImpl<KeywordConfig, Serializable> implements keywordConfigDao {

	@Override
	public List<Map> queryKeywords() {
		String sql="select * from KEYWORD_CONFIG";
		List params=new ArrayList();
		List<Map>list=querySql(sql.toString(), params);
		return list;
	}

}
