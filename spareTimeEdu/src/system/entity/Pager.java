package system.entity;

public class Pager {
    /**分页的当前页数*/
    private int pageIndex=1;
   
    /**每页页大小*/
    private int pageSize=10;
   
    /**总页数*/
    private Long pageCount;
   
    /**查询总条数*/
    private Long recordCount;

	public int getPageIndex() {
		return pageIndex;
	}

	public int getPageSize() {
		return pageSize;
	}

	public Long getPageCount() {
		return pageCount;
	}

	public Long getRecordCount() {
		return recordCount;
	}

	public void setPageIndex(int pageIndex) {
		this.pageIndex = pageIndex;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}

	public void setPageCount(Long pageCount) {
		this.pageCount = pageCount;
	}

	public void setRecordCount(Long recordCount) {
		this.recordCount = recordCount;
	}
   
   
   }
