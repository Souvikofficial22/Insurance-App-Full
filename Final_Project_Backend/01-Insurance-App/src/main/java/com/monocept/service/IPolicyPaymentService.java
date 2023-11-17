package com.monocept.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.monocept.entity.PolicyPayment;

public interface IPolicyPaymentService {

	List<PolicyPayment> findAll();

	PolicyPayment save(PolicyPayment payment);

	List<PolicyPayment> saveAll(List<PolicyPayment> customerList);

	PolicyPayment findById(int paymentId);

	void deleteById(int paymentId);

	Page<PolicyPayment> findAll(int offset, int pageSize);

}
