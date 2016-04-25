package app.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Table;

import system.entity.BaseEntity;

@Entity
@Table(name="TEACHER_INFO")
public class TeacherInfo extends BaseEntity {

	private String USER_INFO_ID;
	private String ROLE;
	private String ORG;
	private String TITLE;
	private Integer CAREER_LENGTH;
	private String SERVICE_AREA;
	private Date IDENTIFIED_TIME;
	public String getUSER_INFO_ID() {
		return USER_INFO_ID;
	}
	public String getROLE() {
		return ROLE;
	}
	public String getORG() {
		return ORG;
	}
	public String getTITLE() {
		return TITLE;
	}
	public Integer getCAREER_LENGTH() {
		return CAREER_LENGTH;
	}
	public String getSERVICE_AREA() {
		return SERVICE_AREA;
	}
	public Date getIDENTIFIED_TIME() {
		return IDENTIFIED_TIME;
	}
	public void setUSER_INFO_ID(String uSER_INFO_ID) {
		USER_INFO_ID = uSER_INFO_ID;
	}
	public void setROLE(String rOLE) {
		ROLE = rOLE;
	}
	public void setORG(String oRG) {
		ORG = oRG;
	}
	public void setTITLE(String tITLE) {
		TITLE = tITLE;
	}
	public void setCAREER_LENGTH(Integer cAREER_LENGTH) {
		CAREER_LENGTH = cAREER_LENGTH;
	}
	public void setSERVICE_AREA(String sERVICE_AREA) {
		SERVICE_AREA = sERVICE_AREA;
	}
	public void setIDENTIFIED_TIME(Date iDENTIFIED_TIME) {
		IDENTIFIED_TIME = iDENTIFIED_TIME;
	}
	
	
}
