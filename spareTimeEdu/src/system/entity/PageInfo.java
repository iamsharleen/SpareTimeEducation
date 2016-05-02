package system.entity;

import org.codehaus.jackson.annotate.JsonIgnore;

public final class PageInfo {
	private int page;
	private int pageSize;
	private long count;

	public PageInfo() {
		super();
	}
	public PageInfo(int page, int pageSize) {
		super();
		this.page = page;
		this.pageSize = pageSize;
	}
	public int getPage() {
		return page;
	}
	public int getPageSize() {
		return pageSize;
	}
	public long getCount() {
		return count;
	}
	public void setPage(int page) {
		this.page = page;
	}
	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}
	public void setCount(long count) {
		this.count = count;
	}
	@JsonIgnore
	public int getFirstNum(){
		return (getPage()-1)*getPageSize();
	}
	@JsonIgnore
	public int getMaxNum(){
		return getPageSize();
	}
	
}
