package system.action;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;

import system.common.RequestContext;

public abstract class BaseAction2 extends ActionSupport implements ModelDriven{

	public HttpServletRequest getRequest(){
		return RequestContext.getContext().getRequest();
	}
	
	public HttpServletResponse getResponse(){
		return RequestContext.getContext().getReponse();
	}
	
	public HttpSession getSession(){
		return RequestContext.getContext().getSession();
	}
	
	public Map getRequestMap(){
		return RequestContext.getContext().getParamMap();
	}
	
	
	
	

}
