package com.monocept.service;

import java.util.List;

import com.monocept.entity.PolicyDetails;

public interface IPolicyDetailsService{

	public PolicyDetails save(int id,PolicyDetails policyDetails);
	public List<PolicyDetails> getAllPolicyDetails(int page,int size);
	public PolicyDetails getPolicyDetailsById(int id);
	public PolicyDetails update(PolicyDetails policyDetails);
}
