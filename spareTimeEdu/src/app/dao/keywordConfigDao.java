package app.dao;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

import app.entity.KeywordConfig;
import system.dao.BaseDao;

public interface keywordConfigDao {

	List<Map> queryKeywords();
	
}
