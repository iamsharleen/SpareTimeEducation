package app.entity;

import javax.persistence.Entity;
import javax.persistence.Table;

import system.entity.BaseEntity;
@Entity
@Table(name="COURSE_TYPE_CODE")
public class CourseTypeCode extends BaseEntity {

	private String CODE;
	private String NAME;
	public String getCODE() {
		return CODE;
	}
	public String getNAME() {
		return NAME;
	}
	public void setCODE(String cODE) {
		CODE = cODE;
	}
	public void setNAME(String nAME) {
		NAME = nAME;
	}
	
	
}
