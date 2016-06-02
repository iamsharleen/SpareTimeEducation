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
import system.dao.QBCHelper;
import system.entity.BaseEntity;
import system.entity.PageInfo;
import system.entity.ResultList;
@Repository
public class KeywordConfigDaoImpl extends QBCHelper implements keywordConfigDao {

	@Override
	public List<Map> queryKeywords() {
		ResultList result=super.find(KeywordConfig.class, null);
		if(result!=null){
			return result.getList();
		}
		return null;
	}

}
