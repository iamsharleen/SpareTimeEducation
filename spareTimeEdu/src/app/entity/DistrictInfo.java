package app.entity;

import javax.persistence.Entity;
import javax.persistence.Table;

import system.entity.BaseEntity;

@Entity
@Table(name="DISTRICT_INFO")
public class DistrictInfo extends BaseEntity {
	
	private String CODE;
	private String NAME;
	private String CITY_CODE;
	
	public String getNAME() {
		return NAME;
	}
	public String getCITY_CODE() {
		return CITY_CODE;
	}
	
	public String getCODE() {
		return CODE;
	}
	public void setCODE(String cODE) {
		CODE = cODE;
	}
	public void setNAME(String nAME) {
		NAME = nAME;
	}
	public void setCITY_CODE(String cITY_CODE) {
		CITY_CODE = cITY_CODE;
	}
	
	

}
