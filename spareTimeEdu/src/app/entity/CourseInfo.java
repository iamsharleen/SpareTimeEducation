package app.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import system.entity.BaseEntity;

@Entity
@Table(name="COURSE_INFO")
public class CourseInfo extends BaseEntity{
	private String CODE;
	private String STATUS;
	private String COURSE_TYPE_CODE;
	private String SUBJECT;
	private Date START_TIME;
	private Date END_TIME;
	private Double DURATEION;
	private String DURATION_UNIT;
	private String DATE_NOTE;
	private String STUDENT_TYPE;
	private String CITY_ID;
	private String ADDRESS;
	private String ADDRESS_NOTE;
	private Double PRICE;
	private Integer MAX_ATTENDEES;
	private String KEYWORD;
	private String BRIEF;
	private String CONTENT;
	private String TEACH_METHOD;
	private String POSTER_ID;
	private String TEACHER_ID;
	private String TEACHER_NAME;
	private Integer SEQ_NUMBER;
	private Date CREATE_TIME;
	private Date LAST_EDIT_TIME;
	
	
	public String getCODE() {
		return CODE;
	}
	public String getSTATUS() {
		return STATUS;
	}
	public String getCOURSE_TYPE_CODE() {
		return COURSE_TYPE_CODE;
	}
	public String getSUBJECT() {
		return SUBJECT;
	}
	public Date getSTART_TIME() {
		return START_TIME;
	}
	public Date getEND_TIME() {
		return END_TIME;
	}
	public Double getDURATEION() {
		return DURATEION;
	}
	public String getDURATION_UNIT() {
		return DURATION_UNIT;
	}
	public String getDATE_NOTE() {
		return DATE_NOTE;
	}
	public String getSTUDENT_TYPE() {
		return STUDENT_TYPE;
	}
	public String getCITY_ID() {
		return CITY_ID;
	}
	public String getADDRESS() {
		return ADDRESS;
	}
	public String getADDRESS_NOTE() {
		return ADDRESS_NOTE;
	}
	public Double getPRICE() {
		return PRICE;
	}
	public Integer getMAX_ATTENDEES() {
		return MAX_ATTENDEES;
	}
	public String getKEYWORD() {
		return KEYWORD;
	}
	public String getBRIEF() {
		return BRIEF;
	}
	public String getCONTENT() {
		return CONTENT;
	}
	public String getTEACH_METHOD() {
		return TEACH_METHOD;
	}
	public String getPOSTER_ID() {
		return POSTER_ID;
	}
	public String getTEACHER_ID() {
		return TEACHER_ID;
	}
	public String getTEACHER_NAME() {
		return TEACHER_NAME;
	}
	public Integer getSEQ_NUMBER() {
		return SEQ_NUMBER;
	}
	public Date getCREATE_TIME() {
		return CREATE_TIME;
	}
	public Date getLAST_EDIT_TIME() {
		return LAST_EDIT_TIME;
	}
	public void setCODE(String cODE) {
		CODE = cODE;
	}
	public void setSTATUS(String sTATUS) {
		STATUS = sTATUS;
	}
	public void setCOURSE_TYPE_CODE(String cOURSE_TYPE_CODE) {
		COURSE_TYPE_CODE = cOURSE_TYPE_CODE;
	}
	public void setSUBJECT(String sUBJECT) {
		SUBJECT = sUBJECT;
	}
	public void setSTART_TIME(Date sTART_TIME) {
		START_TIME = sTART_TIME;
	}
	public void setEND_TIME(Date eND_TIME) {
		END_TIME = eND_TIME;
	}
	public void setDURATEION(Double dURATEION) {
		DURATEION = dURATEION;
	}
	public void setDURATION_UNIT(String dURATION_UNIT) {
		DURATION_UNIT = dURATION_UNIT;
	}
	public void setDATE_NOTE(String dATE_NOTE) {
		DATE_NOTE = dATE_NOTE;
	}
	public void setSTUDENT_TYPE(String sTUDENT_TYPE) {
		STUDENT_TYPE = sTUDENT_TYPE;
	}
	public void setCITY_ID(String cITY_ID) {
		CITY_ID = cITY_ID;
	}
	public void setADDRESS(String aDDRESS) {
		ADDRESS = aDDRESS;
	}
	public void setADDRESS_NOTE(String aDDRESS_NOTE) {
		ADDRESS_NOTE = aDDRESS_NOTE;
	}
	public void setPRICE(Double pRICE) {
		PRICE = pRICE;
	}
	public void setMAX_ATTENDEES(Integer mAX_ATTENDEES) {
		MAX_ATTENDEES = mAX_ATTENDEES;
	}
	public void setKEYWORD(String kEYWORD) {
		KEYWORD = kEYWORD;
	}
	public void setBRIEF(String bRIEF) {
		BRIEF = bRIEF;
	}
	public void setCONTENT(String cONTENT) {
		CONTENT = cONTENT;
	}
	public void setTEACH_METHOD(String tEACH_METHOD) {
		TEACH_METHOD = tEACH_METHOD;
	}
	public void setPOSTER_ID(String pOSTER_ID) {
		POSTER_ID = pOSTER_ID;
	}
	public void setTEACHER_ID(String tEACHER_ID) {
		TEACHER_ID = tEACHER_ID;
	}
	public void setTEACHER_NAME(String tEACHER_NAME) {
		TEACHER_NAME = tEACHER_NAME;
	}
	public void setSEQ_NUMBER(Integer sEQ_NUMBER) {
		SEQ_NUMBER = sEQ_NUMBER;
	}
	public void setCREATE_TIME(Date cREATE_TIME) {
		CREATE_TIME = cREATE_TIME;
	}
	public void setLAST_EDIT_TIME(Date lAST_EDIT_TIME) {
		LAST_EDIT_TIME = lAST_EDIT_TIME;
	}
	
	
	
	
	
	
}
