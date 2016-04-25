package app.entity;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="DISTRICT_INFO")
public class DistrictInfo {
	
	private String ID;
	private String CODE;
	private String NAME;
	private String CITY_CODE;
	
	
	public String getID() {
		return ID;
	}
	public String getCODE() {
		return CODE;
	}
	public String getNAME() {
		return NAME;
	}
	public String getCITY_CODE() {
		return CITY_CODE;
	}
	public void setID(String iD) {
		ID = iD;
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
