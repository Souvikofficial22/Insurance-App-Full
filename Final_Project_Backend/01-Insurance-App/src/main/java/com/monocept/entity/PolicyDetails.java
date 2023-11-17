package com.monocept.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

@Entity
public class PolicyDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="detail_id")
	private int detailId;
	
	@Column(name="mini_amount")
	private double miniAmount;
	
	@Column(name="maxi_amount")
	private double maxiAmount;
	
	@Column(name="mini_time")
	private int miniInvestmentTime;
	
	@Column(name="maxi_time")
	private int maxiInvestmentTime;
	
	@Column(name="mini_age")
	private int miniAge;
	
	@Column(name="maxi_age")
	private int maxiAge;

	private int profit;

	public PolicyDetails() {
		super();
	}

	public PolicyDetails(int detailId, double miniAmount, double maxiAmount, int miniInvestmentTime,
			int maxiInvestmentTime, int miniAge, int maxiAge, int profit) {
		super();
		this.detailId = detailId;
		this.miniAmount = miniAmount;
		this.maxiAmount = maxiAmount;
		this.miniInvestmentTime = miniInvestmentTime;
		this.maxiInvestmentTime = maxiInvestmentTime;
		this.miniAge = miniAge;
		this.maxiAge = maxiAge;
		this.profit = profit;
	}

	public int getDetailId() {
		return detailId;
	}

	public void setDetailId(int detailId) {
		this.detailId = detailId;
	}

	public double getMiniAmount() {
		return miniAmount;
	}

	public void setMiniAmount(double miniAmount) {
		this.miniAmount = miniAmount;
	}

	public double getMaxiAmount() {
		return maxiAmount;
	}

	public void setMaxiAmount(double maxiAmount) {
		this.maxiAmount = maxiAmount;
	}

	public int getMiniInvestmentTime() {
		return miniInvestmentTime;
	}

	public void setMiniInvestmentTime(int miniInvestmentTime) {
		this.miniInvestmentTime = miniInvestmentTime;
	}

	public int getMaxiInvestmentTime() {
		return maxiInvestmentTime;
	}

	public void setMaxiInvestmentTime(int maxiInvestmentTime) {
		this.maxiInvestmentTime = maxiInvestmentTime;
	}

	public int getMiniAge() {
		return miniAge;
	}

	public void setMiniAge(int miniAge) {
		this.miniAge = miniAge;
	}

	public int getMaxiAge() {
		return maxiAge;
	}

	public void setMaxiAge(int maxiAge) {
		this.maxiAge = maxiAge;
	}

	public int getProfit() {
		return profit;
	}

	public void setProfit(int profit) {
		this.profit = profit;
	}
	
	
	
	
}
