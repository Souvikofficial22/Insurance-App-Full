package com.monocept.entity;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class PolicyPayment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "payment_id")
	private int paymentId;

	@Column(name = "insurance_acc_no")
	private int insuranceAccNo;

	@Column(name = "customer_name")
	private String customerName;

	@Column(name = "paid_amount")
	private double paidAmount;


	@Column(name = "total_amount")
	private double totalAmount;

	
	@Column(name = "paid_date")
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
	private Date paidDate;

	@Column(name = "transfer_type")
	private String transferType;

	private String status;
	
	// policy payments has only one insurance account
		@ManyToOne
		@JoinColumn(name = "fk_account_number")
		@JsonIgnore
		private InsuranceAccount insurAccount;

	public PolicyPayment() {

	}

	public PolicyPayment(int insuranceAccNo, String customerName, double paidAmount,
			double totalAmount, Date paidDate, String transferType, String status) {
		super();
		this.insuranceAccNo = insuranceAccNo;
		this.customerName = customerName;
		this.paidAmount = paidAmount;
		this.totalAmount = totalAmount;
		this.paidDate = paidDate;
		this.transferType = transferType;
		this.status = status;
	}

	public PolicyPayment(int paymentId, int insuranceAccNo, String customerName, double paidAmount, double totalAmount,
			Date paidDate, String transferType, String status, InsuranceAccount insurAccount) {
		super();
		this.paymentId = paymentId;
		this.insuranceAccNo = insuranceAccNo;
		this.customerName = customerName;
		this.paidAmount = paidAmount;
		this.totalAmount = totalAmount;
		this.paidDate = paidDate;
		this.transferType = transferType;
		this.status = status;
		this.insurAccount = insurAccount;
	}

	
	public InsuranceAccount getInsurAccount() {
		return insurAccount;
	}

	public void setInsurAccount(InsuranceAccount insurAccount) {
		this.insurAccount = insurAccount;
	}

	public int getPaymentId() {
		return paymentId;
	}

	public void setPaymentId(int paymentId) {
		this.paymentId = paymentId;
	}

	public int getInsuranceAccNo() {
		return insuranceAccNo;
	}

	public void setInsuranceAccNo(int insuranceAccNo) {
		this.insuranceAccNo = insuranceAccNo;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public double getPaidAmount() {
		return paidAmount;
	}

	public void setPaidAmount(double paidAmount) {
		this.paidAmount = paidAmount;
	}

	

	public double getTotalAmount() {
		return totalAmount;
	}

	public void setTotalAmount(double totalAmount) {
		this.totalAmount = totalAmount;
	}

	public Date getPaidDate() {
		return paidDate;
	}

	public void setPaidDate(Date paidDate) {
		this.paidDate = paidDate;
	}

	public String getTransferType() {
		return transferType;
	}

	public void setTransferType(String transferType) {
		this.transferType = transferType;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

}
