package system.entity;


public class ResultObject {
	private boolean success;
	private String msg;
	private Object obj;
	
	public ResultObject(Object data) {
		super();
		this.success=true;
		this.obj = data;
		this.msg="";
		
	}
	public ResultObject(boolean success, String msg, Object data) {
		super();
		this.success = success;
		this.msg = msg;
		this.obj = data;
	}
	
	
	
	

}
