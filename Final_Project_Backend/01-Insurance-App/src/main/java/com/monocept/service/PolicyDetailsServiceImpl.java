package com.monocept.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.monocept.entity.Policy;
import com.monocept.entity.PolicyDetails;
import com.monocept.exception.UserNotFoundException;
import com.monocept.repository.PolicyDetailsRepository;
import com.monocept.repository.PolicyRepository;


@Service
public class PolicyDetailsServiceImpl implements IPolicyDetailsService {

	@Autowired
	private PolicyDetailsRepository detailRepo;
	
	@Autowired
	private PolicyRepository policyRepo;
	
	@Override
	public PolicyDetails save(int id,PolicyDetails PolicyDetails) {
		  Policy policy = policyRepo.findById(id).get();
		  policy.setDetails(PolicyDetails);
//		  PolicyDetails.setPolicy(policy);
		  PolicyDetails save = detailRepo.save(PolicyDetails);
		  policyRepo.save(policy);
		  return save;
	}

	@Override
	public List<PolicyDetails> getAllPolicyDetails(int page, int size) {
		return detailRepo.findAll();
	}

	@Override
	public PolicyDetails getPolicyDetailsById(int id) {
		Optional<PolicyDetails> policyDetail = detailRepo.findById(id);
		if(!policyDetail.isPresent()) {
			throw new UserNotFoundException("policyDetail with id "+id+" not found");
		}
		return policyDetail.get();
	}

	@Override
	public PolicyDetails update(PolicyDetails PolicyDetails) {
		Optional<PolicyDetails> policyDetail = detailRepo.findById(PolicyDetails.getDetailId());
		if(!policyDetail.isPresent()) {
			throw new UserNotFoundException("Policy Detail with id "+PolicyDetails.getDetailId()+" not found");
		}
		PolicyDetails policyDetails2 = policyDetail.get();
		policyDetails2.setMaxiAge(PolicyDetails.getMaxiAge());
		policyDetails2.setMiniAge(PolicyDetails.getMaxiAge());
		policyDetails2.setMaxiInvestmentTime(PolicyDetails.getMaxiInvestmentTime());
		policyDetails2.setMiniInvestmentTime(PolicyDetails.getMiniInvestmentTime());
		policyDetails2.setMiniAmount(PolicyDetails.getMiniAmount());
		policyDetails2.setMaxiAmount(PolicyDetails.getMaxiAmount());
		return detailRepo.save(policyDetails2);
	}

}
