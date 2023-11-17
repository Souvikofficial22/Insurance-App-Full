package com.monocept.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.monocept.entity.InsuranceAccount;

public interface IInsuranceAccountService {

	List<InsuranceAccount> findAll();

	InsuranceAccount save(InsuranceAccount insuranceAcc);

	List<InsuranceAccount> saveAll(List<InsuranceAccount> insuranceAccList);

	InsuranceAccount findById(int insuranceAccId);

	void deleteById(int insuranceAccId);

	Page<InsuranceAccount> findAll(int offset, int pageSize);

	InsuranceAccount addPaymentToAccount(int paymentId, int insuranceAccNo);

}
