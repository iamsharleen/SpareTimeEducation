package app.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Table;

import system.entity.BaseEntity;

@Entity
@Table(name="KEYWORD_CONFIG")
public class KeywordConfig extends BaseEntity{
	
	private String KEYWORD;
	private String KEYWORD_TYPE;
	private String USE_FLAG;
	private Date CREATE_TIME;
	private Date LAST_EDIT_TIME;
	public String getKEYWORD() {
		return KEYWORD;
	}
	public String getKEYWORD_TYPE() {
		return KEYWORD_TYPE;
	}
	public String getUSE_FLAG() {
		return USE_FLAG;
	}
	public Date getCREATE_TIME() {
		return CREATE_TIME;
	}
	public Date getLAST_EDIT_TIME() {
		return LAST_EDIT_TIME;
	}
	public void setKEYWORD(String kEYWORD) {
		KEYWORD = kEYWORD;
	}
	public void setKEYWORD_TYPE(String kEYWORD_TYPE) {
		KEYWORD_TYPE = kEYWORD_TYPE;
	}
	public void setUSE_FLAG(String uSE_FLAG) {
		USE_FLAG = uSE_FLAG;
	}
	public void setCREATE_TIME(Date cREATE_TIME) {
		CREATE_TIME = cREATE_TIME;
	}
	public void setLAST_EDIT_TIME(Date lAST_EDIT_TIME) {
		LAST_EDIT_TIME = lAST_EDIT_TIME;
	}
	
	
	
	

}
