package system.entity;

import java.util.List;

/**
 * 查询结果集
 * @author peak * */
public class ResultList {
    /**返回的查询结果集合*/
    private List list;
   
    /**返回分页结果*/
    private Pager pager;
   
    public List getList() {
        return list;
    }
    public void setList(List list) {
        this.list = list;
    }
    public Pager getPager() {
        return pager;
    }
    public void setPager(Pager pager) {
        this.pager = pager;
    }
    public ResultList(List list, Pager pager) {
        super();
        this.list = list;
        this.pager = pager;
    }
    public ResultList() {
        super();
    }
 
}
