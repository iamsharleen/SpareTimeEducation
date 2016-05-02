package system.common;

import java.sql.SQLException;

import java.sql.Connection;

public interface IReturningWork<T> {

	public T executeReturn(Connection connection)throws SQLException;
}
