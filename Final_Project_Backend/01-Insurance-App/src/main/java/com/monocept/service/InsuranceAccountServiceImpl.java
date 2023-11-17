package com.monocept.service;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.monocept.entity.InsuranceAccount;
import com.monocept.entity.PolicyPayment;
import com.monocept.repository.InsuranceAccountRepository;


@Service
public class InsuranceAccountServiceImpl implements IInsuranceAccountService {

	@Autowired
	private InsuranceAccountRepository insuranceAccRepo;

	@Autowired
	private IPolicyPaymentService paymentService;
	
	@Override
	public List<InsuranceAccount> findAll() {
		return insuranceAccRepo.findAll();
	}

	@Override
	public InsuranceAccount save(InsuranceAccount insuranceAcc) {
		return insuranceAccRepo.save(insuranceAcc);
	}

	@Override
	public List<InsuranceAccount> saveAll(List<InsuranceAccount> insuranceAccList) {
		return insuranceAccRepo.saveAll(insuranceAccList);
	}

	@Override
	public InsuranceAccount findById(int insuranceAccId) {
		return insuranceAccRepo.findById(insuranceAccId).get();
	}

	@Override
	public void deleteById(int insuranceAccId) {
		insuranceAccRepo.deleteById(insuranceAccId);

	}

	@Override
	public Page<InsuranceAccount> findAll(int offset, int pageSize) {
		Page<InsuranceAccount> accounts = insuranceAccRepo.findAll(PageRequest.of(offset, pageSize));
		return accounts;
	}
	
	@Override
	public InsuranceAccount addPaymentToAccount(int paymentId, int insuranceAccNo) {
		InsuranceAccount account = insuranceAccRepo.findById(insuranceAccNo).get();
		PolicyPayment payment = paymentService.findById(paymentId);
		Set<PolicyPayment> policyPayments = account.getPolicyPayments();
		policyPayments.add(payment);
		account.setPolicyPayments(policyPayments);

		return insuranceAccRepo.save(account);
	}

}
