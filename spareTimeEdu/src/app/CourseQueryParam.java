package app;

public class CourseQueryParam {
	
	private String title;
	private String type;
	private String keyword;
	private Double priceMin;
	private Double priceMax;
	private String orderBy;
	private boolean isDesc;
	
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getType() {
		return type;
	}
	public String getKeyword() {
		return keyword;
	}
	public Double getPriceMin() {
		return priceMin;
	}
	public Double getPriceMax() {
		return priceMax;
	}
	public String getOrderBy() {
		return orderBy;
	}
	public boolean isDesc() {
		return isDesc;
	}
	public void setType(String type) {
		this.type = type;
	}
	public void setKeyword(String keyword) {
		this.keyword = keyword;
	}
	public void setPriceMin(Double priceMin) {
		this.priceMin = priceMin;
	}
	public void setPriceMax(Double priceMax) {
		this.priceMax = priceMax;
	}
	public void setOrderBy(String orderBy) {
		this.orderBy = orderBy;
	}
	public void setDesc(boolean isDesc) {
		this.isDesc = isDesc;
	}
	
	

}
