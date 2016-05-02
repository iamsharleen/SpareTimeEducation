package system.utils;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import system.common.SQLHelper;


public class SqlUtil {

	public static List<Map>querySql(Connection conn,SQLHelper sqlHelper){
		List<Map> tempList=new ArrayList();
		
		PreparedStatement statement=null;
		ResultSet rs=null;
		
		try {
			statement=conn.prepareStatement(sqlHelper.getSql());
			Object[]params=sqlHelper.getParams();
			for(int i=0;i<params.length;i++){
				if(params[i] instanceof Date){
					statement.setTimestamp(i+1, new Timestamp(((Date)params[i]).getTime()));
				}else{
					statement.setObject(i+1, params[i]);
				}
			}
			rs=statement.executeQuery();
			
			ResultSetMetaData lineInfo=rs.getMetaData();
			int columnCount=lineInfo.getColumnCount();
			while(rs.next()){
				Map<String,String> map=new LinkedHashMap<String,String>();
				for(int i=1;i<columnCount;i++){
					String columnName=lineInfo.getColumnLabel(i);
					lineInfo.getColumnType(i);
					String columnType=lineInfo.getColumnTypeName(i);
					String columnValue=rs.getString(i);
					if("datetime".equalsIgnoreCase(columnType)){
						columnValue=mysqlDateTimeToString(columnValue);
					}else if("date".equalsIgnoreCase(columnType)){
						columnValue=mysqlDateToString(columnValue);
					}
					map.put(columnName, columnValue);
				}
				tempList.add(map);
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			closeResultSet(rs);
			closeStatement(statement);
		}
		return tempList;
	}
	
	private static void closeStatement(PreparedStatement statement) {
		if(null!=statement){
			try {
				statement.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		
	}

	private static void closeResultSet(ResultSet rs) {
		if(null!=rs){
			try {
				rs.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		
	}

	public static String mysqlDateTimeToString(String mysqlDate){
		if(mysqlDate==null){
			return "";
		}
		return mysqlDate.substring(0,19);
	}
	
	public static String mysqlDateToString(String mysqlDate){
		if(mysqlDate==null){
			return "";
		}
		return mysqlDate.substring(0,10);
	}
}
