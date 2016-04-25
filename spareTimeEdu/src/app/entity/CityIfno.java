package app.entity;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="CITY_INFO")
public class CityIfno {
	
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
