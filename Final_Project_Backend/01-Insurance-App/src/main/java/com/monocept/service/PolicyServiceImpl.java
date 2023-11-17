package com.monocept.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.monocept.entity.Policy;
import com.monocept.entity.PolicyDetails;
import com.monocept.exception.UserNotFoundException;
import com.monocept.repository.PolicyRepository;

@Service
public class PolicyServiceImpl implements IPolicyService {

	@Autowired
	private PolicyRepository policyRepo;

	@Override
	public Policy save(Policy Policy) {
		return policyRepo.save(Policy);
	}

	@Override
	public List<Policy> getAllPolicy(int page, int size) {
		return policyRepo.findAll();
	}

	@Override
	public Policy getPolicyById(int id) {
		Optional<Policy> policy = policyRepo.findById(id);
		if (!policy.isPresent()) {
			throw new UserNotFoundException("Policy with id " + id + " not found");
		}
		return policy.get();
	}

	@Override
	public Policy update(Policy Policy) {
		Optional<Policy> policy = policyRepo.findById(Policy.getPolicyId());
		if (!policy.isPresent()) {
			throw new UserNotFoundException("Policy with id " + Policy.getPolicyId() + " not found");
		}
		Policy policy2 = policy.get();
		policy2.setDescription(Policy.getDescription());
		policy2.setDetails(Policy.getDetails());
		policy2.setImageData(Policy.getImageData());
		policy2.setInstallmentCommission(Policy.getInstallmentCommission());
		policy2.setNewCommission(Policy.getNewCommission());
		policy2.setPlan(Policy.getPlan());
		policy2.setPolicyName(Policy.getPolicyName());
		policy2.setStatus(Policy.getStatus());
		return policyRepo.save(policy2);
	}

	@Override
	public void deleteById(int id) {
		policyRepo.deleteById(id);
	}

	@Override
	public Policy updateDetails(int id, PolicyDetails details) {
		Optional<Policy> policyById = policyRepo.findById(id);
		if(!policyById.isPresent()) {
			throw new UserNotFoundException("Policy with id "+id+" not found");
		}
		Policy policy = policyById.get();
		policy.setDetails(details);
		return policyRepo.save(policy);
	}
}
