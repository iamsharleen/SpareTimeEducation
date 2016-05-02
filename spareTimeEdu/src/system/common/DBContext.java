package system.common;

public class DBContext {
	private static ThreadLocal<DBContext> dbContextLocal=new ThreadLocal<>();
	
	private String dataSourceTableName;
	private String dataSourceName;
	private String dataSourceUrl;
	private boolean dataRead=true;
	private int sqlCount;
	private boolean isInJTA=false;
	private boolean isLocalSource=false;
	private boolean isInLoacal=false;
	private boolean readDatabase=false;
	public String getDataSourceTableName() {
		return dataSourceTableName;
	}
	public String getDataSourceName() {
		return dataSourceName;
	}
	public String getDataSourceUrl() {
		return dataSourceUrl;
	}
	public boolean isDataRead() {
		return dataRead;
	}
	public int getSqlCount() {
		return sqlCount;
	}
	public boolean isInJTA() {
		return isInJTA;
	}
	public boolean isLocalSource() {
		return isLocalSource;
	}
	public boolean isInLoacal() {
		return isInLoacal;
	}
	public boolean isReadDatabase() {
		return readDatabase;
	}
	public void setDataSourceTableName(String dataSourceTableName) {
		this.dataSourceTableName = dataSourceTableName;
	}
	public void setDataSourceName(String dataSourceName) {
		this.dataSourceName = dataSourceName;
	}
	public void setDataSourceUrl(String dataSourceUrl) {
		this.dataSourceUrl = dataSourceUrl;
	}
	public void setDataRead(boolean dataRead) {
		this.dataRead = dataRead;
	}
	public void setSqlCount(int sqlCount) {
		this.sqlCount = sqlCount;
	}
	public void setInJTA(boolean isInJTA) {
		this.isInJTA = isInJTA;
	}
	public void setLocalSource(boolean isLocalSource) {
		this.isLocalSource = isLocalSource;
	}
	public void setInLoacal(boolean isInLoacal) {
		this.isInLoacal = isInLoacal;
	}
	public void setReadDatabase(boolean readDatabase) {
		this.readDatabase = readDatabase;
	}
	
	public static void setDbContext(String serveName){
		DBContext dbContext=new DBContext();
		dbContextLocal.set(dbContext);
		String dbName=serveName;
		String dbServerName=serveName;
		boolean isLocalSource=true;
	}
	public DBContext() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public static DBContext getContext(){
		return dbContextLocal.get();
	}
	
}
