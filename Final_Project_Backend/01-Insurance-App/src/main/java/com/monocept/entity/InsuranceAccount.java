package com.monocept.entity;

import java.sql.Date;
import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class InsuranceAccount {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "account_number")
	private int accountNumber;

	@Column(name = "insurance_type")
	private String insuranceType;

	@Column(name = "insurance_scheme")
	private String insuranceScheme;

	@Column(name = "date_created")
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
	private Date dateCreated;

	@Column(name = "maturity_date")
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
	private Date maturityDate;

	@Column(name = "premium_type")
	private String premiumType;

	@Column(name = "total_premium_amount")
	private double totalPremiumAmount;

	@Column(name = "profit_ratio")
	private double profitRatio;

	@Column(name = "sum_assured")
	private double sumAssured;

	// insurance account has only one customer
	@ManyToOne
	@JoinColumn(name = "fk_customer_id")
	@JsonIgnoreProperties(value="insuranceAccounts")
	private Customer customer;
	
	@JsonIgnoreProperties(value = "insuranceAccount")
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "fk_account_number", referencedColumnName = "account_number")
	private Set<PolicyPayment> policyPayments = new HashSet<PolicyPayment>();

	public InsuranceAccount() {

	}

	public InsuranceAccount(String insuranceType, String insuranceScheme, Date dateCreated, Date maturityDate,
			String premiumType, double totalPremiumAmount, double profitRatio, double sumAssured) {
		super();
		this.insuranceType = insuranceType;
		this.insuranceScheme = insuranceScheme;
		this.dateCreated = dateCreated;
		this.maturityDate = maturityDate;
		this.premiumType = premiumType;
		this.totalPremiumAmount = totalPremiumAmount;
		this.profitRatio = profitRatio;
		this.sumAssured = sumAssured;
	}

	public InsuranceAccount(int accountNumber, String insuranceType, String insuranceScheme, Date dateCreated,
			Date maturityDate, String premiumType, double totalPremiumAmount, double profitRatio, double sumAssured,
			Customer customer, Set<PolicyPayment> policyPayments) {
		super();
		this.accountNumber = accountNumber;
		this.insuranceType = insuranceType;
		this.insuranceScheme = insuranceScheme;
		this.dateCreated = dateCreated;
		this.maturityDate = maturityDate;
		this.premiumType = premiumType;
		this.totalPremiumAmount = totalPremiumAmount;
		this.profitRatio = profitRatio;
		this.sumAssured = sumAssured;
		this.customer = customer;
		this.policyPayments = policyPayments;
	}

	public Set<PolicyPayment> getPolicyPayments() {
		return policyPayments;
	}

	public void setPolicyPayments(Set<PolicyPayment> policyPayments) {
		this.policyPayments = policyPayments;
	}

	public int getAccountNumber() {
		return accountNumber;
	}

	public void setAccountNumber(int accountNumber) {
		this.accountNumber = accountNumber;
	}

	public String getInsuranceType() {
		return insuranceType;
	}

	public void setInsuranceType(String insuranceType) {
		this.insuranceType = insuranceType;
	}

	public String getInsuranceScheme() {
		return insuranceScheme;
	}

	public void setInsuranceScheme(String insuranceScheme) {
		this.insuranceScheme = insuranceScheme;
	}

	public Date getDateCreated() {
		return dateCreated;
	}

	public void setDateCreated(Date dateCreated) {
		this.dateCreated = dateCreated;
	}

	public Date getMaturityDate() {
		return maturityDate;
	}

	public void setMaturityDate(Date maturityDate) {
		this.maturityDate = maturityDate;
	}

	public String getPremiumType() {
		return premiumType;
	}

	public void setPremiumType(String premiumType) {
		this.premiumType = premiumType;
	}

	public double getTotalPremiumAmount() {
		return totalPremiumAmount;
	}

	public void setTotalPremiumAmount(double totalPremiumAmount) {
		this.totalPremiumAmount = totalPremiumAmount;
	}

	public double getProfitRatio() {
		return profitRatio;
	}

	public void setProfitRatio(double profitRatio) {
		this.profitRatio = profitRatio;
	}

	public double getSumAssured() {
		return sumAssured;
	}

	public void setSumAssured(double sumAssured) {
		this.sumAssured = sumAssured;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

}
