package system.dao;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.CriteriaSpecification;
import org.hibernate.criterion.MatchMode;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.ProjectionList;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate3.HibernateCallback;
import org.springframework.orm.hibernate3.HibernateTemplate;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;
import org.springframework.stereotype.Repository;

import system.entity.Condition;
import system.entity.FunctionDemand;
import system.entity.MyWhere;
import system.entity.Pager;
import system.entity.ResultList;

@SuppressWarnings("unchecked")
public class QBCHelper extends HibernateDaoSupport implements QBCDao{
	// 注入HibernateTemplate
//	@Autowired
//	private HibernateTemplate hibernateTemplate;
	@Autowired
	private void getSessionFactory(SessionFactory sessionFactory) {
		super.setSessionFactory(sessionFactory);
	}

	/**
	 * 保存数据到数据库
	 * 
	 * @author peak
	 * @param entity
	 *            要保存的对象
	 * @return 返回数据是否保存成功
	 */
	public boolean sava(final Object entity) {
		return (Boolean) getHibernateTemplate().execute(new HibernateCallback<Object>() {
			@Override
			public Object doInHibernate(org.hibernate.Session arg0) throws HibernateException, SQLException {
				try {
					arg0.save(entity);
					return true;
				} catch (HibernateException e) {
					throw new RuntimeException("hibernate数据保存异常：", e);
				}
			}

		});
	}

	/**
	 * 更新数据
	 * 
	 * @author peak
	 * @param entity
	 *            要更新的对象
	 * @return 返回数据是否更新成功
	 */

	public boolean update(final Object entity) {
		return (Boolean) getHibernateTemplate().execute(new HibernateCallback() {
			@Override
			public Object doInHibernate(org.hibernate.Session arg0) throws HibernateException, SQLException {
				try {
					arg0.update(entity);
					return true;
				} catch (HibernateException e) {
					throw new RuntimeException("hibernate数据更新异常：", e);
				}
			}
		});
	}

	/**
	 * 删除数据
	 * 
	 * @author peak
	 * @param entity
	 *            要删除的对象
	 * @return 返回数据是否删除成功
	 */
	public boolean delete(final Object entity) {
		return (Boolean) getHibernateTemplate().execute(new HibernateCallback() {

			@Override
			public Object doInHibernate(org.hibernate.Session arg0) throws HibernateException, SQLException {
				try {
					arg0.delete(entity);
					return true;
				} catch (HibernateException e) {
					throw new RuntimeException("hibernate数据删除异常：", e);
				}
			}
		});
	}
	
	public Object get(final Class classzz,String id){
		return getHibernateTemplate().get(classzz, id);
	}

	/**
	 * 基本查询 （多表链接、多条件、分页、排序）
	 * 
	 * @author peak
	 * @param classzz
	 *            查询的类
	 * @param conditions
	 *            查询条件
	 * @return ResultList 数据结果集ResultList.List 与ResultList.pager
	 */
	public <T> ResultList find(final Class classzz, final Condition... conditions) {
		return (ResultList) getHibernateTemplate().execute(new HibernateCallback() {

			@Override
			public Object doInHibernate(org.hibernate.Session arg0) throws HibernateException, SQLException {
				Criteria criteria = arg0.createCriteria(classzz);
				// 多表连接
				linkJoin(criteria, conditions);
				// 查询条件
				prepareCondtion(criteria, conditions);
				// 设置分页得到分页结果
				Pager pager = pagerInfo(criteria, conditions);
				// 排序条件
				orderCondtion(criteria, conditions);
				// 得到查询结果
				List<T> list = criteria.list();
				// 返回结果集
				ResultList rl = new ResultList();
				rl.setList(list);
				rl.setPager(pager);
				return rl;
			}
		});
	}

	/**
	 * 设置多表连接
	 * 
	 * @author peak
	 * @param qbc
	 *            Hibernate Criteria
	 * @param conditions
	 *            多表连接的条件
	 */
	protected void linkJoin(Criteria qbc, Condition... conditions) {
		if (conditions != null) {
			for (Condition c : conditions) {
				if (c.getLinkCondition() != null) {
					for (int i = 0; i < c.getLinkCondition().length; i++) {
						qbc.createAlias(c.getLinkCondition()[i].getPropertyName(),
								c.getLinkCondition()[i].getPropertyAlias(), Criteria.LEFT_JOIN);
					}
				}
			}
		}
	}

