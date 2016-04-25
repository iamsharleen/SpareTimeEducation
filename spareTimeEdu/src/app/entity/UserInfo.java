package app.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Table;

import system.entity.BaseEntity;

@Entity
@Table(name="USER_INFO")
public class UserInfo extends BaseEntity {

	private String CODE;
	private String USER_TYPE;
	private String PHONE_NUMBER;
	private String EMAIL;
	private String PASSWORD;
	private String NICK_NAME;
	private String WECHAT_ID;
	private String NAME;
	private String CITY_ID;
	private String USER_PROFILE;
	private Date LAST_LOGIN_TIME;
	private Date CREATE_TIME;
	private Date LAST_EDIT_TIME;
	public String getCODE() {
		return CODE;
	}
	public String getUSER_TYPE() {
		return USER_TYPE;
	}
	public String getPHONE_NUMBER() {
		return PHONE_NUMBER;
	}
	public String getEMAIL() {
		return EMAIL;
	}
	public String getPASSWORD() {
		return PASSWORD;
	}
	public String getNICK_NAME() {
		return NICK_NAME;
	}
	public String getWECHAT_ID() {
		return WECHAT_ID;
	}
	public String getNAME() {
		return NAME;
	}
	public String getCITY_ID() {
		return CITY_ID;
	}
	public String getUSER_PROFILE() {
		return USER_PROFILE;
	}

	public void setCODE(String cODE) {
		CODE = cODE;
	}
	public void setUSER_TYPE(String uSER_TYPE) {
		USER_TYPE = uSER_TYPE;
	}
	public void setPHONE_NUMBER(String pHONE_NUMBER) {
		PHONE_NUMBER = pHONE_NUMBER;
	}
	public void setEMAIL(String eMAIL) {
		EMAIL = eMAIL;
	}
	public void setPASSWORD(String pASSWORD) {
		PASSWORD = pASSWORD;
	}
	public void setNICK_NAME(String nICK_NAME) {
		NICK_NAME = nICK_NAME;
	}
	public void setWECHAT_ID(String wECHAT_ID) {
		WECHAT_ID = wECHAT_ID;
	}
	public void setNAME(String nAME) {
		NAME = nAME;
	}
	public void setCITY_ID(String cITY_ID) {
		CITY_ID = cITY_ID;
	}
	public void setUSER_PROFILE(String uSER_PROFILE) {
		USER_PROFILE = uSER_PROFILE;
	}
	public Date getLAST_LOGIN_TIME() {
		return LAST_LOGIN_TIME;
	}
	public Date getCREATE_TIME() {
		return CREATE_TIME;
	}
	public Date getLAST_EDIT_TIME() {
		return LAST_EDIT_TIME;
	}
	public void setLAST_LOGIN_TIME(Date lAST_LOGIN_TIME) {
		LAST_LOGIN_TIME = lAST_LOGIN_TIME;
	}
	public void setCREATE_TIME(Date cREATE_TIME) {
		CREATE_TIME = cREATE_TIME;
	}
	public void setLAST_EDIT_TIME(Date lAST_EDIT_TIME) {
		LAST_EDIT_TIME = lAST_EDIT_TIME;
	}

	
	
}
