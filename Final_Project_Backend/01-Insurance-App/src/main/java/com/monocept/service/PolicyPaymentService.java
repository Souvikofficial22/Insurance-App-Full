package com.monocept.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.monocept.entity.PolicyPayment;
import com.monocept.repository.PolicyPaymentRepository;

@Service
public class PolicyPaymentService implements IPolicyPaymentService{

	@Autowired
	PolicyPaymentRepository paymentRepo;
	
	@Override
	public List<PolicyPayment> findAll() {
		return paymentRepo.findAll();
	}

	@Override
	public PolicyPayment save(PolicyPayment payment) {
		return paymentRepo.save(payment);
		
	}

	@Override
	public List<PolicyPayment> saveAll(List<PolicyPayment> paymentList) {
		return paymentRepo.saveAll(paymentList);
	}

	@Override
	public PolicyPayment findById(int paymentId) {
		return paymentRepo.findById(paymentId).get(); 
	}

	@Override
	public void deleteById(int paymentId) {
		paymentRepo.deleteById(paymentId);
		
	}

	@Override
	public Page<PolicyPayment> findAll(int offset, int pageSize) {
		return paymentRepo.findAll(PageRequest.of(offset, pageSize));
	}

}