	/**
	 * 设置分页 获取分页信息（总条数、总页数据）
	 * 
	 * @author peak
	 * @param qbc
	 *            Hibernate Criteria
	 * @param conditions
	 *            多表连接的条件
	 * @return 返回分页结果Pager
	 */
	protected Pager pagerInfo(Criteria qbc, Condition... conditions) {
		Pager pager = new Pager();
		if (conditions != null) {
			for (Condition c : conditions) {
				/** 拼接分页查询 */
				if (c.getPager() != null) {
					// 得到总条数
					qbc.setProjection(Projections.rowCount());
					pager.setRecordCount((Long) qbc.uniqueResult());
					qbc.setFirstResult((c.getPager().getPageIndex() - 1) * c.getPager().getPageSize());
					qbc.setMaxResults(c.getPager().getPageSize());
					// 清空投影查询的设置
					qbc.setProjection(null);
					qbc.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);
					// 计算总页数
					pager.setPageCount((pager.getRecordCount() % c.getPager().getPageSize() == 0)
							? (pager.getRecordCount() / c.getPager().getPageSize())
							: (pager.getRecordCount() / c.getPager().getPageSize() + 1));
					// 当前页数
					pager.setPageIndex(c.getPager().getPageIndex());
				}
			}
		}
		return pager;
	}

	/**
	 * 拼接查询条件
	 * 
	 * @author peak
	 * @param qbc
	 *            Hibernate Criteria
	 * @param conditions
	 *            多表连接的条件
	 */
	protected void prepareCondtion(Criteria qbc, Condition... conditions) {
		if (conditions != null) {
			for (Condition c : conditions) {
				if (c.getMyWheres() != null) {
					for (MyWhere w : c.getMyWheres()) {
						if (w.getBetweenValue() != null
								|| (w.getPropertyValue() != null) && (w.getPropertyName() != null)
								|| (w.getLhs() != null) && (w.getRhs() != null)) {
							switch (w.getCompare()) {
							case EQ:
								qbc.add(Restrictions.eq(w.getPropertyName(), w.getPropertyValue()));
								break;
							case LT:
								qbc.add(Restrictions.lt(w.getPropertyName(), w.getPropertyValue()));
								break;
							case GT:
								qbc.add(Restrictions.gt(w.getPropertyName(), w.getPropertyValue()));
								break;
							case LE:
								qbc.add(Restrictions.le(w.getPropertyName(), w.getPropertyValue()));
								break;
							case GE:
								qbc.add(Restrictions.ge(w.getPropertyName(), w.getPropertyValue()));
								break;
							case NE:
								qbc.add(Restrictions.ne(w.getPropertyName(), w.getPropertyValue()));
								break;
							case LIKE:
								qbc.add(Restrictions.like(w.getPropertyName(),
										w.getPropertyValue() == null ? "" : w.getPropertyValue().toString(),
										MatchMode.ANYWHERE));
								break;
							case BETWEEN:
								qbc.add(Restrictions.between(w.getPropertyName(), w.getBetweenValue()[0],
										w.getBetweenValue()[1]));
								break;
							case IN:
								qbc.add(Restrictions.in(w.getPropertyName(), (Object[]) w.getPropertyValue()));
								break;
							case AND:
								qbc.add(Restrictions.and(w.getLhs(), w.getRhs()));
								break;
							default:
								break;
							}
						}
					}
				}
			}
		}
	}

	/**
	 * 拼接排序语句
	 * 
	 * @author peak
	 * @param qbc
	 *            Hibernate Criteria
	 * @param conditions
	 *            多表连接的条件
	 */
	protected void orderCondtion(Criteria qbc, Condition... conditions) {
		if (conditions != null) {
			for (Condition c : conditions) {
				if (c.getOrder() != null) {
					switch (c.getOrder().getDirect()) {
					case ASC:
						qbc.addOrder(Order.asc(c.getOrder().getFieldName()));
						break;
					case DESC:
						qbc.addOrder(Order.desc(c.getOrder().getFieldName()));
						break;
					default:
						break;
					}
				}
			}
		}
	}

	/**
	 * 聚合函数设置
	 * 
	 * @author peak
	 * @param qbc
	 *            Hibernate Criteria
	 * @param conditions
	 *            多表连接的条件
	 * @return 返回分组属性别名集合
	 */
	protected List<String> functionSetting(Criteria qbc, Condition... conditions) {
		List<String> alList = null;
		if (conditions != null) {
			ProjectionList plist = Projections.projectionList();// 聚合函数集合
			alList = new ArrayList<String>();// 所用别名集合
			for (Condition c : conditions) {
				if (c.getGroupBy() != null) {
					if (c.getGroupBy().getGroup() != null) {
						for (Map.Entry<String, String> gb : c.getGroupBy().getGroup().entrySet()) {
							plist.add(Projections.groupProperty(gb.getKey()));// 设置分组属性
							alList.add(gb.getValue());// 设置分组别名
						}
					}
					if (c.getGroupBy().getFunctionDemands() != null) {
						for (FunctionDemand fd : c.getGroupBy().getFunctionDemands()) {
							alList.add(fd.getAlia());
							switch (fd.getFun()) {
							case AVG:
								plist.add(Projections.alias(Projections.avg(fd.getPro()), fd.getAlia()));
								break;
							case COUNT:
								plist.add(Projections.alias(Projections.count(fd.getPro()), fd.getAlia()));
								break;
							case MAX:
								plist.add(Projections.alias(Projections.max(fd.getPro()), fd.getAlia()));
								break;
							case MIN:
								plist.add(Projections.alias(Projections.min(fd.getPro()), fd.getAlia()));
								break;
							case SUM:
								plist.add(Projections.alias(Projections.sum(fd.getPro()), fd.getAlia()));
								break;
							default:
								break;
							}
						}
					}
				}
			}
			qbc.setProjection(plist);
		}
		return alList;
	}
}
