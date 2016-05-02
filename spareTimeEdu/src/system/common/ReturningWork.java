package system.common;

import java.sql.Connection;
import java.sql.SQLException;

import org.hibernate.jdbc.Work;

public abstract class ReturningWork<T> implements Work,IReturningWork<T> {

	private T result;
	@Override
	public void execute(Connection connection) throws SQLException {
		result=executeReturn(connection);
	}
	public T getResult() {
		return result;
	}
	public void setResult(T result) {
		this.result = result;
	}
	
	


}
