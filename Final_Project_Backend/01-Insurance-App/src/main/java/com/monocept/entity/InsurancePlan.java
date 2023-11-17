package com.monocept.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;

@Entity
public class InsurancePlan {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="insurance_id")
	private int insuranceId;
	
	@Column(name="insurance_type",unique = true)
	private String insuranceType;
	
	@Enumerated(EnumType.STRING)
	private Status status;
	
	@OneToMany
	@JoinColumn(name="fk_insurance_id",referencedColumnName = "insurance_id")
	@JsonIgnoreProperties(value="plan")
	List<Policy> policies;

	public InsurancePlan() {
		super();
	}

	

	public InsurancePlan(int insuranceId, String insuranceType, Status status, List<Policy> policies) {
		super();
		this.insuranceId = insuranceId;
		this.insuranceType = insuranceType;
		this.status = status;
		this.policies = policies;
	}



	public int getInsuranceId() {
		return insuranceId;
	}

	public void setInsuranceId(int insuranceId) {
		this.insuranceId = insuranceId;
	}

	public String getInsuranceType() {
		return insuranceType;
	}

	public void setInsuranceType(String insuranceType) {
		this.insuranceType = insuranceType;
	}

	

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

	public List<Policy> getPolicies() {
		return policies;
	}

	public void setPolicies(List<Policy> policies) {
		this.policies = policies;
	}
	
	
	
}
