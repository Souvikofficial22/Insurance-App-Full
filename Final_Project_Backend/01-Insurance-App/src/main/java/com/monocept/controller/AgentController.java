package com.monocept.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.monocept.entity.Agent;
import com.monocept.exception.UserNotFoundException;
import com.monocept.service.IAgentService;

@RestController
@RequestMapping("/agentapp")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class AgentController {

	@Autowired
	private IAgentService agentService;
	
	// get list of all agents
		@GetMapping("/agents")
		public List<Agent> findAll() {
			List<Agent> agents = agentService.findAll();
			return agents;
		}
		
//		get all with pagination
		@GetMapping("/agents/{offset}/{pageSize}")
		public Page<Agent> getAllPagination(@PathVariable int offset, @PathVariable int pageSize) {
			Page<Agent> agents = agentService.findAll(offset, pageSize);
			return agents;
			
		}

		// save
		@PostMapping("/save")
		public ResponseEntity<Agent> saveAgent(@RequestBody Agent agent) {
			agentService.save(agent);
			return new ResponseEntity<>(HttpStatus.CREATED);
		}

		// save all
		@PostMapping("/saveall")
		public List<Agent> saveAllAgents(@RequestBody List<Agent> agentList) {
			return agentService.saveAll(agentList);
		}

		// get agent by id
		@GetMapping("/getbyid/{agentId}")
		public Agent findById(@PathVariable int agentId) {
			Agent agent = null;
			agent = agentService.findById(agentId);
			if (agent == null) {
				throw new UserNotFoundException("Agent with id " + agentId + " is not found");
			}
			return agent;
		}
		
		//get agent by agent username
		@GetMapping("/getusername/{username}")
		public Agent getByUsername(@PathVariable String username) {
			return agentService.getAgentByUsername(username);
		}

		@PutMapping("/update/username/{userName}")
		public ResponseEntity<Agent> updateAgent(@RequestBody Agent agent,@PathVariable String userName) {
			agentService.updateAgent(agent, userName);
			return new ResponseEntity<>(HttpStatus.OK);
		}
		
		// delete agent by id
		@PutMapping("/delete/{agentId}")
		public void deleteAgentById(@PathVariable int agentId) {
			agentService.deleteById(agentId);
		}

		// adding customers to agent
		@PutMapping("/agentid/{agentId}/customer/{customerId}")
		public Agent assignCustomerToAgent(@PathVariable int agentId, @PathVariable int customerId) {
			return agentService.addCustomerToAgent(agentId, customerId);
		}
		
}
