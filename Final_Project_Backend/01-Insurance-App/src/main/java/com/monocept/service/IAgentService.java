package com.monocept.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.monocept.entity.Agent;

public interface IAgentService {

	List<Agent> findAll();

	Agent save(Agent agent);

	Agent findById(int agentId);

	void deleteById(int agentId);

	List<Agent> saveAll(List<Agent> agentList);

	Agent addCustomerToAgent(int agentId, int customerId);

	Page<Agent> findAll(int offset, int pageSize);

	Agent getAgentByUsername(String username);

	Agent updateAgent(Agent agent, String userName);

	

}
