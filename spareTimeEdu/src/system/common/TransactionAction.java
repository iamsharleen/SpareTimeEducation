package system.common;

public interface TransactionAction {
	/**
	 * 获取动作参数
	 * @return
	 */
	Object[] getParams();
	
	/**
	 * 执行事务动作
	 * @param objs  动作参数
	 * @return 事务动作
	 */
	Object doAction(Object[] objs);
}
