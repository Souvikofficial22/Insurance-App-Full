package com.monocept.entity;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class CommissionRecord {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int commissionId;
	
	private int insuranceAcc;
	
	private Date date;
	
	private String customer;
	
	private String policyName;
	
	private double commAmount;
	
	@ManyToOne
	@JoinColumn(name="fk_agent_id")
	private Agent agent;

	public CommissionRecord() {
		super();
	}

	public CommissionRecord(int commissionId, int insuranceAcc, Date date, String customer, String policyName,
			double commAmount, Agent agent) {
		super();
		this.commissionId = commissionId;
		this.insuranceAcc = insuranceAcc;
		this.date = date;
		this.customer = customer;
		this.policyName = policyName;
		this.commAmount = commAmount;
		this.agent = agent;
	}

	public int getCommissionId() {
		return commissionId;
	}

	public void setCommissionId(int commissionId) {
		this.commissionId = commissionId;
	}

	public int getInsuranceAcc() {
		return insuranceAcc;
	}

	public void setInsuranceAcc(int insuranceAcc) {
		this.insuranceAcc = insuranceAcc;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getCustomer() {
		return customer;
	}

	public void setCustomer(String customer) {
		this.customer = customer;
	}

	public String getPolicyName() {
		return policyName;
	}

	public void setPolicyName(String policyName) {
		this.policyName = policyName;
	}

	public double getCommAmount() {
		return commAmount;
	}

	public void setCommAmount(double commAmount) {
		this.commAmount = commAmount;
	}

	public Agent getAgent() {
		return agent;
	}

	public void setAgent(Agent agent) {
		this.agent = agent;
	}
	
//	233
}
