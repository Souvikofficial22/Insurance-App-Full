package com.monocept.service;

import java.util.List;

import com.monocept.entity.Policy;
import com.monocept.entity.PolicyDetails;

public interface IPolicyService {

	public Policy save(Policy policy);
	public List<Policy> getAllPolicy(int page,int size);
	public Policy getPolicyById(int id);
	public Policy update(Policy policy);
	public void deleteById(int id);
	public Policy updateDetails(int id, PolicyDetails details);
}
