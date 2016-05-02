package system.dao;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import system.common.RequestContext;
import system.common.ReturningWork;
import system.common.SQLHelper;
import system.entity.BaseEntity;
import system.entity.PageInfo;
import system.utils.SqlUtil;

public class HibernateDao extends HibernateDaoSupport implements DBDao {

	
	@Autowired
	private void getSessionFactory(SessionFactory sessionFactory) {
		super.setSessionFactory(sessionFactory);
	}
	public void update(BaseEntity...pojos){
		for(BaseEntity pojo:pojos){
			getHibernateTemplate().update(pojo);
		}
		getHibernateTemplate().flush();
		getHibernateTemplate().clear();
	}
	
	public void save(BaseEntity...pojos){
		for(BaseEntity pojo:pojos){
			getHibernateTemplate().save(pojo);
		}
		getHibernateTemplate().flush();
		getHibernateTemplate().clear();
		
	}
	@Override
	public List queryObj(SQLHelper sqlHelper) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Map> querySql(final SQLHelper sqlHelper) {
		Session session=getHibernateTemplate().getSessionFactory().getCurrentSession();
		ReturningWork<List<Map>> returningWork=new ReturningWork<List<Map>>() {

			@Override
			public List<Map> executeReturn(Connection connection) throws SQLException {
				List<Map> countList=SqlUtil.querySql(connection, sqlHelper);
				return countList;
			}
		};
		session.doWork(returningWork);
		return returningWork.getResult();
	}

	@Override
	public List<Map> queryPageSql(SQLHelper sqlHelper) {
		RequestContext requestContext=RequestContext.getContext();
		PageInfo pageInfo=requestContext.getPageInfo();
		
		if(requestContext.getRequest()==null){
			pageInfo=new PageInfo(1,10);
		}
		if(pageInfo==null){
			System.out.println("cannot find pagination!!!!");
		}
		return queryPageSql(sqlHelper,pageInfo);
	}

	@Override
	public List<Map> queryPageSql(final SQLHelper sqlHelper, final PageInfo pageInfo) {
		Session session=getHibernateTemplate().getSessionFactory().getCurrentSession();
		ReturningWork<List<Map>> returningWork=new ReturningWork<List<Map>>() {

			@Override
			public List<Map> executeReturn(Connection connection) throws SQLException {
				if(pageInfo.getCount()!=-1){
					List<Map> countList=SqlUtil.querySql(connection,sqlHelper);
					Long count=Long.parseLong((String) countList.get(0).get("COUNT"));
					pageInfo.setCount(count);
				}
				List<Map> tempList=SqlUtil.querySql(connection, sqlHelper);
				return tempList;
			}
		};
		session.doWork(returningWork);
		return returningWork.getResult();
	}

	@Override
	public int execSql(SQLHelper sqlHelper) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Map> callProc(SQLHelper sqlHelper) {
		// TODO Auto-generated method stub
		return null;
	}

}
