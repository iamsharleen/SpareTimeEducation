package system.common;

import system.entity.PageInfo;

public final class RequestContext {
	private static ThreadLocal<PageInfo> pageInfo = new ThreadLocal<PageInfo>();
	
	
	public static PageInfo getPageInfo() {
		return pageInfo.get();
	}
	
	public static void setPageInfo(PageInfo info) {
		if (pageInfo == null || pageInfo == null) {
			return;
		}
		pageInfo.set(info);
	}
	public static void removePageIno(){
		pageInfo.remove();
	}

}
