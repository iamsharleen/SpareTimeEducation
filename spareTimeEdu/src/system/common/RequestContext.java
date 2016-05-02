package system.common;

import java.util.Enumeration;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.sun.jmx.snmp.ThreadContext;

import system.entity.PageInfo;

public final class RequestContext {
	private static ThreadLocal<RequestContext> contextThreadLocal=new ThreadLocal<RequestContext>();
	
	private RequestContext(){
		
	}
	
	public static RequestContext getContext(){
		return contextThreadLocal.get();
	}
	
	public static RequestContext getThreadContext(){
		RequestContext requestContext=contextThreadLocal.get();
		if(requestContext==null){
			requestContext=new RequestContext();
			contextThreadLocal.set(requestContext);
		}
		return contextThreadLocal.get();
	}
	
	private static HashSet<ThreadContext> set=new HashSet();
	public static void register(ThreadContext threadContext){
		synchronized (set) {
			set.add(threadContext);
		}
	}
	
	private HttpServletRequest request;
	private HttpServletResponse reponse;
	private HttpSession session;
	private PageInfo pageInfo;
	private Map paramMap;
	
	public static void setActionContext(HttpServletRequest req,HttpServletResponse reponse){
		RequestContext requestContext=new RequestContext();
		contextThreadLocal.set(requestContext);
		requestContext.setRequest(req);
		requestContext.setReponse(reponse);
		requestContext.setPageInfo();
		requestContext.setSession(req.getSession());
	}
	
	
	
	public Map getParamMap() {
		if(paramMap==null){
			Enumeration pNames=request.getParameterNames(); 
			while(pNames.hasMoreElements()){
				String name =(String) pNames.nextElement();
				String value=request.getParameter(name);
				paramMap.put(name, value);
			}
		}
		return paramMap;
	}

	public void setParamMap(Map paramMap) {
		this.paramMap = paramMap;
	}

	public static void remove(){
		contextThreadLocal.remove();
	}
	public HttpServletRequest getRequest() {
		return request;
	}

	public HttpServletResponse getReponse() {
		return reponse;
	}

	public HttpSession getSession() {
		return session;
	}

	public PageInfo getPageInfo() {
		return pageInfo;
	}

	public void setRequest(HttpServletRequest request) {
		this.request = request;
	}

	public void setReponse(HttpServletResponse reponse) {
		this.reponse = reponse;
	}

	public void setSession(HttpSession session) {
		this.session = session;
	}

	public void setPageInfo() {
		String pageStr=request.getParameter("page");
		String pagesizeStr=request.getParameter("pageSize");
		if(pageStr==null||pagesizeStr==null){
			pageInfo=null;
			return;
		}
		PageInfo pageInfo=new PageInfo();
		int page=Integer.parseInt(pageStr);
		int pageSize=Integer.parseInt(pagesizeStr);
		pageInfo.setPage(page);
		pageInfo.setPageSize(pageSize);
		this.pageInfo=pageInfo;
	}
	
	
}
