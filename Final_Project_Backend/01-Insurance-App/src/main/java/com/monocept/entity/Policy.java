package com.monocept.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

@Entity
public class Policy {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="policy_id")
	private int policyId;
	
	@Column(unique = true)
	private String policyName;
	
	@Lob
	private byte[] imageData;
	
	@Column(name="new_comm")
	private double  newCommission;
	
	@Column(name="installment_comm")
	private double installmentCommission;
	
	private String description;
	
	@Enumerated(EnumType.STRING)
	private Status status;
	
	@ManyToOne
	@JoinColumn(name ="fk_insurance_id")
	@JsonIgnoreProperties(value= "policies")
	private InsurancePlan plan;
	
	@OneToOne(cascade = CascadeType.ALL)
    private PolicyDetails details;

//	@OneToMany
//	@JoinColumn(name="fk_policy_id",referencedColumnName = "policy_id")
//	private List<InsuranceAccount> accounts; 
	
	public InsurancePlan getPlan() {
		return plan;
	}

	public void setPlan(InsurancePlan plan) {
		this.plan = plan;
	}

	public PolicyDetails getDetails() {
		return details;
	}

	public void setDetails(PolicyDetails details) {
		this.details = details;
	}

	public Policy() {
		super();
	}

//	public Policy(int policyId, byte[] imageData, double newCommission, double installmentCommission,
//			String description, boolean status) {
//		this.policyId = policyId;
//		this.imageData = imageData;
//		this.newCommission = newCommission;
//		this.installmentCommission = installmentCommission;
//		this.description = description;
//		this.status = status;
//	}
	
	

	public int getPolicyId() {
		return policyId;
	}

	

	public Policy(int policyId, String policyName, byte[] imageData, double newCommission, double installmentCommission,
		String description, Status status, InsurancePlan plan, PolicyDetails details) {
	this.policyId = policyId;
	this.policyName = policyName;
	this.imageData = imageData;
	this.newCommission = newCommission;
	this.installmentCommission = installmentCommission;
	this.description = description;
	this.status = status;
	this.plan = plan;
	this.details = details;
//	this.accounts = accounts;
}

	public void setPolicyId(int policyId) {
		this.policyId = policyId;
	}

	public byte[] getImageData() {
		return imageData;
	}

	public void setImageData(byte[] imageData) {
		this.imageData = imageData;
	}

	public double getNewCommission() {
		return newCommission;
	}

	public void setNewCommission(double newCommission) {
		this.newCommission = newCommission;
	}

	public double getInstallmentCommission() {
		return installmentCommission;
	}

	public void setInstallmentCommission(double installmentCommission) {
		this.installmentCommission = installmentCommission;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

//	public List<InsuranceAccount> getAccounts() {
//		return accounts;
//	}
//
//	public void setAccounts(List<InsuranceAccount> accounts) {
//		this.accounts = accounts;
//	}

	public String getPolicyName() {
		return policyName;
	}

	public void setPolicyName(String policyName) {
		this.policyName = policyName;
	}
	
	
}
