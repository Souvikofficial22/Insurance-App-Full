package com.monocept.service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.monocept.entity.Agent;
import com.monocept.entity.Customer;
import com.monocept.entity.Agent;
import com.monocept.entity.Status;
import com.monocept.entity.User;
import com.monocept.exception.UserNotFoundException;
import com.monocept.repository.AgentRepository;
import com.monocept.repository.CustomerRepository;
import com.monocept.repository.UserRepository;

@Service
public class AgentServiceImpl implements IAgentService {

	@Autowired
	AgentRepository agentRepo;

	@Autowired
	CustomerRepository customerRepo;
	
	@Autowired
	UserRepository userRepo;

	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	@Override
	public List<Agent> findAll() {
		return agentRepo.findAll();
	}

	@Override
	public Agent save(Agent agent) {
		agent.getUser().setPassword(bCryptPasswordEncoder.encode(agent.getUser().getPassword()));
		return agentRepo.save(agent);

	}

	@Override
	public Agent findById(int agentId) {
		return agentRepo.findById(agentId).get();
	}

	@Override
	public void deleteById(int agentId) {
		Optional<User> agentById = userRepo.findById(agentId);
		if (!agentById.isPresent()) {
			throw new UserNotFoundException("Agent with id " + agentId + " not found");
		}
		User user = agentById.get();
		Status currentStatus = user.getStatus();

		if (currentStatus == Status.ACTIVE) {
			user.setStatus(Status.INACTIVE);
		} 

		 userRepo.save(user);

	}

	@Override
	public List<Agent> saveAll(List<Agent> agentList) {
		return agentRepo.saveAll(agentList);
	}

	@Override
	public Agent addCustomerToAgent(int agentId, int customerId) {
		Agent agent = agentRepo.findById(agentId).get();
		Customer customer = customerRepo.findById(customerId).get();
		Set<Customer> customers = agent.getCustomers();
		customers.add(customer);
		agent.setCustomers(customers);
		return agentRepo.save(agent);
	}

	@Override
	public Page<Agent> findAll(int offset, int pageSize) {
		Page<Agent> agents = agentRepo.findAll(PageRequest.of(offset, pageSize));
		return agents;
	}

	@Override
	public Agent getAgentByUsername(String username) {
		Agent agent = agentRepo.findByUsername(username);
		return agent;
	}
	
	@Override
	public Agent updateAgent(Agent agent, String userName) {
		Agent dbAgent = getAgentByUsername(userName);
		dbAgent.setQualification(agent.getQualification());
		dbAgent.getUser().setAddress(agent.getUser().getAddress());
		dbAgent.getUser().setEmail(agent.getUser().getEmail());

		agentRepo.save(dbAgent);
		return dbAgent;

	}

}
