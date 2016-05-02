package system.action;

import java.io.IOException;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.interceptor.ServletRequestAware;
import org.apache.struts2.interceptor.ServletResponseAware;
import org.apache.struts2.util.ServletContextAware;

import com.google.gson.Gson;
import com.opensymphony.xwork2.ActionSupport;

import system.common.RequestContext;
import system.entity.ResultObject;
import system.utils.JsonUtil;
/**
 * ����Action�ĸ���ӿ�
 * @author Administrator
 *
 */
public class BaseAction extends ActionSupport implements ServletContextAware, ServletResponseAware, ServletRequestAware{

	private HttpServletRequest req;
	private HttpServletResponse resp;
	private ServletContext ctx;

	
	private static ThreadLocal<RequestContext> contextThreadLocal=new ThreadLocal<RequestContext>();
	
	public Map getRequestMap(){
		Enumeration pNames=req.getParameterNames(); 
		Map map=new HashMap<>();
		while(pNames.hasMoreElements()){
			String name =(String) pNames.nextElement();
			String value=req.getParameter(name);
			map.put(name, value);
		}
		return map;
	}
	
	public void translateAndOutput(ResultObject result){
		
		if(null==result){
			result=new ResultObject(false,"error",null);
		}
		Gson gson=new Gson();
		String resultStr=gson.toJson(result);
		resp.setContentType("text/html;charset=utf-8");
		try {
			resp.getWriter().print(resultStr);
			resp.flushBuffer();
		} catch (IOException e) {
			e.printStackTrace();
		}
		
	}
	
	public void translateAndOutput(Map resultMap){
		Gson gson=new Gson();
		String resultStr=gson.toJson(resultMap);
		resp.setContentType("text/html;charset=utf-8");
		try {
			resp.getWriter().print(resultStr);
			resp.flushBuffer();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	@Override
	public void setServletRequest(HttpServletRequest req) {
		this.req = req;
		
	}

	@Override
	public void setServletResponse(HttpServletResponse resp) {
		this.resp = resp;
		
	}

	@Override
	public void setServletContext(ServletContext ctx) {
		this.ctx = ctx;
		
	}
	
	
	
}
